import React from "react";
import { cities } from "@/config/cities";
import { cityCareerData, type CityCareerData } from "@/config/city-career-data";

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

function getCostOfLivingLabel(col: CityCareerData["costOfLiving"]): string {
  switch (col) {
    case "very-high": return "very high";
    case "high": return "high";
    case "moderate-high": return "moderate-high";
    case "moderate": return "moderate";
  }
}

function generateSalaryArticle(
  cityName: string,
  citySlug: string,
  county: string,
  data: CityCareerData
): ArticleData {
  const slug = `how-much-does-an-electrician-make-in-${citySlug.replace(/-ca$/, "")}`;
  const colLabel = getCostOfLivingLabel(data.costOfLiving);

  return {
    slug,
    title: `How Much Does an Electrician Make in ${cityName}?`,
    metaTitle: `How Much Does an Electrician Make in ${cityName}? (2025 Salary Guide)`,
    metaDescription: `Electricians in ${cityName} make ${data.salaryJourneyman} per year. Full salary breakdown by experience level, IBEW local rates, and career outlook in ${county}.`,
    category: "Electrician Careers",
    publishDate: "2025-06-15",
    readTime: "7 min read",
    content: (
      <>
        <p>
          <strong>
            Electricians in {cityName} earn between {data.salaryJourneyman} per
            year as licensed journeymen.
          </strong>{" "}
          The average salary for a licensed journeyman electrician in the{" "}
          {cityName} area is approximately {data.salaryAverage} annually, with
          master electricians and those in specialized fields earning
          significantly more. Apprentices typically start between{" "}
          {data.salaryApprentice} while completing their training.
        </p>

        <h2>Electrician Salary by Experience Level in {cityName}</h2>

        <h3>Apprentice Electrician: {data.salaryApprentice}/year</h3>
        <p>
          Electrical apprentices in {cityName} earn while they learn through a
          4-5 year state-approved apprenticeship program. First-year apprentices
          start at roughly 40-50% of a journeyman&apos;s wage, with automatic
          raises as they progress through each year of training. By the fourth
          year, apprentice pay typically reaches 70-80% of journeyman scale.
        </p>

        <h3>Journeyman Electrician: {data.salaryJourneyman}/year</h3>
        <p>
          After completing an apprenticeship and passing the California
          journeyman certification exam, electricians in {cityName} typically
          earn {data.salaryJourneyman} per year. Union journeymen through{" "}
          {data.ibewLocal} (serving {county}) earn on the higher end of this
          range, with hourly rates set through collective bargaining agreements
          that include health insurance, pension contributions, and training
          funds.
        </p>

        <h3>
          Master Electrician / Electrical Contractor: {data.salaryMaster}/year
        </h3>
        <p>
          Master electricians and licensed C-10 electrical contractors in{" "}
          {cityName} can earn {data.salaryMaster} annually. Contractors who run
          their own businesses have uncapped earning potential based on the
          volume and type of projects they take on. Specializations like solar
          installation, EV charger installation, and commercial tenant
          improvements command premium rates in the {cityName} market.
        </p>

        <h2>Factors That Affect Electrician Pay in {cityName}</h2>
        <ul>
          <li>
            <strong>Union vs. non-union:</strong> {data.ibewLocal} journeymen
            earn higher base wages plus benefits packages worth an additional
            30-40% above base pay
          </li>
          <li>
            <strong>Specialization:</strong> High-voltage, fire alarm,
            solar/renewable energy, and data center electricians earn premiums
            over general residential work
          </li>
          <li>
            <strong>Overtime and shift work:</strong> Emergency and after-hours
            work at 1.5x to 2x standard rates can significantly boost annual
            earnings
          </li>
          <li>
            <strong>Commercial vs. residential:</strong> Commercial and
            industrial electricians generally earn more than residential-only
            electricians
          </li>
          <li>
            <strong>License type:</strong> A C-10 electrical contractor license
            allows you to bid on and manage projects, increasing earning
            potential
          </li>
        </ul>

        <h2>
          What Drives Electrician Demand in {cityName}
        </h2>
        <ul>
          {data.demandDrivers.map((driver, i) => (
            <li key={i}>{driver}</li>
          ))}
        </ul>

        <h2>Cost of Living Consideration</h2>
        <p>
          {data.comparisonNote} The cost of living in {cityName} is{" "}
          {colLabel} compared to the national average, which is an important
          factor when evaluating electrician salaries. Hourly rates in the{" "}
          {cityName} area typically range from {data.hourlyRange} per hour
          depending on experience, union membership, and specialization.
        </p>

        <h2>Job Outlook for Electricians in {cityName}</h2>
        <p>
          The demand for electricians in {cityName} remains strong.
          California&apos;s push toward electrification — EV charger
          installations, solar panel systems, battery storage, and building
          electrification mandates — is creating sustained demand for licensed
          electricians across {county}. The Bureau of Labor Statistics projects
          above-average job growth for electricians nationally, and
          California&apos;s aggressive clean energy policies amplify that demand
          locally.
        </p>
      </>
    ),
    faqs: [
      {
        question: `What is the hourly rate for an electrician in ${cityName}?`,
        answer: `Journeyman electricians in ${cityName} typically earn ${data.hourlyRange} per hour depending on experience, union membership, and specialization. ${data.ibewLocal} union scale is at the higher end. Overtime, emergency work, and specialty projects can push hourly rates higher.`,
      },
      {
        question: `Do ${cityName} electricians make good money?`,
        answer: `Yes. Licensed electricians in ${cityName} earn well above the median household income. Journeyman electricians earn ${data.salaryJourneyman} annually, and master electricians or contractors can earn ${data.salaryMaster}. The trade also offers strong job security, benefits (especially union), and no student loan debt since apprenticeships are paid training.`,
      },
      {
        question: `How long does it take to become a licensed electrician in ${cityName}?`,
        answer: `It takes approximately 4-5 years to become a licensed journeyman electrician in ${cityName}. This includes completing a state-approved apprenticeship program (8,000 hours of on-the-job training plus classroom instruction) and passing the state certification exam.`,
      },
    ],
    relatedSlugs: [
      `how-to-become-an-electrician-in-${citySlug.replace(/-ca$/, "")}`,
      "what-does-an-electrician-do",
      "what-is-a-residential-electrician",
    ],
  };
}

