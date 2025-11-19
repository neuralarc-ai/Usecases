"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiBarChartLine, RiFocus3Line, RiCheckboxCircleLine, RiMoneyDollarCircleLine, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Real-Time Business Intelligence & Dashboards",
    description: "Provide real-time insights with 85% reduction in report generation time",
    metrics: [
      { icon: RiTimeLine, text: "Real-time Insights" },
      { icon: RiBarChartLine, text: "85% Reduction in report time" }
    ]
  },
  {
    number: 2,
    title: "Customer Behavior Analytics & Insights",
    description: "Increase revenue by $15M with 360° customer view and real-time insights",
    metrics: [
      { icon: RiFocus3Line, text: "360° Customer view" },
      { icon: RiMoneyDollarCircleLine, text: "$15M Annual revenue increase" }
    ]
  },
  {
    number: 3,
    title: "Product Performance Analytics & Optimization",
    description: "Improve gross margin by 25% with real-time product insights",
    metrics: [
      { icon: RiBarChartLine, text: "25% Improvement in gross margin" },
      { icon: RiTimeLine, text: "Real-time Product insights" }
    ]
  },
  {
    number: 4,
    title: "Store Performance Analytics & Benchmarking",
    description: "Improve average store performance by 30% with data-driven management",
    metrics: [
      { icon: RiBarChartLine, text: "30% Improvement in store performance" },
      { icon: RiCheckboxCircleLine, text: "50% Reduction in variance" }
    ]
  },
  {
    number: 5,
    title: "Competitive Intelligence & Market Analysis",
    description: "Gain real-time competitive intelligence with faster product development",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "Real-time Competitive intelligence" },
      { icon: RiMoneyDollarCircleLine, text: "$5M Annual value" }
    ]
  }
];

export default function AnalyticsInsightsPage() {
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
              Analytics & Insights
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Make data-driven decisions with real-time business intelligence, customer analytics, and competitive intelligence.
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
                href={`/use-cases/analytics-insights/case-${solution.number}`}
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
                href={`/use-cases/analytics-insights/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/analytics-insights/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

