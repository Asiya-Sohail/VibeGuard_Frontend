// app/(dashboard)/dashboard/page.tsx
// Dashboard Page - Main overview of all applications and recent scans
// Shows statistics, recent scans, and security overview

'use client';

import Link from 'next/link';
import { MOCK_DASHBOARD_STATS, MOCK_SCANS } from '@/lib/mock-data';
import { Card, Button, StatCard, Badge } from '@/components/ui';
import ScanCard from '@/components/scan/ScanCard';
import styles from './dashboard.module.css';

/**
 * DASHBOARD PAGE
 * 
 * This page demonstrates:
 * - Using mock data
 * - Component composition
 * - Responsive grid layout
 * - Loading states
 * - Real-world data patterns
 * 
 * BACKEND INTEGRATION POINT:
 * Replace MOCK_DASHBOARD_STATS and MOCK_SCANS with actual API calls:
 * 
 * const response = await fetch('/api/dashboard/stats', {
 *   headers: { 'Authorization': `Bearer ${token}` }
 * });
 * const stats = await response.json();
 */
export default function DashboardPage() {
  const stats = MOCK_DASHBOARD_STATS;
  const recentScans = MOCK_SCANS.slice(0, 3);

  return (
    <div className={styles.page}>
      {/* PAGE HEADER */}
      <div className={styles.header}>
        <div>
          <h1>Dashboard</h1>
          <p className={styles.subtitle}>Monitor your applications' security in real-time</p>
        </div>
        <Link href="/scan">
          <Button variant="primary" size="lg">
            + New Scan
          </Button>
        </Link>
      </div>

      {/* STATISTICS GRID */}
      {
        <section className={styles.statsGrid}>
          <StatCard
            label="Total Applications"
            value={stats.totalApplications}
            icon={<AppIcon />}
          />
          <StatCard
            label="Total Scans"
            value={stats.totalScans}
            trend="up"
            trendValue="12 this month"
            icon={<ScanIcon />}
          />
          <StatCard
            label="Open Issues"
            value={stats.openIssues}
            trend="down"
            trendValue="3 resolved this week"
            icon={<IssueIcon />}
          />
          <StatCard
            label="Verified Issues"
            value={stats.verifiedIssues}
            icon={<CheckIcon />}
          />
          <StatCard
            label="Avg. Security Score"
            value={`${stats.averageSecurityScore}%`}
            description="Across all applications"
            icon={<ShieldIcon />}
          />
          <StatCard
            label="Critical Findings"
            value={stats.criticalFindings}
            trend="up"
            trendValue="Needs immediate attention"
            icon={<AlertIcon />}
          />
        </section>
      }

      {/* SECURITY OVERVIEW CHART */}
      <section className={styles.section}>
        <Card hasBorder padding="lg">
          <div className={styles.chartHeader}>
            <h2>Security Overview</h2>
            <p className={styles.chartSubtitle}>Vulnerability distribution across all scans</p>
          </div>

          {/* Vulnerability Distribution Bar Chart */}
          <div className={styles.chartContainer}>
            <div className={styles.chartItem}>
              <div className={styles.chartBar}>
                <div className={styles.barSegment} style={{ backgroundColor: 'var(--color-critical)', width: '25%' }} />
                <div className={styles.barSegment} style={{ backgroundColor: 'var(--color-high)', width: '40%' }} />
                <div className={styles.barSegment} style={{ backgroundColor: 'var(--color-medium)', width: '65%' }} />
                <div className={styles.barSegment} style={{ backgroundColor: 'var(--color-low)', width: '30%' }} />
              </div>
            </div>

            {/* Legend */}
            <div className={styles.chartLegend}>
              <div className={styles.legendItem}>
                <Badge variant="critical">2 Critical</Badge>
              </div>
              <div className={styles.legendItem}>
                <Badge variant="high">4 High</Badge>
              </div>
              <div className={styles.legendItem}>
                <Badge variant="medium">6 Medium</Badge>
              </div>
              <div className={styles.legendItem}>
                <Badge variant="low">3 Low</Badge>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* RECENT SCANS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Recent Scans</h2>
          <Link href="/scans" className={styles.viewAllLink}>
            View All →
          </Link>
        </div>

        <div className={styles.scansGrid}>
          {recentScans.map((scan) => (
            <ScanCard key={scan.id} scan={scan} />
          ))}
        </div>
      </section>

      {/* RECOMMENDED ACTIONS */}
      <section className={styles.section}>
        <Card hasBorder padding="lg" className={styles.recommendedCard}>
          <h2 className={styles.recommendedTitle}>Recommended Actions</h2>
          <ul className={styles.recommendedList}>
            <li>
              <span className={styles.badge}>1</span>
              Fix broken authorization in Pharmacy SaaS (Critical)
            </li>
            <li>
              <span className={styles.badge}>2</span>
              Rotate exposed database credentials
            </li>
            <li>
              <span className={styles.badge}>3</span>
              Update outdated dependencies in Finance App
            </li>
            <li>
              <span className={styles.badge}>4</span>
              Implement rate limiting on authentication endpoints
            </li>
          </ul>
          <Link href="/findings" className={styles.viewAllLink}>
            View All Issues →
          </Link>
        </Card>
      </section>
    </div>
  );
}

/**
 * ICON COMPONENTS
 * Simple inline SVG icons for the stat cards
 */

function AppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IssueIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
