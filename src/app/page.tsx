import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Buildings,
  CheckCircle,
  Key,
  Lightbulb,
  LockKey,
  Monitor,
  Receipt,
  ShieldCheck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import {
  BULK_DISCOUNT_MIN_SEATS,
  BULK_LARGE_MIN_SEATS,
  INDIVIDUAL_PRICE_CENTS,
  LARGE_BULK_PRICE_CENTS,
  STANDARD_BULK_PRICE_CENTS,
} from "@/lib/organization-offer";
import { exampleDashboardData } from "@/components/organization-dashboard";
import { SupportedBy } from "@/components/supported-by";
import summaryCapture from "../../public/product/flowsight-summary.png";
import todayCapture from "../../public/product/flowsight-today.png";
import styles from "./organizations.module.css";

export const metadata: Metadata = {
  title: "FlowSight Students — organization pilot concept",
  description:
    "Private focus tools for students, with bulk licenses for universities, academies and organizations.",
  robots: { index: false, follow: false },
};

const pilotEmail =
  "mailto:manuel@flowsight.site?subject=FlowSight%20Students%20organization%20pilot";

export default function StudentsHome() {
  return (
    <div className={styles.page}>
      <a href="#content" className={styles.skipLink}>Skip to content</a>
      <aside className={styles.previewNotice} aria-label="Preview status">
        <span className={styles.previewDot} aria-hidden="true" />
        Concept preview · An organization pilot is being designed
      </aside>

      <header className={styles.header}>
        <div className={`${styles.frame} ${styles.headerInner}`}>
          <Link href="/" className={styles.brand} aria-label="FlowSight Students home">
            <Image src="/flowsight-icon-180.png" alt="" width={32} height={32} priority />
            <span>FlowSight <span className={styles.brandTail}>/ Students</span></span>
          </Link>
          <nav aria-label="Page navigation" className={styles.navigation}>
            <a href="#features">The app</a>
            <a href="#approach">The approach</a>
            <a href="/dashboard-preview">Cohort dashboard</a>
            <a href="#next">What&apos;s next</a>
            <a href="#privacy">Privacy</a>
          </nav>
          <a className={styles.headerAction} href={pilotEmail}>
            Discuss a pilot <ArrowUpRight size={17} weight="bold" aria-hidden />
          </a>
        </div>
      </header>

      <main id="content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={`${styles.frame} ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <h1 id="hero-title">
                <span>Give every student</span>
                <span>a place to <em>focus.</em></span>
              </h1>
              <p className={styles.heroDescription}>
                Equip a whole cohort in one order. Each learner gets a private desktop app for deep work and personal insights.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#licenses">
                  Explore bulk licenses <ArrowUpRight size={19} weight="bold" aria-hidden />
                </a>
                <a className={styles.textAction} href="/dashboard-preview">
                  Preview cohort dashboard <ArrowUpRight size={18} weight="bold" aria-hidden />
                </a>
              </div>
              <div className={styles.heroAssurance}>
                <ShieldCheck size={21} weight="duotone" aria-hidden />
                <span>Organizations see activated licenses, never individual activity.</span>
              </div>
              <p className={styles.heroFootnote}>Institutional checkout is not open yet.</p>
            </div>
            <figure className={styles.heroVisual}>
              <div className={`${styles.heroScreens} landing-surface`}>
                <div className={styles.visualTopline}>
                  <span>FlowSight Individual</span>
                  <span>Private desktop app</span>
                </div>
                <div className={styles.heroScreenBack}>
                  <Image
                    src={summaryCapture}
                    alt="Actual FlowSight Insights screen showing personal focus patterns with example data"
                    sizes="(max-width: 760px) 40vw, (max-width: 1200px) 19vw, 220px"
                    priority
                  />
                </div>
                <div className={styles.heroScreenFront}>
                  <Image
                    src={todayCapture}
                    alt="Actual FlowSight Today screen showing a daily goal, timer and current task with example data"
                    sizes="(max-width: 760px) 46vw, (max-width: 1200px) 23vw, 250px"
                    priority
                  />
                </div>
              </div>
              <figcaption className={styles.visualBottomline}>
                <span>Today + Insights</span>
                <span>Actual app captures · example data</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <SupportedBy />

        <section id="features" className={styles.features} aria-labelledby="features-title">
          <div className={styles.frame}>
            <div className={styles.sectionIntroduction}>
              <h2 id="features-title">The individual app is the real benefit.</h2>
              <p>These tools already exist in FlowSight Individual. Every learner works in their own space, with their own data and controls.</p>
            </div>

            <article className={styles.featureRow}>
              <div className={styles.featureCopy}>
                <span className={styles.featureMarker}><CheckCircle size={19} weight="fill" aria-hidden /> Available today</span>
                <h3>Start with the work in front of you.</h3>
                <p className={styles.featureLead}>A clear goal and a simple set of controls make it easier to protect a block of attention.</p>
                <ul className={styles.featureList}>
                  <li><strong>Daily goal and timer</strong><span>Set a focus target. Start, pause, resume or stop tracking when you choose.</span></li>
                  <li><strong>Current task</strong><span>Name what you are working on so the session has context.</span></li>
                  <li><strong>Local activity analysis</strong><span>The bundled model interprets screen context on the student&apos;s device.</span></li>
                </ul>
              </div>
              <figure className={`${styles.featureVisual} ${styles.featureVisualToday} landing-surface`}>
                <div className={styles.featureVisualMeta}><span>01 / TODAY</span><span>PERSONAL WORKSPACE</span></div>
                <Image
                  src={todayCapture}
                  alt="Actual Today screen with a daily goal, live timer, pause control and current task field, showing example data"
                  sizes="(max-width: 760px) 77vw, (max-width: 1200px) 35vw, 400px"
                />
                <figcaption>Real app capture · example data</figcaption>
              </figure>
            </article>

            <article className={`${styles.featureRow} ${styles.featureRowReverse}`}>
              <div className={styles.featureCopy}>
                <span className={styles.featureMarker}><CheckCircle size={19} weight="fill" aria-hidden /> Available today</span>
                <h3>See the shape of your attention.</h3>
                <p className={styles.featureLead}>Insights turn local history into a personal view of how study and deep work actually unfolded.</p>
                <ul className={styles.featureList}>
                  <li><strong>Sustained focus blocks</strong><span>Review focus time and the longer stretches that held together.</span></li>
                  <li><strong>Categories and context changes</strong><span>See how work was divided and where switching interrupted continuity.</span></li>
                  <li><strong>Weekly activity and highlights</strong><span>Revisit active days and personal focus patterns.</span></li>
                  <li><strong>Personal PDF report</strong><span>Generate a report from local history and export it for your own review.</span></li>
                </ul>
              </div>
              <figure className={`${styles.featureVisual} ${styles.featureVisualInsights} landing-surface`}>
                <div className={styles.featureVisualMeta}><span>02 / INSIGHTS</span><span>PERSONAL HISTORY</span></div>
                <Image
                  src={summaryCapture}
                  alt="Actual Insights screen with weekly activity, sustained focus, work categories and highlights, showing example data"
                  sizes="(max-width: 760px) 77vw, (max-width: 1200px) 35vw, 400px"
                />
                <figcaption>Real app capture · example data</figcaption>
              </figure>
            </article>
            <p className={styles.featuresFootnote}>Local mode works without a cloud account. The institution receives licenses to distribute, not these screens or a learner&apos;s report.</p>
          </div>
        </section>

        <section id="approach" className={styles.approach} aria-labelledby="approach-title">
          <div className={styles.frame}>
            <div className={styles.approachHeading}>
              <h2 id="approach-title">One order. A workspace for each learner.</h2>
              <p>A university, academy or organization can equip a group without becoming part of anyone&apos;s daily work.</p>
            </div>
            <div className={styles.licenseFlow}>
              <article className={styles.flowStep}>
                <div className={styles.flowIndex}>01 <Buildings size={30} weight="duotone" aria-hidden /></div>
                <h3>Purchase together</h3>
                <p>Choose the number of licenses and place one institutional order.</p>
                <span className={styles.flowDetail}><Receipt size={17} weight="bold" aria-hidden /> Order and invoice</span>
              </article>
              <article className={styles.flowStep}>
                <div className={styles.flowIndex}>02 <Key size={30} weight="duotone" aria-hidden /></div>
                <h3>Give everyone a code</h3>
                <p>Use the private CSV to hand each learner a separate license code.</p>
                <span className={styles.flowCode} aria-label="Illustrative masked license code">FSI-••••-••••</span>
              </article>
              <article className={styles.flowStep}>
                <div className={styles.flowIndex}>03 <Monitor size={30} weight="duotone" aria-hidden /></div>
                <h3>Let them work privately</h3>
                <p>Each person installs and uses their own FlowSight Individual app.</p>
                <span className={styles.flowDetail}>Today <ArrowRight size={14} weight="bold" aria-hidden /> Insights <ArrowRight size={14} weight="bold" aria-hidden /> Report</span>
              </article>
            </div>
            <p className={styles.distributionNote}>Bulk checkout remains closed while the pilot is being prepared. Student activity does not appear in the buyer&apos;s order.</p>
          </div>
        </section>

        <section id="overview" className={styles.overview} aria-labelledby="overview-title">
          <div className={`${styles.frame} ${styles.overviewLayout}`}>
            <div className={styles.overviewCopy}>
              <span className={styles.overviewStatus}>PROPOSED / ORGANIZATION OVERVIEW</span>
              <h2 id="overview-title">See the group. <em>Respect the person.</em></h2>
              <p>See how many licenses are in use. A future, separate opt-in in each learner&apos;s app could add broad cohort focus patterns. No student names, app titles, individual hours or rankings.</p>
              <a className={styles.primaryAction} href="/dashboard-preview">Explore the dashboard concept <ArrowUpRight size={19} weight="bold" aria-hidden /></a>
              <p className={styles.overviewDisclaimer}>Illustrative figures below. Planned focus metrics require a separate student opt-in and at least 10 contributors.</p>
            </div>
            <div className={styles.overviewVisual} aria-label="Illustrative organization dashboard with sample group figures">
              <div className={styles.overviewVisualTop}><span>FlowSight / Organizations</span><span>Sample data</span></div>
              <div className={styles.overviewVisualBody}>
                <span className={styles.overviewVisualLabel}>Cohort overview · last 28 days</span>
                <div className={styles.overviewHeroStat}><strong>{exampleDashboardData.activated}</strong><span>of {exampleDashboardData.purchased}<br />licenses activated</span></div>
                <div className={styles.overviewMiniStats}>
                  <div><strong>2h 46m</strong><span>avg focus / active day</span></div>
                  <div><strong>1h 18m</strong><span>avg deep focus / active day</span></div>
                  <div><strong>3.1</strong><span>interruptions / focus hour</span></div>
                </div>
                <div className={styles.overviewMiniBars} aria-hidden="true"><span /><span /><span /><span /><span /></div>
                <p>{exampleDashboardData.contributors} voluntary contributors · broad categories only</p>
              </div>
            </div>
          </div>
        </section>

        <section id="next" className={styles.next} aria-labelledby="next-title">
          <div className={styles.frame}>
            <div className={styles.nextIntroduction}>
              <div>
                <h2 id="next-title">A more intentional study session.</h2>
                <p>A proposed personal flow around the tracking FlowSight already has.</p>
              </div>
              <p className={styles.conceptNotice}><Lightbulb size={20} weight="duotone" aria-hidden /> The experience below is illustrative. These screens are not available in the app today.</p>
            </div>
            <div className={styles.nextJourney}>
              <article className={styles.journeyStep}>
                <span className={styles.journeyNumber}>01<span>Before</span></span>
                <div className={styles.journeyCopy}><h3>Choose an intention.</h3><p>Give the next block a clear purpose before starting.</p></div>
                <div className={styles.conceptScreen} aria-hidden="true">
                  <span className={styles.conceptScreenLabel}>PROPOSED / INTENTION</span>
                  <div className={styles.conceptInput}>What will I work on?</div>
                  <div className={styles.conceptButton}>Begin guided block <ArrowRight size={16} weight="bold" /></div>
                </div>
              </article>
              <article className={styles.journeyStep}>
                <span className={styles.journeyNumber}>02<span>During</span></span>
                <div className={styles.journeyCopy}><h3>Stay with the work.</h3><p>Keep the existing tracking controls, with room to correct a wrong activity label.</p></div>
                <div className={styles.conceptScreen} aria-hidden="true">
                  <span className={styles.conceptScreenLabel}>PROPOSED / FOCUS BLOCK</span>
                  <div className={styles.conceptTrack}><span /></div>
                  <div className={styles.conceptStatus}><span className={styles.conceptDot} /> Tracking on this device</div>
                  <div className={styles.conceptCorrection}>Activity label incorrect? <strong>Correct it</strong></div>
                </div>
              </article>
              <article className={styles.journeyStep}>
                <span className={styles.journeyNumber}>03<span>After</span></span>
                <div className={styles.journeyCopy}><h3>Reflect privately.</h3><p>Close the block with a short note that stays with the learner.</p></div>
                <div className={styles.conceptScreen} aria-hidden="true">
                  <span className={styles.conceptScreenLabel}>PROPOSED / REFLECTION</span>
                  <strong className={styles.conceptQuestion}>What helped me focus?</strong>
                  <span className={styles.conceptWritingLine} /><span className={styles.conceptWritingLine} />
                  <div className={styles.conceptPrivate}><LockKey size={15} weight="bold" /> Private to me</div>
                </div>
              </article>
            </div>
            <div className={styles.nextLater}>
              <div><Lightbulb size={26} weight="duotone" aria-hidden /><h3>Later, if validated: personal guidance.</h3></div>
              <p>Future suggestions could draw on a learner&apos;s own focus patterns. Only that learner would see them.</p>
              <span>Proposed concept <ArrowUpRight size={16} weight="bold" aria-hidden /></span>
            </div>
          </div>
        </section>

        <section id="privacy" className={styles.privacy} aria-labelledby="privacy-title">
          <div className={styles.frame}>
            <div className={styles.privacyHeading}>
              <ShieldCheck size={38} weight="duotone" aria-hidden />
              <h2 id="privacy-title">The institution buys access. <span>Students keep the work.</span></h2>
              <p>Focus analysis stays on each learner&apos;s device. Future group summaries require a separate choice in the app, off by default and revocable. Without it, the institution sees only aggregate license activation.</p>
            </div>
            <div className={styles.privacySplit}>
              <div>
                <Receipt size={26} weight="duotone" aria-hidden />
                <h3>What the institution receives</h3>
                <ul><li>Order, invoice and private code CSV</li><li>Group count of activated licenses</li><li>Planned: broad metrics from students who opt in separately</li></ul>
              </div>
              <div>
                <Monitor size={26} weight="duotone" aria-hidden />
                <h3>What stays in the student&apos;s app</h3>
                <ul><li>Focus sessions and activity history</li><li>Insights and personal PDF reports</li><li>Guided reflections, if built later</li></ul>
              </div>
            </div>
            <p className={styles.privacyBoundary}><LockKey size={21} weight="duotone" aria-hidden /> The dashboard has no student list, personal hours, app titles, individual progress or rankings. Planned focus averages stay hidden until at least 10 students opt in.</p>
          </div>
        </section>

        <section id="pilot" className={styles.pilot} aria-labelledby="pilot-title">
          <div className={styles.frame}>
            <div className={styles.pilotHeading}>
              <h2 id="pilot-title">For cohorts of independent minds.</h2>
              <p>Give people a personal tool for better concentration while your organization handles the licenses.</p>
            </div>
            <div className={styles.useCases}>
              <article><BookOpen size={29} weight="duotone" aria-hidden /><h3>Universities</h3><p>Equip adult students across a class or department with their own private study workspace.</p></article>
              <article><Buildings size={29} weight="duotone" aria-hidden /><h3>Academies</h3><p>Provide a complete course with individual access to focus tools and personal insights.</p></article>
              <article><UsersThree size={29} weight="duotone" aria-hidden /><h3>Independent collaborators</h3><p>Give freelancers individual licenses without a person-level view of their activity.</p></article>
            </div>
            <div id="licenses" className={styles.priceTiers} aria-label="One-time license prices">
              <div className={styles.priceTier}>
                <span>1–{BULK_DISCOUNT_MIN_SEATS - 1} licenses</span>
                <strong>€{INDIVIDUAL_PRICE_CENTS / 100}</strong>
                <p>per license · one-time</p>
              </div>
              <div className={styles.priceTier}>
                <span>{BULK_DISCOUNT_MIN_SEATS}–{BULK_LARGE_MIN_SEATS - 1} licenses</span>
                <strong>€{STANDARD_BULK_PRICE_CENTS / 100}</strong>
                <p>per license · one-time</p>
              </div>
              <div className={`${styles.priceTier} ${styles.priceTierVolume}`}>
                <span>{BULK_LARGE_MIN_SEATS}+ licenses</span>
                <strong>€{LARGE_BULK_PRICE_CENTS / 100}</strong>
                <p>per license · one-time</p>
              </div>
            </div>
            <p className={styles.pricingNote}>Prices include applicable tax. Each order uses one rate for every license: €{INDIVIDUAL_PRICE_CENTS / 100} for 1–{BULK_DISCOUNT_MIN_SEATS - 1}, €{STANDARD_BULK_PRICE_CENTS / 100} for {BULK_DISCOUNT_MIN_SEATS}–{BULK_LARGE_MIN_SEATS - 1}, or €{LARGE_BULK_PRICE_CENTS / 100} from {BULK_LARGE_MIN_SEATS} licenses.</p>
            <div className={styles.pilotAction}>
              <div>
                <h3>Equip a whole group in one order.</h3>
                <p>Each license has its own code for one learner. Official installers and local updates are included; optional cloud plans remain separate.</p>
              </div>
              <a href={pilotEmail}>Discuss a bulk pilot <ArrowUpRight size={19} weight="bold" aria-hidden /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.frame} ${styles.footerInner}`}>
          <span>FlowSight Students · Organization pilot concept</span>
          <a href="https://solo.flowsight.site">Explore the individual edition <ArrowRight size={16} weight="bold" aria-hidden /></a>
        </div>
      </footer>
    </div>
  );
}
