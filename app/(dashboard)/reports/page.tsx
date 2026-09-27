import Link from 'next/link';
import { MOCK_SECURITY_REPORT } from '@/lib/mock-data';
import { Card } from '@/components/ui';

export default function ReportsPage() {
  const report = MOCK_SECURITY_REPORT;
  return (
    <div style={{ padding: '40px', maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: 32 }}><h1>Security reports</h1><p>Executive summaries and remediation recommendations from your scans.</p></header>
      <Card hasBorder padding="lg">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div><span className="badge badge--success"><span className="badge__text">Ready</span></span><h2 style={{ marginTop: 16 }}>{report.applicationName}</h2><p>Generated {report.generatedAt.toLocaleDateString()} · Score {report.securityScore}/100</p></div>
          <Link href={`/scan/${report.scanId}/report`} className="button button-primary button-md">View report →</Link>
        </div>
        <p style={{ marginTop: 20, lineHeight: 1.7 }}>{report.executiveSummary}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 20 }}>
          {Object.entries(report.riskSummary).map(([severity, count]) => <span key={severity} className={`badge badge--${severity}`}><span className="badge__text">{count} {severity}</span></span>)}
        </div>
      </Card>
    </div>
  );
}
