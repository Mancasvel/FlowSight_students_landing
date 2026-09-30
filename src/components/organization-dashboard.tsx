import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, LockKey, ShieldCheck, UsersThree } from "@phosphor-icons/react/dist/ssr";
import styles from "./organization-dashboard.module.css";

export type OrganizationDashboardData = {
  purchased: number;
  activated: number;
  contributors: number | null;
  totalFocusHours: number | null;
  averageFocusMinutes: number | null;
  averageDeepMinutes: number | null;
  interruptionsPerFocusHour: number | null;
  categories: { label: string; hours: number }[];
};

export const exampleDashboardData: OrganizationDashboardData = {
  purchased: 120,
  activated: 84,
  contributors: 63,
  totalFocusHours: 1280,
  averageFocusMinutes: 166,
  averageDeepMinutes: 78,
  interruptionsPerFocusHour: 3.1,
  categories: [
    { label: "Study & research", hours: 412 },
    { label: "Writing & creation", hours: 306 },
    { label: "Coding & building", hours: 244 },
    { label: "Planning & admin", hours: 188 },
    { label: "Communication", hours: 130 },
  ],
};

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  return `${hours}h ${String(remaining).padStart(2, "0")}m`;
}

export default function OrganizationDashboard({
  data,
  preview = false,
  backHref = "/",
}: {
  data: OrganizationDashboardData;
  preview?: boolean;
  backHref?: string;
}) {
  const hasMetrics = data.contributors !== null && data.contributors >= 10 &&
    data.totalFocusHours !== null && data.averageFocusMinutes !== null &&
    data.averageDeepMinutes !== null && data.interruptionsPerFocusHour !== null;
  const activationPercent = data.purchased > 0 ? Math.min(100, Math.round((data.activated / data.purchased) * 100)) : 0;
  const maxCategoryHours = Math.max(1, ...data.categories.map((category) => category.hours));

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#dashboard-main">Skip to overview</a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href={backHref} referrerPolicy="no-referrer" className={styles.brand} aria-label="FlowSight Students organizations">
            <Image src="/flowsight-icon-180.png" alt="" width={31} height={31} priority />
            <span>FlowSight <span>/ Organizations</span></span>
          </a>
          <span className={styles.privateLabel}><LockKey size={15} weight="bold" aria-hidden /> {preview ? "Concept preview" : "Private buyer view"}</span>
        </div>
      </header>

      <main id="dashboard-main" className={styles.main}>
        <div className={styles.backRow}>
          <a href={backHref} referrerPolicy="no-referrer"><ArrowLeft size={17} weight="bold" aria-hidden /> {preview ? "Back to the organization offer" : "Back to your licenses"}</a>
          <span>{preview ? "ILLUSTRATIVE FIGURES" : "VERIFIED PURCHASE"}</span>
        </div>

        <div className={styles.intro}>
          <div>
            <h1>A clearer view of the cohort.</h1>
            <p>See adoption and, with a separate student opt-in, broad focus patterns across the group. Each learner keeps their own sessions, apps, reports and activity history in their Individual app.</p>
          </div>
          <div className={styles.scopeNote}><ShieldCheck size={23} weight="duotone" aria-hidden /><span>Group totals only<br /><strong>No student profiles or rankings</strong></span></div>
        </div>

        {preview && <p className={styles.previewNotice}>This is an interface concept with sample figures. No student data is shown.</p>}

        <section className={styles.adoption} aria-labelledby="adoption-title">
          <div className={styles.sectionLead}>
            <div><h2 id="adoption-title">Licenses in use</h2><p>Codes with at least one active installation, across all operating systems.</p></div>
            <span>{preview ? "EXAMPLE COHORT" : "YOUR PURCHASE"}</span>
          </div>
          <div className={styles.adoptionBody}>
            <div className={styles.adoptionNumber}><strong>{data.activated}</strong><span>of {data.purchased} licenses activated</span></div>
            <div className={styles.adoptionRight}>
              <div className={styles.adoptionRatio}><span>{activationPercent}%</span><span>{data.purchased - data.activated} available</span></div>
              <div className={styles.progressTrack} role="img" aria-label={`${data.activated} of ${data.purchased} licenses activated`}><span style={{ width: `${activationPercent}%` }} /></div>
              <p>One student can activate Windows, macOS and Linux with the same code. The count includes each code once.</p>
            </div>
          </div>
        </section>

        <section className={styles.rhythm} aria-labelledby="rhythm-title">
          <div className={styles.sectionLead}>
            <div><h2 id="rhythm-title">How focus adds up</h2><p>Broad 28-day totals and averages from students who separately choose to contribute a summary.</p></div>
            <span>LAST 28 DAYS</span>
          </div>
          {hasMetrics ? (
            <>
              <div className={styles.rhythmBody}>
                <div className={styles.totalFocus}><strong>{data.totalFocusHours!.toLocaleString("en-GB")}<small>h</small></strong><span>group focus time</span><p>Across {data.contributors} contributing students. The average below is per student on a day they used the app.</p></div>
                <div className={styles.averageGrid}>
                  <div><strong>{formatDuration(data.averageFocusMinutes!)}</strong><span>average focus / active day</span></div>
                  <div><strong>{formatDuration(data.averageDeepMinutes!)}</strong><span>average deep focus / active day</span></div>
                  <div><strong>{data.interruptionsPerFocusHour!.toFixed(1)}</strong><span>interruptions / focus hour</span></div>
                </div>
              </div>
              <p className={styles.coverage}><UsersThree size={18} weight="duotone" aria-hidden /> Based on {data.contributors} voluntary contributors. Averages describe contributors, not every license holder.</p>
            </>
          ) : (
            <div className={styles.emptyMetrics}>
              <ShieldCheck size={30} weight="duotone" aria-hidden />
              <div><h3>Group focus data is not available yet.</h3><p>This area will open after the desktop app supports a separate, revocable opt-in and at least 10 students contribute broad summaries. Until then, no focus hours, deep-focus averages or interruption averages are shown.</p></div>
            </div>
          )}
        </section>

        <section className={styles.categories} aria-labelledby="categories-title">
          <div className={styles.sectionLead}>
            <div><h2 id="categories-title">Where the time went</h2><p>Hours grouped into broad activity categories. App names, tasks and personal reports are never listed here.</p></div>
            <span>GROUP TOTALS</span>
          </div>
          {hasMetrics && data.categories.length > 0 ? (
            <div className={styles.categoryList}>
              {data.categories.map((category) => (
                <div className={styles.categoryRow} key={category.label}>
                  <span>{category.label}</span>
                  <div className={styles.categoryTrack} aria-hidden="true"><span style={{ width: `${Math.round((category.hours / maxCategoryHours) * 100)}%` }} /></div>
                  <strong>{category.hours.toLocaleString("en-GB")} h</strong>
                </div>
              ))}
            </div>
          ) : <p className={styles.categoryEmpty}>Category totals will appear with the voluntary group summary.</p>}
        </section>

        <div className={styles.privacyFooter}>
          <LockKey size={20} weight="duotone" aria-hidden />
          <p>Students keep individual timelines and reports. This overview has no names, license-level activity, app titles or drill-down into a person.</p>
          <Link href="/#privacy">How privacy works <ArrowUpRight size={16} weight="bold" aria-hidden /></Link>
        </div>
      </main>
    </div>
  );
}
