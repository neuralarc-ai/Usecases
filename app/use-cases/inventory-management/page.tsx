"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiShieldLine, RiFocus3Line, RiArrowLeftLine } from "react-icons/ri";

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
    title: "AI-Powered Demand Forecasting & Stock Optimization",
    description: "Achieve 85% forecast accuracy and reduce stockouts by 70%",
    metrics: [
      { icon: RiBarChartLine, text: "85% Forecast accuracy" },
      { icon: RiTimeLine, text: "70% Reduction in stockouts" }
    ]
  },
  {
    number: 2,
    title: "Automated Reordering & Supplier Management",
    description: "Automate 95% of reordering with 90% reduction in order errors",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "95% Automation of reordering" },
      { icon: RiBarChartLine, text: "90% Reduction in order errors" }
    ]
  },
  {
    number: 3,
    title: "Warehouse Automation & Optimization",
    description: "Improve warehouse efficiency by 45% and reduce picking errors by 90%",
    metrics: [
      { icon: RiBarChartLine, text: "45% Improvement in efficiency" },
      { icon: RiCheckboxCircleLine, text: "90% Reduction in picking errors" }
    ]
  },
  {
    number: 4,
    title: "Shrinkage Detection & Loss Prevention",
    description: "Reduce shrinkage by 60% with real-time detection and prevention",
    metrics: [
      { icon: RiBarChartLine, text: "60% Reduction in shrinkage" },
      { icon: RiShieldLine, text: "Real-time Detection" }
    ]
  },
  {
    number: 5,
    title: "Multi-Channel Inventory Synchronization",
    description: "Achieve real-time sync with 95% reduction in oversells",
    metrics: [
      { icon: RiTimeLine, text: "Real-time sync" },
      { icon: RiBarChartLine, text: "95% Reduction in oversells" }
    ]
  }
];

export default function InventoryManagementPage() {
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
              Inventory Management
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Optimize inventory levels, automate reordering, and prevent losses with AI-powered inventory management solutions.
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
                href={`/use-cases/inventory-management/case-${solution.number}`}
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
                href={`/use-cases/inventory-management/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/inventory-management/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

