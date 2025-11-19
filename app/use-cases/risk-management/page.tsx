"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiBarChartLine, RiCalendarLine, RiMoneyDollarCircleLine, RiTimeLine, RiDatabaseLine, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Real-Time Market Risk Assessment & Monitoring",
    description: "Reduce unexpected losses by 85% with real-time risk visibility",
    metrics: [
      { icon: RiBarChartLine, text: "Real-time Risk visibility" },
      { icon: RiBarChartLine, text: "85% Reduction in unexpected losses" }
    ]
  },
  {
    number: 2,
    title: "Credit Portfolio Optimization & Monitoring",
    description: "Improve risk-adjusted returns by 70% with real-time portfolio visibility",
    metrics: [
      { icon: RiBarChartLine, text: "Real-time Portfolio risk visibility" },
      { icon: RiBarChartLine, text: "70% Improvement in returns" }
    ]
  },
  {
    number: 3,
    title: "Operational Risk Event Prediction & Prevention",
    description: "Reduce operational losses by 75% with 6-month advance warning",
    metrics: [
      { icon: RiBarChartLine, text: "75% Reduction in operational losses" },
      { icon: RiCalendarLine, text: "6 months Advance warning" }
    ]
  },
  {
    number: 4,
    title: "Regulatory Capital Optimization",
    description: "Release $45M in capital through real-time optimization",
    metrics: [
      { icon: RiMoneyDollarCircleLine, text: "$45M Capital release" },
      { icon: RiBarChartLine, text: "Real-time Capital visibility" }
    ]
  },
  {
    number: 5,
    title: "Integrated Risk Reporting & Governance",
    description: "Reduce reporting time by 90% with single source of truth",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in reporting time" },
      { icon: RiDatabaseLine, text: "Single Source of truth" }
    ]
  }
];

export default function RiskManagementPage() {
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
              Risk Management
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Real-time risk assessment, portfolio optimization, and regulatory capital management.
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
                href={`/use-cases/risk-management/case-${solution.number}`}
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
                href={`/use-cases/risk-management/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/risk-management/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

