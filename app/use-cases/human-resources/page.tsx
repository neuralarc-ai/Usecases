"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiUserLine, RiCheckboxCircleLine, RiArrowDownLine, RiCalendarLine, RiEmotionHappyLine, RiArrowLeftLine } from "react-icons/ri";
import { getIndustryFromPath } from "@/lib/industry-mapping";

interface Metric {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface Solution {
  number: number;
  title: string;
  description: string;
  metrics: Metric[];
}

const solutions: Solution[] = [
  {
    number: 1,
    title: "AI-Powered Resume Screening & Candidate Matching",
    description: "Reduce screening time by 85% and identify 40% more qualified candidates",
    metrics: [
      { icon: RiTimeLine, text: "85% Reduction in screening time" },
      { icon: RiUserLine, text: "40% More qualified candidates identified" }
    ]
  },
  {
    number: 2,
    title: "Intelligent Employee Onboarding Automation",
    description: "Cut onboarding time by 70% and improve new hire satisfaction by 35%",
    metrics: [
      { icon: RiTimeLine, text: "70% Reduction in onboarding time" },
      { icon: RiCheckboxCircleLine, text: "95% Compliance rate for training" }
    ]
  },
  {
    number: 3,
    title: "Predictive Employee Retention Analytics",
    description: "Reduce turnover by 30% with 6-month advance warning for at-risk employees",
    metrics: [
      { icon: RiArrowDownLine, text: "30% Reduction in voluntary turnover" },
      { icon: RiCalendarLine, text: "6 months Advance warning for at-risk employees" }
    ]
  },
  {
    number: 4,
    title: "Automated Performance Review & Goal Tracking",
    description: "Reduce review preparation by 75% and increase goal achievement by 40%",
    metrics: [
      { icon: RiTimeLine, text: "75% Reduction in preparation time" },
      { icon: RiEmotionHappyLine, text: "90% Employee satisfaction with reviews" }
    ]
  },
  {
    number: 5,
    title: "Compliance Training Automation & Certification",
    description: "Achieve 100% compliance tracking with 50% reduction in training time",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "100% Compliance tracking accuracy" },
      { icon: RiTimeLine, text: "50% Reduction in training time" }
    ]
  }
];

export default function HumanResourcesPage() {
  const pathname = usePathname();
  const industry = getIndustryFromPath(pathname) || "banking";
  const backHref = `/use-cases?industry=${industry}`;

  return (
    <main>
      <section className="relative pt-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Back Button */}
          <Link 
            href={backHref}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 text-sm font-medium"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <RiArrowLeftLine className="w-4 h-4" />
            Back to Industries
          </Link>
          
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              Human Resources
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
              Transform talent management with AI-powered recruitment, onboarding, and retention solutions
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.slice(0, 3).map((solution) => (
              <DetailCard
                key={solution.number}
                number={solution.number}
                title={solution.title}
                description={solution.description}
                metrics={solution.metrics}
                href={`/use-cases/human-resources/case-${solution.number}`}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-start-1">
              <DetailCard
                number={solutions[3].number}
                title={solutions[3].title}
                description={solutions[3].description}
                metrics={solutions[3].metrics}
                href={`/use-cases/human-resources/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/human-resources/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

