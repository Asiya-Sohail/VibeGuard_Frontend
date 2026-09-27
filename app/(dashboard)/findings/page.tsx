import { MOCK_FINDINGS } from '@/lib/mock-data';
import { FindingCard } from '@/components/findings/FindingCard';

export default function FindingsPage() {
  return (
    <div style={{ padding: '40px', maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: 32 }}>
        <h1>Security findings</h1>
        <p>Issues identified across your sample scans.</p>
      </header>
      <div style={{ display: 'grid', gap: 16 }}>
        {MOCK_FINDINGS.map((finding) => <FindingCard key={finding.id} finding={finding} scanId={finding.scanId} />)}
      </div>
    </div>
  );
}