function generateCareerArticle(
  cityName: string,
  citySlug: string,
  county: string,
  data: CityCareerData
): ArticleData {
  const slug = `how-to-become-an-electrician-in-${citySlug.replace(/-ca$/, "")}`;

  return {
    slug,
    title: `How to Become an Electrician in ${cityName}`,
    metaTitle: `How to Become an Electrician in ${cityName} (Step-by-Step Guide)`,
    metaDescription: `Become a licensed electrician in ${cityName} in 5 steps: education, apprenticeship, certification, license, and career. Programs through ${data.ibewLocal} and local training centers.`,
    category: "Electrician Careers",
    publishDate: "2025-06-22",
    readTime: "9 min read",
    content: (
      <>
        <p>
          <strong>
            To become a licensed electrician in {cityName}, you need to complete
            a state-approved apprenticeship (4-5 years), pass the California
            journeyman electrician certification exam, and obtain the
            appropriate license.
          </strong>{" "}
          The entire process takes 4 to 5 years from start to finish, and you
          earn a salary throughout your apprenticeship while gaining hands-on
          experience.
        </p>

        <h2>Step 1: Meet the Basic Requirements</h2>
        <p>
          To begin an electrical apprenticeship in {cityName}, you need:
        </p>
        <ul>
          <li>Be at least 18 years old</li>
          <li>Have a high school diploma or GED</li>
          <li>
            Have reliable transportation ({cityName} job sites vary widely by
            location across {county})
          </li>
          <li>
            Be physically able to perform the work (lifting, climbing, standing
            for extended periods)
          </li>
          <li>Pass a basic math and reading aptitude test</li>
          <li>
            Pass a drug screening (required by most programs and employers)
          </li>
        </ul>

        <h2>Step 2: Enroll in an Apprenticeship Program</h2>
        <p>
          California requires 8,000 hours of on-the-job training under a
          licensed electrician, plus related classroom instruction (typically
          144-200+ hours per year). In {cityName}, the main apprenticeship
          options are:
        </p>

        {data.apprenticeshipPrograms.map((program, i) => (
          <React.Fragment key={i}>
            <h3>{program}</h3>
            <p>
              {i === 0
                ? `The ${program} is the primary apprenticeship program serving the ${cityName} area. It provides structured training with classroom instruction and on-the-job learning, with increasing pay each year. ${program.includes("IBEW") ? "Union apprentices receive health insurance and pension contributions during training." : ""}`
                : i === 1
                ? `${program} offers a 4-year apprenticeship program. Apprentices attend evening classes while working full-time for a member electrical contractor. The program covers residential, commercial, and industrial electrical work.`
                : `${program} offers an apprenticeship program for merit-shop electrical workers. The program combines on-the-job training with classroom education over 4 years.`}
            </p>
          </React.Fragment>
        ))}

        <h2>Step 3: Complete Your Apprenticeship</h2>
        <p>
          During your 4-5 year apprenticeship, you will work alongside licensed
          electricians on real projects while attending classes covering:
        </p>
        <ul>
          <li>
            National Electrical Code (NEC) and California Electrical Code
          </li>
          <li>Electrical theory and circuit design</li>
          <li>Blueprint and schematic reading</li>
          <li>
            Residential, commercial, and industrial wiring methods
          </li>
          <li>Motor controls and programmable logic controllers</li>
          <li>
            Safety procedures (OSHA 10/30, lockout/tagout, fall protection)
          </li>
          <li>Conduit bending, cable pulling, and terminations</li>
          <li>Fire alarm and low-voltage systems</li>
        </ul>

        <h2>Step 4: Pass the State Certification Exam</h2>
        <p>
          After completing your apprenticeship, you must pass the California
          General Electrician Certification exam administered by the Division of
          Apprenticeship Standards (DAS). The exam covers:
        </p>
        <ul>
          <li>National Electrical Code knowledge</li>
          <li>Electrical theory and calculations</li>
          <li>Safety practices and procedures</li>
          <li>Wiring methods and materials</li>
          <li>Grounding and bonding</li>
        </ul>
        <p>
          Passing this exam earns you the title of Certified General
          Electrician, which qualifies you to work as a journeyman electrician
          in California.
        </p>

        <h2>Step 5: Choose Your Career Path</h2>
        <p>
          After certification, {cityName} electricians have several career
          paths:
        </p>
        <ul>
          <li>
            <strong>Journeyman electrician:</strong> Work for an electrical
            contractor on residential, commercial, or industrial projects
            earning {data.salaryJourneyman} per year
          </li>
          <li>
            <strong>Specialization:</strong> Focus on solar installation, EV
            chargers, fire alarm systems, data/telecom, or high-voltage work
          </li>
          <li>
            <strong>Foreman/Supervisor:</strong> Lead crews on larger projects
          </li>
          <li>
            <strong>Electrical contractor:</strong> Obtain a C-10 Electrical
            Contractor license from CSLB to start your own business (requires 4
            years of journeyman experience)
          </li>
          <li>
            <strong>Electrical inspector:</strong> Work for a city or county
            building department
          </li>
          <li>
            <strong>Estimator/Project manager:</strong> Move into project
            planning and management roles
          </li>
        </ul>

        <h2>Electrician Salary Outlook in {cityName}</h2>
        <p>
          Apprentice electricians in {cityName} earn {data.salaryApprentice} per
          year while training. After certification, journeyman electricians earn{" "}
          {data.salaryJourneyman}, and master electricians or contractors can earn{" "}
          {data.salaryMaster}. {data.comparisonNote}
        </p>

        <h2>How Long Does It Take?</h2>
        <p>
          The complete timeline to become a licensed journeyman electrician in{" "}
          {cityName} is typically 4 to 5 years from the start of your
          apprenticeship. Obtaining a C-10 contractor license requires an
          additional 4 years of journeyman-level experience after certification,
          bringing the total to 8-9 years from apprenticeship entry to
          independent contractor status.
        </p>
      </>
    ),
    faqs: [
      {
        question: `Can I become an electrician without an apprenticeship in California?`,
        answer: `California requires completion of a state-approved apprenticeship to take the General Electrician Certification exam. There is no shortcut path. Trade school courses can supplement your education but cannot replace the required 8,000 hours of on-the-job training under a licensed electrician.`,
      },
      {
        question: `How much do electrical apprentices make in ${cityName}?`,
        answer: `Electrical apprentices in ${cityName} earn between ${data.salaryApprentice} per year, starting at roughly 40-50% of journeyman scale in the first year and increasing annually. ${data.ibewLocal} apprentices also receive health insurance and pension contributions.`,
      },
      {
        question: `Is there a demand for electricians in ${cityName}?`,
        answer: `Yes. ${cityName} has strong and growing demand for licensed electricians driven by ${data.demandDrivers.slice(0, 3).join(", ").toLowerCase()}. The Bureau of Labor Statistics projects above-average job growth for electricians nationally.`,
      },
    ],
    relatedSlugs: [
      `how-much-does-an-electrician-make-in-${citySlug.replace(/-ca$/, "")}`,
      "what-does-an-electrician-do",
      "what-is-a-residential-electrician",
    ],
  };
}

