import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { business } from "@/config/business";
import { getPhoneLink, generateFAQSchema } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

interface ArticleData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  readTime: string;
  content: React.ReactNode;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

const articles: Record<string, ArticleData> = {
  "circuit-breaker-keeps-tripping": {
    slug: "circuit-breaker-keeps-tripping",
    title: "Why Does My Circuit Breaker Keep Tripping?",
    metaTitle:
      "Why Does My Circuit Breaker Keep Tripping? | Causes & Fixes",
    metaDescription:
      "Learn the most common reasons circuit breakers trip in California homes — overloaded circuits, short circuits, ground faults, and aging panels — and when to call an electrician.",
    category: "Home Electrical",
    publishDate: "2025-03-15",
    readTime: "8 min read",
    content: (
      <>
        <p>
          A circuit breaker that trips once in a while is doing its job —
          protecting your home from electrical overloads and potential fires. But
          when the same breaker trips repeatedly, or multiple breakers trip
          without an obvious cause, something in your electrical system needs
          attention.
        </p>

        <h2>How Circuit Breakers Work</h2>
        <p>
          Circuit breakers are safety devices installed in your electrical panel
          that monitor the flow of electricity through each circuit in your home.
          When a breaker detects more current than the circuit is rated to carry
          — typically 15 or 20 amps for standard household circuits — it
          &quot;trips&quot; (switches off) to prevent the wiring from
          overheating. This is a critical safety function that prevents
          electrical fires.
        </p>

        <h2>The 5 Most Common Causes</h2>

        <h3>1. Overloaded Circuit</h3>
        <p>
          This is the most frequent cause of tripping breakers, especially in
          older California homes that were wired decades before modern
          electrical demands. An overloaded circuit occurs when too many
          devices draw power from the same circuit simultaneously.
        </p>
        <p>
          Common culprits include running a space heater, hair dryer, and
          microwave on the same circuit, or plugging multiple high-draw devices
          into a single bedroom or kitchen circuit. Many homes built before the
          1980s have only one or two circuits per room — far fewer than modern
          code requires.
        </p>
        <p>
          <strong>What to do:</strong> Redistribute devices across different
          circuits or outlets on different breakers. If redistribution
          doesn&apos;t help, the circuit may need to be split into two separate
          circuits by a licensed electrician.
        </p>

        <h3>2. Short Circuit</h3>
        <p>
          A short circuit occurs when a hot (live) wire touches a neutral wire
          or another hot wire, creating a path of very low resistance that draws
          a surge of current. Short circuits trip the breaker immediately and
          can produce a popping sound, sparks, or a burning smell.
        </p>
        <p>
          Short circuits can be caused by damaged wire insulation, loose
          connections in outlets or switches, a faulty appliance, or rodent
          damage to wiring inside walls. In California&apos;s older homes,
          degraded cloth-insulated wiring is a common source of short circuits.
        </p>
        <p>
          <strong>What to do:</strong> If you notice a burning smell or
          scorch marks on an outlet or switch, stop using that circuit and call
          a licensed electrician. Short circuits are a fire hazard and require
          professional diagnosis.
        </p>

        <h3>3. Ground Fault</h3>
        <p>
          A ground fault happens when a hot wire contacts a ground wire or a
          grounded metal surface, such as a metal electrical box or appliance
          housing. Ground faults are especially dangerous in wet areas like
          kitchens, bathrooms, garages, and outdoor spaces because water
          increases the risk of electrical shock.
        </p>
        <p>
          California electrical code requires GFCI (Ground Fault Circuit
          Interrupter) protection in wet locations. GFCI outlets and breakers
          detect ground faults and cut power in milliseconds — far faster than
          a standard breaker.
        </p>
        <p>
          <strong>What to do:</strong> If breakers trip in wet areas, check
          whether GFCI outlets are installed and functioning (use the Test/Reset
          buttons). If your home lacks GFCI protection in kitchens, bathrooms,
          or outdoors, a licensed electrician can install them.
        </p>

        <h3>4. Arc Fault</h3>
        <p>
          Arc faults are caused by damaged, overheated, or stressed wiring that
          creates small electrical arcs — essentially tiny sparks that can
          ignite surrounding materials. Arc faults are a leading cause of
          residential electrical fires.
        </p>
        <p>
          Modern electrical code requires AFCI (Arc Fault Circuit Interrupter)
          breakers in bedrooms, living rooms, and other living spaces. If your
          AFCI breaker trips, it may be detecting a genuine arc-fault condition
          in the wiring, outlet, or a connected device.
        </p>
        <p>
          <strong>What to do:</strong> Unplug all devices on the circuit and
          reset the breaker. Plug devices back in one at a time to identify the
          source. If the breaker continues to trip with nothing plugged in,
          contact a licensed electrician — the arc fault may be in the wiring
          itself.
        </p>

        <h3>5. Faulty or Aging Breaker</h3>
        <p>
          Circuit breakers are mechanical devices that wear out over time.
          After thousands of trips and decades of service, a breaker&apos;s
          internal mechanism can weaken, causing it to trip at lower current
          levels than its rating — or fail to trip when it should, which is
          far more dangerous.
        </p>
        <p>
          Federal Pacific Electric (FPE) Stab-Lok and Zinsco panels, found in
          many California homes built between the 1950s and 1980s, are
          particularly known for breaker failure. These panels may not trip
          reliably during an overload, creating a fire hazard.
        </p>
        <p>
          <strong>What to do:</strong> If you have an FPE or Zinsco panel, or
          your panel is more than 25–30 years old, schedule an electrical
          inspection with a licensed electrician. Panel and breaker replacement
          may be recommended.
        </p>

        <h2>When to Call a Licensed Electrician</h2>
        <p>While some tripping is caused by simple overloads you can address
          by unplugging devices, several situations require professional
          help:</p>
        <ul>
          <li>A breaker trips repeatedly even after reducing the load</li>
          <li>You notice a burning smell, scorch marks, or warm outlets</li>
          <li>The breaker won&apos;t stay in the &quot;on&quot; position</li>
          <li>Multiple breakers trip at the same time</li>
          <li>Your home has an FPE, Zinsco, or fuse-box panel</li>
          <li>The breaker trips immediately when reset (indicates a short circuit)</li>
        </ul>

        <h2>Preventing Future Trips</h2>
        <p>
          Avoiding overloaded circuits is the simplest way to prevent
          nuisance tripping. Spread high-draw devices across multiple
          circuits, avoid daisy-chaining power strips, and consider having a
          licensed electrician add dedicated circuits for high-demand
          appliances like window AC units, space heaters, or home office
          equipment. If your home has only one or two circuits per room, a
          circuit addition or partial rewire can distribute loads safely.
        </p>
      </>
    ),
    faqs: [
      {
        question: "Is a tripping circuit breaker dangerous?",
        answer:
          "A tripping breaker is a safety mechanism working as designed. However, if a breaker trips repeatedly, it can indicate a serious underlying issue like a short circuit, ground fault, or wiring damage that needs professional attention to prevent fire or shock hazards.",
      },
      {
        question: "Can I just replace a tripping breaker with a higher-amp one?",
        answer:
          "No. Circuit breakers are sized to protect the wiring on that circuit. Replacing a 15-amp breaker with a 20-amp breaker on wiring rated for only 15 amps removes the safety protection and creates a fire hazard. Only a licensed electrician should change breaker sizing, and only after confirming the wiring can handle the increased load.",
      },
      {
        question: "How much does it cost to fix a tripping circuit breaker?",
        answer:
          "Costs depend on the root cause. Replacing a single faulty breaker is relatively inexpensive. If the issue involves damaged wiring, a short circuit, or a panel upgrade, costs will be higher. A licensed electrician can diagnose the problem and provide an upfront estimate before any work begins.",
      },
    ],
    relatedSlugs: [
      "warning-signs-electrical-inspection",
      "200-amp-panel-upgrade-guide",
      "signs-of-bad-electrical-wiring",
    ],
  },

  "ev-charger-installation-cost-california": {
    slug: "ev-charger-installation-cost-california",
    title: "How Much Does an EV Charger Installation Cost in California?",
    metaTitle:
      "EV Charger Installation Cost in California (2025 Guide)",
    metaDescription:
      "Complete guide to home EV charger installation costs in California. Level 2 charger pricing, electrical requirements, panel upgrades, permits, and available rebates.",
    category: "EV Charging",
    publishDate: "2025-04-10",
    readTime: "10 min read",
    content: (
      <>
        <p>
          California leads the nation in electric vehicle adoption, and
          home charging is the most convenient and cost-effective way to keep
          your EV powered. If you are considering installing a Level 2 home
          charger, understanding the total cost — including the charger unit,
          electrical work, permitting, and potential panel upgrades — helps you
          plan and budget accurately.
        </p>

        <h2>Cost Breakdown: What Goes Into an EV Charger Installation</h2>

        <h3>The Charger Unit</h3>
        <p>
          Level 2 EV chargers for residential use typically range from $300 to
          $800 for the unit itself, depending on the brand, features, and
          power output. Popular options include:
        </p>
        <ul>
          <li><strong>Tesla Wall Connector</strong> — designed specifically for Tesla vehicles but also works with other EVs via adapter; typically $400–$500.</li>
          <li><strong>ChargePoint Home Flex</strong> — adjustable amperage (16A–50A), WiFi connectivity, works with all EVs; typically $600–$700.</li>
          <li><strong>JuiceBox 40/48</strong> — smart features, energy monitoring, J1772 universal connector; typically $500–$650.</li>
          <li><strong>Grizzl-E Classic</strong> — durable NEMA 4 rated, no-frills reliability; typically $400–$500.</li>
          <li><strong>NEMA 14-50 outlet only</strong> — the most affordable option; install a 240V outlet and plug in your vehicle&apos;s portable Level 2 charger; outlet installation is less than the cost of a hardwired unit.</li>
        </ul>

        <h3>Electrical Installation Labor</h3>
        <p>
          Installation labor from a licensed electrician typically ranges from
          $500 to $1,500, depending on the complexity of the job. Key factors
          that affect labor costs include:
        </p>
        <ul>
          <li><strong>Distance from panel to charger location:</strong> Longer wire runs through attics, crawl spaces, or exterior walls increase material and labor costs.</li>
          <li><strong>Panel location relative to the garage:</strong> A panel on the opposite side of the house from the garage requires a longer conduit run.</li>
          <li><strong>Circuit type:</strong> A dedicated 40-amp or 50-amp circuit requires appropriately sized wiring (6-gauge or 8-gauge copper) and a dedicated breaker slot.</li>
          <li><strong>Mounting requirements:</strong> Wall-mounted chargers on drywall, concrete, or exterior surfaces have different labor requirements.</li>
        </ul>

        <h3>Panel Upgrade (If Needed)</h3>
        <p>
          Many California homes — especially those built before the 1990s —
          have 100-amp electrical panels that may not have sufficient capacity
          for a 40-amp or 50-amp EV charger circuit on top of existing
          electrical loads. If a load calculation reveals that your panel
          cannot safely support the additional draw, a panel upgrade to 200
          amps may be required.
        </p>
        <p>
          A 200-amp panel upgrade typically adds $2,000–$4,000 to the total
          project cost, depending on your location, the existing panel
          condition, and whether the utility meter base also needs replacement.
          While this is a significant cost, the upgraded panel provides
          capacity for future needs — including additional circuits, home
          additions, or a second EV charger.
        </p>

        <h3>Permitting</h3>
        <p>
          California requires an electrical permit for EV charger installations
          that involve new circuit wiring. Permit fees vary by city and county,
          typically ranging from $75 to $300. Our licensed electricians handle
          the permit application and schedule the required inspection as part
          of every installation.
        </p>

        <h2>Total Cost Ranges</h2>
        <p>Based on typical California installations:</p>
        <ul>
          <li><strong>Simple installation</strong> (panel nearby, existing capacity, short wire run): $800–$1,500 total including charger</li>
          <li><strong>Standard installation</strong> (moderate wire run, available panel capacity): $1,200–$2,500 total</li>
          <li><strong>Complex installation</strong> (long wire run, subpanel, or panel upgrade needed): $3,000–$5,500+ total</li>
        </ul>

        <h2>California Rebates and Incentives</h2>
        <p>
          Several programs can reduce the out-of-pocket cost of an EV charger
          installation in California:
        </p>
        <ul>
          <li><strong>Federal Tax Credit:</strong> The federal government offers a tax credit of up to 30% of the cost of purchasing and installing a home EV charger (up to $1,000 for individuals), available through qualifying tax years.</li>
          <li><strong>Utility Company Rebates:</strong> Many California utilities — including SCE, PG&amp;E, LADWP, and SDG&amp;E — offer rebates or discounted electricity rates for EV charging. Programs and amounts change periodically, so check your utility&apos;s current offerings.</li>
          <li><strong>California Clean Fuel Reward:</strong> Some programs provide point-of-purchase rebates on qualifying EV purchases that can offset charger installation costs.</li>
        </ul>

        <h2>Level 1 vs. Level 2: Do You Need an Installation?</h2>
        <p>
          Every EV comes with a Level 1 charger that plugs into a standard
          120V household outlet. Level 1 charging adds approximately 3–5
          miles of range per hour — enough for drivers with short commutes and
          overnight charging time. However, most EV owners find Level 1 too
          slow for practical daily use, especially with longer commutes or
          larger-battery vehicles.
        </p>
        <p>
          A Level 2 charger operates on 240V power (like a dryer outlet) and
          adds 25–30 miles of range per hour, fully charging most EVs in 6–10
          hours overnight. For most California EV owners, a Level 2 charger
          is the recommended option.
        </p>

        <h2>Choosing the Right Electrician</h2>
        <p>
          EV charger installation requires a licensed electrician who understands
          load calculations, circuit sizing, NEC requirements for EVSE
          installations, and local California permitting. Before hiring, verify
          that the electrician holds a valid California electrical contractor
          license, carries liability insurance and workers&apos; compensation, and
          pulls the required electrical permit for the work.
        </p>
      </>
    ),
    faqs: [
      {
        question: "Can I install an EV charger myself?",
        answer:
          "In California, electrical work that involves new circuit wiring requires a licensed electrical contractor and an electrical permit. While homeowners can technically perform some electrical work on their own homes, EV charger installations involve 240V circuits with significant amperage that pose shock and fire risks if done incorrectly. Professional installation ensures safety, code compliance, and a proper inspection.",
      },
      {
        question: "How long does an EV charger installation take?",
        answer:
          "A straightforward EV charger installation — where the panel is in or near the garage with available capacity — typically takes 2–4 hours. Installations requiring longer wire runs, subpanel installation, or panel upgrades may take a full day.",
      },
      {
        question: "Do I need to upgrade my panel for an EV charger?",
        answer:
          "Not always. A licensed electrician performs a load calculation to determine whether your existing panel has sufficient capacity for the additional EV charger circuit. Many 200-amp panels can accommodate an EV charger without upgrades. Homes with 100-amp panels are more likely to need an upgrade, depending on existing electrical loads.",
      },
    ],
    relatedSlugs: [
      "level-1-vs-level-2-ev-chargers",
      "200-amp-panel-upgrade-guide",
      "circuit-breaker-keeps-tripping",
    ],
  },

  "warning-signs-electrical-inspection": {
    slug: "warning-signs-electrical-inspection",
    title: "7 Warning Signs Your Home Needs an Electrical Inspection",
    metaTitle:
      "7 Warning Signs Your Home Needs an Electrical Inspection",
    metaDescription:
      "Flickering lights, warm outlets, tripping breakers, and burning smells can indicate dangerous electrical problems. Learn the 7 signs that mean it's time to call a licensed electrician.",
    category: "Electrical Safety",
    publishDate: "2025-02-20",
    readTime: "7 min read",
    content: (
      <>
        <p>
          Your home&apos;s electrical system works silently behind the walls,
          powering everything from your lights to your appliances to your
          HVAC system. Because most of this system is hidden, problems can
          develop gradually without obvious signs — until they become
          dangerous. Knowing the warning signs of electrical trouble helps
          California homeowners act before a nuisance becomes a hazard.
        </p>

        <h2>1. Flickering or Dimming Lights</h2>
        <p>
          Occasional light flickers when a large appliance kicks on (like an
          AC compressor or refrigerator) are usually normal. But persistent
          flickering, lights that dim without explanation, or lights that
          fluctuate in brightness can indicate loose wiring connections,
          overloaded circuits, or problems at the electrical panel.
        </p>
        <p>
          In California homes with older wiring — particularly those with
          aluminum wiring from the 1960s and 1970s — flickering lights can
          signal loose connections at outlets and switches where aluminum
          conductors have expanded and contracted over decades of use.
        </p>

        <h2>2. Warm or Discolored Outlets and Switch Plates</h2>
        <p>
          Outlets and light switches should never feel warm to the touch
          (with the exception of dimmer switches, which generate mild warmth
          during normal operation). If a standard outlet or switch feels warm,
          or you notice brown or yellow discoloration on the cover plate,
          this may indicate a loose connection, damaged wiring, or an
          overloaded circuit behind the wall.
        </p>
        <p>
          Warm outlets are a fire risk. If you find one, stop using it and
          contact a licensed electrician promptly.
        </p>

        <h2>3. Burning Smell or Unusual Odors</h2>
        <p>
          A burning smell near outlets, switches, or your electrical panel is
          one of the most urgent warning signs. This odor can indicate
          overheating wires, a failing breaker, or melting wire insulation —
          all of which are immediate fire hazards.
        </p>
        <p>
          If you detect a persistent burning or acrid smell from any electrical
          component, turn off the associated breaker (or the main breaker if
          you are unsure which circuit is involved) and call an electrician
          immediately.
        </p>

        <h2>4. Frequently Tripping Circuit Breakers</h2>
        <p>
          As discussed in our detailed guide on tripping breakers, a breaker
          that trips occasionally under heavy load is working correctly. But
          breakers that trip repeatedly — especially the same breaker — point
          to an overloaded circuit, a short circuit, a ground fault, or a
          failing breaker. Multiple breakers tripping simultaneously can
          indicate more serious panel or service-entry problems.
        </p>

        <h2>5. Buzzing, Crackling, or Sizzling Sounds</h2>
        <p>
          Electrical systems should operate silently. Audible buzzing from
          outlets, switches, or your electrical panel can indicate loose
          connections, arcing (electrical sparks jumping across a gap), or
          a failing breaker. These sounds mean electricity is not flowing
          smoothly through its intended path, which generates heat and
          creates fire risk.
        </p>

        <h2>6. Two-Prong (Ungrounded) Outlets</h2>
        <p>
          If your California home still has two-prong outlets, it means those
          circuits lack a ground wire — a critical safety conductor that
          provides a safe path for electricity during a fault condition.
          Without grounding, a faulty appliance or damaged wire can energize
          metal surfaces and create a shock hazard.
        </p>
        <p>
          Replacing two-prong outlets with grounded three-prong outlets (or
          GFCI-protected outlets where rewiring is impractical) is one of the
          most cost-effective safety upgrades for older California homes.
        </p>

        <h2>7. Your Home Is Over 40 Years Old and Has Never Been Inspected</h2>
        <p>
          California&apos;s housing stock includes millions of homes built
          before modern electrical codes were established. Homes built before
          1980 may have undersized panels (60-amp or 100-amp service),
          ungrounded circuits, aluminum wiring, knob-and-tube wiring, or
          cloth-insulated wiring — any of which can pose safety concerns.
        </p>
        <p>
          If your home is more than 40 years old and has never had a
          professional electrical inspection, scheduling one is a smart
          investment. An inspection identifies potential hazards, helps
          prioritize upgrades, and gives you a clear picture of your
          electrical system&apos;s condition.
        </p>

        <h2>What Happens During an Electrical Inspection</h2>
        <p>
          A licensed electrician evaluates your electrical panel, grounding
          system, wiring condition (where accessible), outlets and switches,
          GFCI protection, smoke detector wiring, and overall code compliance.
          The inspection identifies immediate hazards, code violations, and
          recommended upgrades, prioritized by safety impact.
        </p>
        <p>
          Electrical inspections are also recommended (and sometimes required)
          during real estate transactions, after a home purchase, before major
          renovations, and after any event that may have damaged the
          electrical system (flooding, fire, earthquake).
        </p>
      </>
    ),
    faqs: [
      {
        question: "How much does an electrical inspection cost in California?",
        answer:
          "The cost of a residential electrical inspection varies based on the size and age of the home, but typically ranges from a few hundred dollars. Contact a licensed electrician for a specific quote based on your home's square footage, age, and any specific concerns.",
      },
      {
        question: "How often should I have my home's electrical system inspected?",
        answer:
          "The National Fire Protection Association recommends electrical inspections every 3–5 years for existing homes, and immediately upon purchasing a home. Homes over 40 years old, or homes where electrical problems have been observed, should be inspected more frequently.",
      },
      {
        question: "Can I do an electrical safety check myself?",
        answer:
          "Homeowners can perform basic visual checks — testing GFCI outlets, checking for warm outlets, looking for discolored cover plates, and testing smoke detectors. However, a comprehensive inspection of wiring, panel condition, grounding, and code compliance requires a licensed electrician with proper testing equipment.",
      },
    ],
    relatedSlugs: [
      "circuit-breaker-keeps-tripping",
      "signs-of-bad-electrical-wiring",
      "when-to-call-emergency-electrician",
    ],
  },

  "200-amp-panel-upgrade-guide": {
    slug: "200-amp-panel-upgrade-guide",
    title: "Do You Need a 200-Amp Panel Upgrade?",
    metaTitle:
      "200-Amp Panel Upgrade Guide for California Homes",
    metaDescription:
      "Find out if your California home needs a 200-amp panel upgrade. Signs, costs, process, and what to expect from a licensed electrician panel upgrade service.",
    category: "Electrical Panels",
    publishDate: "2025-05-05",
    readTime: "9 min read",
    content: (
      <>
        <p>
          Your electrical panel — also called a breaker box or load center —
          controls how electricity is distributed throughout your home. If
          your panel is too small for your household&apos;s electrical demands,
          you may experience tripping breakers, dimming lights, and an
          inability to add new circuits for modern needs like EV chargers,
          home offices, or kitchen remodels.
        </p>

        <h2>What Is a 200-Amp Panel Upgrade?</h2>
        <p>
          A 200-amp panel upgrade replaces your existing electrical panel
          (typically a 100-amp or smaller panel) with a new 200-amp panel
          that can safely deliver more electrical capacity to your home.
          The upgrade includes replacing the panel itself, installing a new
          main breaker, reconnecting all existing circuits to new breakers,
          and upgrading the meter base and service-entry cables if necessary.
        </p>
        <p>
          200 amps is the standard for modern residential construction in
          California and provides sufficient capacity for most single-family
          homes, including those with central air conditioning, electric
          ranges, EV chargers, and multiple high-draw circuits.
        </p>

        <h2>Signs Your Home Needs a Panel Upgrade</h2>

        <h3>Your Panel Is Rated at 100 Amps or Less</h3>
        <p>
          Homes built before the 1990s were commonly equipped with 100-amp
          panels, and some older homes have 60-amp service. These panels
          were adequate when homes had fewer electrical demands — before
          central AC, multiple large appliances, home offices, and EV
          chargers became common. Today, 100-amp service often falls short.
        </p>

        <h3>You Have a Federal Pacific or Zinsco Panel</h3>
        <p>
          Federal Pacific Electric (FPE) Stab-Lok panels and Zinsco panels
          have well-documented safety concerns. Independent testing has
          shown that some FPE breakers fail to trip during overloads,
          creating a fire hazard. If your home has either of these panel
          brands, replacement is strongly recommended regardless of your
          home&apos;s amperage needs.
        </p>

        <h3>You Still Have a Fuse Box</h3>
        <p>
          Fuse boxes predate modern circuit breaker panels and lack the
          safety features of current electrical equipment. Fuses must be
          replaced after each trip (unlike breakers, which reset), and
          homeowners sometimes install oversized fuses to avoid blowing —
          a dangerous practice that removes overcurrent protection.
        </p>

        <h3>You Are Adding an EV Charger, Hot Tub, or Major Appliance</h3>
        <p>
          Large electrical loads require dedicated high-amperage circuits. A
          Level 2 EV charger draws 32–50 amps, a hot tub draws 40–50 amps,
          and electric tankless water heaters can draw 100+ amps. Adding
          these loads to a panel that is already near capacity requires an
          upgrade.
        </p>

        <h3>Breakers Trip Frequently</h3>
        <p>
          Recurring breaker trips — especially across multiple circuits —
          can indicate that your panel is undersized for your electrical
          loads. A licensed electrician can perform a load calculation to
          determine whether the trips are caused by overloaded individual
          circuits or an undersized panel.
        </p>

        <h2>The Panel Upgrade Process</h2>
        <p>A typical 200-amp panel upgrade follows these steps:</p>
        <ol>
          <li><strong>Initial assessment:</strong> A licensed electrician evaluates your existing panel, performs a load calculation, and determines the scope of work needed.</li>
          <li><strong>Permit application:</strong> An electrical permit is pulled from your local building department. This is required by California law for all panel upgrades.</li>
          <li><strong>Utility coordination:</strong> Your utility company is notified to temporarily disconnect power to the service entrance during the upgrade.</li>
          <li><strong>Panel installation:</strong> The old panel is removed, the new 200-amp panel is mounted, and all circuits are reconnected to new breakers with proper labeling.</li>
          <li><strong>Meter base and service upgrade:</strong> If your existing service-entry cables and meter base cannot support 200 amps, these are also upgraded.</li>
          <li><strong>Inspection:</strong> A city or county electrical inspector verifies the work meets code requirements. Your utility reconnects power after the inspection passes.</li>
        </ol>

        <h2>How Long Does a Panel Upgrade Take?</h2>
        <p>
          Most residential 200-amp panel upgrades are completed in one day
          (typically 6–10 hours of on-site work). Your power will be off
          during the active installation — usually 4–6 hours — so plan
          accordingly. The permit and inspection process adds time on either
          side (permit approval may take a few days to a week depending on
          your jurisdiction).
        </p>

        <h2>How Much Does a 200-Amp Panel Upgrade Cost in California?</h2>
        <p>
          The total cost varies by location, panel condition, and scope of
          work. A standard 200-amp panel upgrade in California — including
          the panel, breakers, labor, and permit — typically falls within
          a broad range depending on these factors. If the meter base and
          service-entry cables also need replacement, the cost is higher.
          Contact a licensed electrician for an accurate estimate based on
          your specific home.
        </p>

        <h2>Do I Need to Be Home During the Upgrade?</h2>
        <p>
          You should be home (or have someone present) at the start and
          end of the project for the initial walkthrough and final testing.
          You do not need to be present for the entire installation. Your
          electrician will coordinate the utility shutoff and let you know
          when power will be restored.
        </p>
      </>
    ),
    faqs: [
      {
        question: "Will a panel upgrade disrupt my electricity?",
        answer:
          "Yes, your power will be temporarily shut off during the panel swap — typically 4–6 hours. Your electrician will coordinate the shutoff and restoration with the utility company. We recommend planning for the outage by charging devices beforehand and making arrangements for temperature-sensitive items.",
      },
      {
        question: "Does a panel upgrade increase home value?",
        answer:
          "A 200-amp panel upgrade is viewed favorably by home buyers and inspectors. It signals a well-maintained electrical system, eliminates concerns about undersized service, and provides capacity for modern amenities like EV chargers and smart home systems. Many real estate professionals consider it a valuable upgrade for resale.",
      },
      {
        question: "Can I upgrade my panel from 100 amps to 200 amps without upgrading the meter?",
        answer:
          "It depends on your existing service infrastructure. If your service-entry cables and meter base are already rated for 200 amps (some newer 100-amp panels were installed with 200-amp infrastructure), the meter may not need replacement. A licensed electrician will evaluate this during the initial assessment.",
      },
    ],
    relatedSlugs: [
      "circuit-breaker-keeps-tripping",
      "warning-signs-electrical-inspection",
      "federal-pacific-zinsco-panels",
    ],
  },
};

