"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiBarChartLine, RiFocus3Line, RiMoneyDollarCircleLine, RiCheckboxCircleLine, RiArrowLeftLine } from "react-icons/ri";
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
    title: "AI-Powered Risk Assessment & Scoring",
    description: "Reduce underwriting time by 80% and improve risk selection accuracy by 35%",
    metrics: [
      { icon: RiTimeLine, text: "80% Reduction in underwriting time" },
      { icon: RiBarChartLine, text: "35% Improvement in risk selection" }
    ]
  },
  {
    number: 2,
    title: "Rapid Quote Generation & Optimization",
    description: "Cut quote time by 95% and reduce abandonment by 50%",
    metrics: [
      { icon: RiTimeLine, text: "95% Reduction in quote time" },
      { icon: RiBarChartLine, text: "50% Reduction in abandonment" }
    ]
  },
  {
    number: 3,
    title: "Portfolio Risk Optimization & Monitoring",
    description: "Improve risk-adjusted returns by 60% with real-time portfolio visibility",
    metrics: [
      { icon: RiBarChartLine, text: "60% Improvement in returns" },
      { icon: RiCheckboxCircleLine, text: "Real-time Portfolio visibility" }
    ]
  },
  {
    number: 4,
    title: "Automated Policy Customization & Bundling",
    description: "Increase cross-sell rates by 45% with 300% more customization options",
    metrics: [
      { icon: RiBarChartLine, text: "45% Improvement in cross-sell" },
      { icon: RiMoneyDollarCircleLine, text: "$18M Annual revenue increase" }
    ]
  },
  {
    number: 5,
    title: "Continuous Risk Monitoring & Re-underwriting",
    description: "Reduce adverse selection losses by 70% with real-time risk visibility",
    metrics: [
      { icon: RiBarChartLine, text: "70% Reduction in losses" },
      { icon: RiCheckboxCircleLine, text: "Real-time Risk visibility" }
    ]
  }
];

export default function UnderwritingPage() {
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
              Underwriting
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
              Enhance risk assessment, accelerate quote generation, and optimize portfolio performance with AI-powered underwriting solutions.
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
                href={`/use-cases/underwriting/case-${solution.number}`}
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
                href={`/use-cases/underwriting/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/underwriting/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

