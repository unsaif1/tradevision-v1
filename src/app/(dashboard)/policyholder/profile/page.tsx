import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, SectionHeader, Button } from '@/components/ui';

const RED = '#e21e51';

export default function PolicyholderProfilePage() {
  return (
    <PortalLayout role="policyholder">
      <SectionHeader
        title="My Profile"
        subtitle="Policy information, contact details, and account settings"
        action={<Button variant="primary" accent={RED} icon="save">Save Changes</Button>}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left: personal info */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Personal details */}
          <Card>
            <CardHeader title="Personal Information" icon="manage_accounts" accent={RED} />
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'First Name', value: 'Robert', placeholder: 'First name' },
                { label: 'Last Name', value: 'Callahan', placeholder: 'Last name' },
                { label: 'Email Address', value: 'r.callahan@email.com', placeholder: 'Email' },
                { label: 'Phone Number', value: '(305) 881-2244', placeholder: 'Phone' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest mb-1.5">
                    {f.label}
                  </label>
                  <input
                    type="text"
                    defaultValue={f.value}
                    placeholder={f.placeholder}
                    className="w-full bg-[#1A1D23] border border-[#2A2D35] px-3 py-2.5 font-['Manrope',sans-serif] text-[13px] text-[#FFFFFF] outline-none focus:border-[#e21e51] transition-colors"
                    style={{ borderRadius: '0.125rem' }}
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="block font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest mb-1.5">
                  Property Address
                </label>
                <input
                  type="text"
                  defaultValue="1420 NW 12th Ave, Miami FL 33125"
                  className="w-full bg-[#1A1D23] border border-[#2A2D35] px-3 py-2.5 font-['Manrope',sans-serif] text-[13px] text-[#FFFFFF] outline-none focus:border-[#e21e51] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                />
              </div>
            </div>
          </Card>

          {/* Policy info (read-only) */}
          <Card>
            <CardHeader title="Policy Information" icon="shield" accent={RED} />
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Policy Number', value: 'SH-2024-441892', readOnly: true },
                { label: 'Policy Type', value: 'Homeowner — HO-3', readOnly: true },
                { label: 'Coverage Limit', value: '$350,000', readOnly: true },
                { label: 'Deductible', value: '$2,500', readOnly: true },
                { label: 'Effective Date', value: 'Jan 1, 2024', readOnly: true },
                { label: 'Expiration Date', value: 'Dec 31, 2024', readOnly: true },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest mb-1.5">
                    {f.label}
                  </label>
                  <div
                    className="w-full bg-[#0D0F11] border border-[#2A2D35] px-3 py-2.5 font-['Manrope',sans-serif] text-[13px] text-[#8B95A1]"
                    style={{ borderRadius: '0.125rem' }}
                  >
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 pb-5">
              <div
                className="flex items-center gap-2 p-3"
                style={{ background: `${RED}08`, border: `1px solid ${RED}20`, borderRadius: '0.125rem' }}
              >
                <span className="material-symbols-outlined text-[16px]" style={{ color: RED }}>info</span>
                <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">
                  Policy details are managed by SaifHaven. Contact your agent to make changes.
                </p>
              </div>
            </div>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader title="Security" icon="lock" accent={RED} />
            <div className="p-5 flex flex-col gap-4">
              <div>
                <label className="block font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest mb-1.5">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full bg-[#1A1D23] border border-[#2A2D35] px-3 py-2.5 font-['Manrope',sans-serif] text-[13px] text-[#FFFFFF] outline-none focus:border-[#e21e51] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest mb-1.5">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full bg-[#1A1D23] border border-[#2A2D35] px-3 py-2.5 font-['Manrope',sans-serif] text-[13px] text-[#FFFFFF] outline-none focus:border-[#e21e51] transition-colors"
                    style={{ borderRadius: '0.125rem' }}
                  />
                </div>
                <div>
                  <label className="block font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest mb-1.5">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full bg-[#1A1D23] border border-[#2A2D35] px-3 py-2.5 font-['Manrope',sans-serif] text-[13px] text-[#FFFFFF] outline-none focus:border-[#e21e51] transition-colors"
                    style={{ borderRadius: '0.125rem' }}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" accent={RED} size="sm" icon="lock_reset">Update Password</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right: avatar + contact card */}
        <div className="flex flex-col gap-5">
          {/* Avatar card */}
          <Card>
            <div className="p-6 flex flex-col items-center text-center">
              <div
                className="w-20 h-20 rounded-sm flex items-center justify-center font-['Barlow_Condensed',sans-serif] font-bold text-[28px] mb-4"
                style={{ background: `${RED}18`, color: RED, border: `2px solid ${RED}40` }}
              >
                RC
              </div>
              <p className="font-['Barlow_Condensed',sans-serif] text-[20px] font-bold text-[#FFFFFF]">Robert Callahan</p>
              <p className="font-['Manrope',sans-serif] text-[12px] text-[#8B95A1] mb-1">r.callahan@email.com</p>
              <Badge variant="primary">Policyholder</Badge>
              <p className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] mt-3">Member since Jan 2024</p>
              <Button variant="ghost" accent={RED} size="sm" icon="photo_camera" className="mt-4 w-full justify-center">Update Photo</Button>
            </div>
          </Card>

          {/* Contact adjuster */}
          <Card>
            <CardHeader title="Your Adjuster" icon="support_agent" accent={RED} />
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center font-['Barlow_Condensed',sans-serif] font-bold text-[15px] shrink-0"
                  style={{ background: '#ff007a18', color: '#E21E51', border: '1px solid #ff007a30' }}
                >
                  SR
                </div>
                <div>
                  <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF]">S. Reyes</p>
                  <p className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1]">Senior Adjuster</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="ghost" accent={RED} size="sm" icon="forum" className="w-full justify-center">Send Message</Button>
                <Button variant="ghost" accent={RED} size="sm" icon="phone" className="w-full justify-center">(305) 448-9910</Button>
              </div>
            </div>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader title="Notifications" icon="notifications" accent={RED} />
            <div className="p-4 flex flex-col gap-3">
              {[
                { label: 'Claim status updates', enabled: true },
                { label: 'New messages', enabled: true },
                { label: 'Document uploads', enabled: true },
                { label: 'Payment confirmations', enabled: true },
                { label: 'Promotional emails', enabled: false },
              ].map((n) => (
                <div key={n.label} className="flex items-center justify-between">
                  <span className="font-['Manrope',sans-serif] text-[12px] text-[#FFFFFF]">{n.label}</span>
                  <div
                    className="w-9 h-5 rounded-full relative cursor-pointer transition-colors"
                    style={{ background: n.enabled ? RED : '#2A2D35' }}
                  >
                    <div
                      className="w-3.5 h-3.5 rounded-full bg-white absolute top-0.5 transition-all"
                      style={{ left: n.enabled ? '18px' : '3px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}
