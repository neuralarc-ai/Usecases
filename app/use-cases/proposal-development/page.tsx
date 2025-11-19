"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Automated RFP Analysis & Response",
    description: "Reduce response time by 60% and improve win rate by 40%",
    metrics: [
      { icon: RiTimeLine, text: "60% Reduction in response time" },
      { icon: RiBarChartLine, text: "40% Improvement in win rate" }
    ]
  },
  {
    number: 2,
    title: "Proposal Content Library & Reuse",
    description: "Increase content reuse to 80% with intelligent library",
    metrics: [
      { icon: RiBarChartLine, text: "80% Content reuse rate" },
      { icon: RiTimeLine, text: "50% Reduction in creation time" }
    ]
  },
  {
    number: 3,
    title: "Pricing Optimization & Win Probability",
    description: "Improve win rate by 25% with data-driven pricing",
    metrics: [
      { icon: RiBarChartLine, text: "25% Improvement in win rate" },
      { icon: RiBarChartLine, text: "15% Improvement in margin" }
    ]
  },
  {
    number: 4,
    title: "Proposal Template Management & Automation",
    description: "Reduce assembly time by 70% with automated templates",
    metrics: [
      { icon: RiTimeLine, text: "70% Reduction in assembly time" },
      { icon: RiCheckboxCircleLine, text: "Consistent Branding" }
    ]
  },
  {
    number: 5,
    title: "Win/Loss Analysis & Continuous Improvement",
    description: "Improve win rate by 20% with continuous insights",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "Continuous Insights" },
      { icon: RiBarChartLine, text: "20% Improvement in win rate" }
    ]
  }
];

export default function ProposalDevelopmentPage() {
  return (
    <main>
      <section className="relative pt-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Back Button */}
          <Link 
            href="/use-cases"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 text-sm font-medium"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <RiArrowLeftLine className="w-4 h-4" />
            Back to Industries
          </Link>
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              Proposal Development
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Accelerate RFP responses, optimize pricing, and improve win rates with AI-powered proposal solutions.
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
                href={`/use-cases/proposal-development/case-${solution.number}`}
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
                href={`/use-cases/proposal-development/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/proposal-development/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

