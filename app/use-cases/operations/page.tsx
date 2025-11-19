"use client";

import DetailCard from "@/components/detail-card";
import { RiCheckboxCircleLine, RiTimeLine, RiBarChartLine, RiFocus3Line } from "react-icons/ri";

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
    title: "Automated Trade Reconciliation & Settlement",
    description: "Achieve 95% straight-through reconciliation with 99.5% accuracy",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "95% Straight-through reconciliation" },
      { icon: RiTimeLine, text: "90% Reduction in time" }
    ]
  },
  {
    number: 2,
    title: "Intelligent Customer Onboarding & KYC",
    description: "Reduce onboarding time by 85% and cut costs by 90%",
    metrics: [
      { icon: RiTimeLine, text: "85% Reduction in onboarding time" },
      { icon: RiBarChartLine, text: "70% Reduction in abandonment" }
    ]
  },
  {
    number: 3,
    title: "Process Optimization & Bottleneck Identification",
    description: "Improve process efficiency by 40% with real-time bottleneck visibility",
    metrics: [
      { icon: RiBarChartLine, text: "40% Improvement in efficiency" },
      { icon: RiBarChartLine, text: "Real-time Bottleneck visibility" }
    ]
  },
  {
    number: 4,
    title: "Resource Allocation & Capacity Planning",
    description: "Improve resource utilization by 30% with 95% forecast accuracy",
    metrics: [
      { icon: RiBarChartLine, text: "30% Improvement in utilization" },
      { icon: RiFocus3Line, text: "95% Forecast accuracy" }
    ]
  }
];

export default function OperationsPage() {
  return (
    <main>
      <section className="relative pt-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              Operations
            </h1>
            <p className="text-base text-white/80 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Optimize trade reconciliation, customer onboarding, and process efficiency.
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {solutions.map((solution) => (
              <DetailCard
                key={solution.number}
                number={solution.number}
                title={solution.title}
                description={solution.description}
                metrics={solution.metrics}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