const allArticles = Object.values(articles);

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/resources/${article.slug}` },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const relatedArticles = article.relatedSlugs
    .map((s) => articles[s])
    .filter(Boolean);

  return (
    <>
      {article.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(article.faqs)),
          }}
        />
      )}

      <div className="bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: article.title, href: `/resources/${article.slug}` },
            ]}
          />
        </div>
      </div>

      <section className="bg-[var(--navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium text-[var(--accent)] uppercase tracking-wide mb-3">
            {article.category}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span>{article.readTime}</span>
            <span>|</span>
            <time dateTime={article.publishDate}>
              {new Date(article.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="article-content max-w-none">
            {article.content}
          </article>

          {article.faqs.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                Frequently Asked Questions
              </h2>
              <FAQ faqs={article.faqs} />
            </div>
          )}

          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((ra) => (
                  <Link
                    key={ra.slug}
                    href={`/resources/${ra.slug}`}
                    className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[var(--accent)]/30"
                  >
                    <div className="text-xs font-medium text-[var(--accent-dark)] uppercase tracking-wide mb-2">
                      {ra.category}
                    </div>
                    <h3 className="text-base font-semibold text-[var(--navy)] group-hover:text-[var(--accent-dark)] transition-colors leading-snug">
                      {ra.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2">{ra.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 rounded-2xl bg-[var(--navy)] p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Need Professional Help?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Our licensed California electricians are available for
              consultations, inspections, and all types of electrical work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-[var(--navy)] transition-all hover:bg-[var(--accent-hover)]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {business.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
