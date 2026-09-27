import Link from 'next/link';
import { MOCK_SCANS } from '@/lib/mock-data';
import ScanCard from '@/components/scan/ScanCard';

export default function ScansPage() {
  return (
    <div style={{ padding: '40px', maxWidth: 1400, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, marginBottom: 32 }}>
        <div><h1>Scan history</h1><p>Review completed security scans and their findings.</p></div>
        <Link href="/scan" className="button button-primary button-md">New scan</Link>
      </header>
      <p style={{ marginBottom: 20 }}>{MOCK_SCANS.length} sample scans</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
        {MOCK_SCANS.map((scan) => <ScanCard key={scan.id} scan={scan} />)}
      </div>
    </div>
  );
}
