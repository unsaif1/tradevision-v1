import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, ProgressBar, SectionHeader, Button } from '@/components/ui';

const CYAN = '#00D4AA';

const MATERIALS = [
  { id: 'MAT-001', item: 'TPO Membrane 60-mil White', sku: 'TPO-060-WHT', category: 'Membrane', qty: 28, unit: 'Roll', supplier: 'ABC Supply Co.', unitCost: 180, status: 'in-stock', location: 'Yard A-3', minQty: 10 },
  { id: 'MAT-002', item: 'Arch. Shingles — Charcoal', sku: 'SHGL-CHA-25', category: 'Shingles',  qty: 0,  unit: 'Square', supplier: 'Beacon Roofing', unitCost: 125, status: 'out-of-stock', location: '—', minQty: 15 },
  { id: 'MAT-003', item: 'Ice & Water Shield', sku: 'IWS-GRD-3', category: 'Underlayment', qty: 14, unit: 'Roll', supplier: 'ABC Supply Co.', unitCost: 95, status: 'low', location: 'Yard A-1', minQty: 20 },
  { id: 'MAT-004', item: 'Metal Ridge Cap — Gray', sku: 'RDG-MTL-GRY', category: 'Flashing', qty: 42, unit: 'Piece', supplier: 'SRS Distribution', unitCost: 18, status: 'in-stock', location: 'Shed B', minQty: 10 },
  { id: 'MAT-005', item: 'Roofing Nails 1-3/4"', sku: 'NAIL-175-5LB', category: 'Fasteners', qty: 6,  unit: 'Box', supplier: 'Home Depot Pro', unitCost: 22, status: 'low', location: 'Truck TR-04', minQty: 10 },
  { id: 'MAT-006', item: 'Drip Edge — White Aluminum', sku: 'DRP-ALU-WHT', category: 'Flashing', qty: 88, unit: 'Piece', supplier: 'SRS Distribution', unitCost: 9, status: 'in-stock', location: 'Yard A-3', minQty: 20 },
  { id: 'MAT-007', item: 'EPDM Membrane 45-mil', sku: 'EPD-045-BLK', category: 'Membrane', qty: 5,  unit: 'Roll', supplier: 'Firestone Building', unitCost: 240, status: 'low', location: 'Yard A-2', minQty: 8 },
  { id: 'MAT-008', item: 'Spray Foam Adhesive', sku: 'ADH-SPR-24OZ', category: 'Adhesive', qty: 33, unit: 'Can', supplier: 'Local Hardware', unitCost: 12, status: 'in-stock', location: 'Shed B', minQty: 10 },
];

const STATUS_VARIANT: Record<string, 'success' | 'error' | 'warning'> = {
  'in-stock':     'success',
  'out-of-stock': 'error',
  'low':          'warning',
};

const CATEGORIES = ['All', 'Membrane', 'Shingles', 'Underlayment', 'Flashing', 'Fasteners', 'Adhesive'];

export default function ContractorMaterialsPage() {
  const totalValue = MATERIALS.reduce((s, m) => s + m.qty * m.unitCost, 0);
  const lowOrOut   = MATERIALS.filter(m => m.status !== 'in-stock').length;

  return (
    <PortalLayout role="contractor">
      <SectionHeader
        title="Materials Inventory"
        subtitle="Stock levels, suppliers, and reorder management"
        action={<Button variant="primary" accent={CYAN} icon="add_shopping_cart">Order Materials</Button>}
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'SKUs Tracked',  val: MATERIALS.length,              color: CYAN },
          { label: 'Alerts',        val: lowOrOut,                      color: '#ff9100' },
          { label: 'Out of Stock',  val: MATERIALS.filter(m => m.status === 'out-of-stock').length, color: '#f43f5e' },
          { label: 'Stock Value',   val: `$${(totalValue / 1000).toFixed(1)}K`, color: '#4ade80' },
        ].map((s) => (
          <div key={s.label} className="bg-[#1A1D23] border border-[#2A2D35] p-4" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: s.color }}>
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest block mb-2">{s.label}</span>
            <p className="font-['Barlow_Condensed',sans-serif] text-[28px] font-bold leading-none" style={{ color: s.color }}>{s.val}</p>
          </div>
        ))}
      </div>

      {/* Category filter */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat}
            className="shrink-0 px-3 py-1.5 font-['Barlow_Condensed',sans-serif] text-[12px] tracking-wider uppercase border transition-colors"
            style={
              i === 0
                ? { background: `${CYAN}18`, borderColor: CYAN, color: CYAN, borderRadius: '0.125rem' }
                : { background: 'transparent', borderColor: '#2A2D35', color: '#8B95A1', borderRadius: '0.125rem' }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <Card>
        <CardHeader
          title="Inventory Ledger"
          icon="inventory_2"
          accent={CYAN}
          action={
            <div className="flex gap-2">
              <Button variant="ghost" accent={CYAN} size="sm" icon="upload">Import</Button>
              <Button variant="ghost" accent={CYAN} size="sm" icon="download">Export</Button>
            </div>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="border-b border-[#2A2D35]">
                {['Item', 'SKU', 'Category', 'Stock Level', 'Unit Cost', 'Total Value', 'Supplier', 'Location', 'Status', ''].map(h => (
                  <th key={h} className="px-4 py-3 text-left font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-[0.1em]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2D35]">
              {MATERIALS.map((m) => (
                <tr key={m.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-4 py-3.5">
                    <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF]">{m.item}</p>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1]">{m.sku}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <Badge variant="tertiary">{m.category}</Badge>
                  </td>
                  <td className="px-4 py-3.5 w-36">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-['JetBrains_Mono',monospace] text-[12px] font-bold" style={{ color: m.qty === 0 ? '#f43f5e' : m.qty < m.minQty ? '#ff9100' : '#4ade80' }}>
                        {m.qty} {m.unit}
                      </span>
                    </div>
                    <ProgressBar
                      value={Math.min(m.qty, m.minQty * 2)}
                      max={m.minQty * 2}
                      showPct={false}
                      accent={m.qty === 0 ? '#f43f5e' : m.qty < m.minQty ? '#ff9100' : '#4ade80'}
                    />
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#FFFFFF]">${m.unitCost}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['Barlow_Condensed',sans-serif] text-[14px] font-bold text-[#FFFFFF]">
                      ${(m.qty * m.unitCost).toLocaleString()}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['Manrope',sans-serif] text-[12px] text-[#8B95A1]">{m.supplier}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1]">{m.location}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <Badge variant={STATUS_VARIANT[m.status]}>{m.status.replace('-', ' ')}</Badge>
                  </td>
                  <td className="px-4 py-3.5">
                    <Button variant="ghost" accent={CYAN} size="sm" icon="add_shopping_cart" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      Reorder
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PortalLayout>
  );
}