export function generateCityArticles(): Record<string, ArticleData> {
  const result: Record<string, ArticleData> = {};

  for (const city of cities) {
    if (city.slug === "los-angeles-ca") continue;
    const data = cityCareerData[city.slug];
    if (!data) continue;

    const salaryArticle = generateSalaryArticle(
      city.name,
      city.slug,
      city.county,
      data
    );
    const careerArticle = generateCareerArticle(
      city.name,
      city.slug,
      city.county,
      data
    );

    result[salaryArticle.slug] = salaryArticle;
    result[careerArticle.slug] = careerArticle;
  }

  return result;
}

export function getCityArticleSlugs(): string[] {
  return Object.keys(generateCityArticles());
}

export function getCityArticleListings(): {
  cityName: string;
  salarySlug: string;
  salaryTitle: string;
  salaryDescription: string;
  careerSlug: string;
  careerTitle: string;
  careerDescription: string;
}[] {
  return cities
    .filter((c) => c.slug !== "los-angeles-ca")
    .filter((c) => cityCareerData[c.slug])
    .map((city) => {
      const data = cityCareerData[city.slug];
      const cityBase = city.slug.replace(/-ca$/, "");
      return {
        cityName: city.name,
        salarySlug: `how-much-does-an-electrician-make-in-${cityBase}`,
        salaryTitle: `How Much Does an Electrician Make in ${city.name}?`,
        salaryDescription: `Electricians in ${city.name} earn ${data.salaryJourneyman} per year depending on experience, license type, and specialty. Full salary breakdown by level.`,
        careerSlug: `how-to-become-an-electrician-in-${cityBase}`,
        careerTitle: `How to Become an Electrician in ${city.name}`,
        careerDescription: `Step-by-step guide to becoming a licensed electrician in ${city.name}: apprenticeship programs through ${data.ibewLocal}, certification, licensing, and career paths.`,
      };
    });
}
