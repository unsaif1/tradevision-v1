import { getClaim, createAgentActivity } from '@/lib/db';
import { runAgent, type AgentType } from '@/lib/agents';

export const runtime = 'edge';

const VALID_TYPES: AgentType[] = [
  'intake', 'coverage', 'estimate', 'document',
  'settlement', 'adjuster', 'storm', 'status',
];

export async function POST(
  _: Request,
  { params }: { params: Promise<{ type: string; claimId: string }> }
) {
  try {
    const { type, claimId } = await params;

    if (!VALID_TYPES.includes(type as AgentType)) {
      return Response.json(
        { error: `Invalid agent type. Valid types: ${VALID_TYPES.join(', ')}` },
        { status: 400 }
      );
    }

    const claim = await getClaim(claimId);
    if (!claim) return Response.json({ error: 'Claim not found' }, { status: 404 });

    const activity = await createAgentActivity({
      claim_id: claimId,
      agent_type: type,
      status: 'running',
      result: null,
      error: null,
    });

    try {
      const result = await runAgent(type as AgentType, claim);
      const done = await createAgentActivity({
        claim_id: claimId,
        agent_type: type,
        status: 'completed',
        result: JSON.stringify(result),
        error: null,
      });
      return Response.json({ activity: done, result });
    } catch (runErr) {
      const errMsg = runErr instanceof Error ? runErr.message : 'Agent failed';
      await createAgentActivity({
        claim_id: claimId,
        agent_type: type,
        status: 'failed',
        result: null,
        error: errMsg,
      });
      return Response.json({ error: errMsg, activity_id: activity.id }, { status: 502 });
    }
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}
