"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiFocus3Line, RiMoneyDollarCircleLine, RiArrowLeftLine } from "react-icons/ri";
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
    title: "Automated Market Research & Data Synthesis",
    description: "Reduce research time by 85% and save $120K per project",
    metrics: [
      { icon: RiTimeLine, text: "85% Reduction in research time" },
      { icon: RiCheckboxCircleLine, text: "3x Increase in data sources" }
    ]
  },
  {
    number: 2,
    title: "Competitive Intelligence & Analysis",
    description: "Reduce analysis time by 80% with real-time updates",
    metrics: [
      { icon: RiTimeLine, text: "80% Reduction in analysis time" },
      { icon: RiCheckboxCircleLine, text: "Real-time Updates" }
    ]
  },
  {
    number: 3,
    title: "Data Analysis & Visualization",
    description: "Reduce analysis time by 70% with automated cleaning",
    metrics: [
      { icon: RiTimeLine, text: "70% Reduction in analysis time" },
      { icon: RiBarChartLine, text: "Higher quality insights" }
    ]
  },
  {
    number: 4,
    title: "Industry Trend Analysis & Forecasting",
    description: "Reduce research time by 75% with predictive forecasting",
    metrics: [
      { icon: RiTimeLine, text: "75% Reduction in research time" },
      { icon: RiFocus3Line, text: "Real-time Trend monitoring" }
    ]
  },
  {
    number: 5,
    title: "Benchmarking & Best Practice Identification",
    description: "Reduce benchmarking time by 75% with comprehensive analysis",
    metrics: [
      { icon: RiTimeLine, text: "75% Reduction in benchmarking time" },
      { icon: RiCheckboxCircleLine, text: "More comprehensive analysis" }
    ]
  }
];

export default function ResearchAnalysisPage() {
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
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              Research & Analysis
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Accelerate market research, competitive intelligence, and data analysis with AI-powered research solutions.
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
                href={`/use-cases/research-analysis/case-${solution.number}`}
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
                href={`/use-cases/research-analysis/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/research-analysis/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

