'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Button } from '@/components/ui';

export default function ScanPage() {
  const [started, setStarted] = useState(false);
  return (
    <div style={{ padding: '40px', maxWidth: 900, margin: '0 auto' }}>
      <header style={{ marginBottom: 32 }}><h1>Start a security scan</h1><p>Enter an application to preview the scan setup. Backend scanning can be connected later.</p></header>
      <Card hasBorder padding="lg">
        <form onSubmit={(event) => { event.preventDefault(); setStarted(true); }} style={{ display: 'grid', gap: 20, maxWidth: 620 }}>
          <label style={{ display: 'grid', gap: 8 }}>Application name<input required placeholder="e.g. Customer Portal" /></label>
          <label style={{ display: 'grid', gap: 8 }}>Website URL<input required type="url" placeholder="https://example.com" /></label>
          <label style={{ display: 'grid', gap: 8 }}>Scan type<select defaultValue="web"><option value="web">Website security scan</option><option value="repository">Code repository scan</option></select></label>
          <Button type="submit">Preview scan</Button>
        </form>
        {started && <div role="status" style={{ marginTop: 24, padding: 16, border: '1px solid var(--color-border)', borderRadius: 8 }}><strong>Demo setup ready.</strong><p>Scan execution will be enabled when the backend is connected.</p><Link href="/scans">View sample scan history →</Link></div>}
      </Card>
    </div>
  );
}
