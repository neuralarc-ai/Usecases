"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine, RiTimeLine, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Capacity Planning & Utilization Optimization",
    description: "Achieve 85% target utilization and increase revenue by $5M",
    metrics: [
      { icon: RiBarChartLine, text: "85% Target utilization" },
      { icon: RiMoneyDollarCircleLine, text: "$5M Annual revenue increase" }
    ]
  },
  {
    number: 2,
    title: "Skill Matching & Resource Allocation",
    description: "Optimize resource allocation with intelligent skill matching",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "Optimal Skill matching" },
      { icon: RiTimeLine, text: "Reduced Bench time" }
    ]
  },
  {
    number: 3,
    title: "Demand Forecasting & Pipeline Analysis",
    description: "Improve demand forecasting accuracy with predictive analytics",
    metrics: [
      { icon: RiBarChartLine, text: "Improved Forecasting accuracy" },
      { icon: RiFocus3Line, text: "Better Capacity planning" }
    ]
  },
  {
    number: 4,
    title: "Workload Balancing & Burnout Prevention",
    description: "Reduce burnout with intelligent workload distribution",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "Reduced Burnout" },
      { icon: RiBarChartLine, text: "Better Workload balance" }
    ]
  },
  {
    number: 5,
    title: "Resource Analytics & Performance Tracking",
    description: "Track resource performance and utilization with real-time analytics",
    metrics: [
      { icon: RiBarChartLine, text: "Real-time Analytics" },
      { icon: RiCheckboxCircleLine, text: "Data-driven Decisions" }
    ]
  }
];

export default function ResourcePlanningPage() {
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
              Resource Planning
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Optimize capacity planning, skill matching, and resource allocation with AI-powered planning solutions.
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
                href={`/use-cases/resource-planning/case-${solution.number}`}
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
                href={`/use-cases/resource-planning/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/resource-planning/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

