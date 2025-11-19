"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiTimeLine, RiCheckboxCircleLine, RiFocus3Line, RiArrowLeftLine } from "react-icons/ri";

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
    title: "AI-Powered Lead Scoring & Prioritization",
    description: "Improve conversion rate by 300% and reduce wasted time by 60%",
    metrics: [
      { icon: RiBarChartLine, text: "300% Improvement in conversion rate" },
      { icon: RiTimeLine, text: "60% Reduction in wasted time" }
    ]
  },
  {
    number: 2,
    title: "Intelligent Cross-Sell & Upsell Recommendations",
    description: "Increase cross-sell rate by 150% with optimal timing",
    metrics: [
      { icon: RiBarChartLine, text: "150% Increase in cross-sell rate" },
      { icon: RiMoneyDollarCircleLine, text: "$20M Annual revenue increase" }
    ]
  },
  {
    number: 3,
    title: "Agent Performance Analytics & Coaching",
    description: "Improve agent productivity by 35% and reduce turnover by 40%",
    metrics: [
      { icon: RiBarChartLine, text: "35% Improvement in productivity" },
      { icon: RiBarChartLine, text: "40% Reduction in turnover" }
    ]
  },
  {
    number: 4,
    title: "Commission Automation & Reconciliation",
    description: "Reduce processing time by 95% with 99% accuracy",
    metrics: [
      { icon: RiTimeLine, text: "95% Reduction in processing time" },
      { icon: RiCheckboxCircleLine, text: "99% Accuracy" }
    ]
  },
  {
    number: 5,
    title: "Market Analysis & Competitive Intelligence",
    description: "Gain real-time competitive intelligence with faster product development",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "Real-time Competitive intelligence" },
      { icon: RiMoneyDollarCircleLine, text: "$10M Annual revenue increase" }
    ]
  }
];

export default function SalesDistributionPage() {
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
              Sales & Distribution
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Optimize lead scoring, cross-sell opportunities, and agent performance with AI-powered sales solutions.
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
                href={`/use-cases/sales-distribution/case-${solution.number}`}
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
                href={`/use-cases/sales-distribution/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/sales-distribution/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

