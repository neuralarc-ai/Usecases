"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiFocus3Line, RiShieldLine, RiMoneyDollarCircleLine, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Supplier Performance Management",
    description: "Improve supplier performance by 40% with real-time monitoring",
    metrics: [
      { icon: RiBarChartLine, text: "40% Improvement in performance" },
      { icon: RiCheckboxCircleLine, text: "50% Reduction in quality issues" }
    ]
  },
  {
    number: 2,
    title: "Material Planning & Inventory Optimization",
    description: "Reduce inventory costs by 30% with optimized planning",
    metrics: [
      { icon: RiBarChartLine, text: "30% Reduction in inventory costs" },
      { icon: RiTimeLine, text: "95% Material availability" }
    ]
  },
  {
    number: 3,
    title: "Logistics Network Optimization",
    description: "Reduce logistics costs by 25% with optimized network design",
    metrics: [
      { icon: RiBarChartLine, text: "25% Reduction in logistics costs" },
      { icon: RiFocus3Line, text: "Optimized Network design" }
    ]
  },
  {
    number: 4,
    title: "Demand Forecasting & Planning",
    description: "Improve forecast accuracy to 90% with AI-powered forecasting",
    metrics: [
      { icon: RiBarChartLine, text: "90% Forecast accuracy" },
      { icon: RiCheckboxCircleLine, text: "Reduced Stockouts" }
    ]
  },
  {
    number: 5,
    title: "Supply Chain Risk Management",
    description: "Identify and mitigate risks proactively with predictive analytics",
    metrics: [
      { icon: RiShieldLine, text: "Proactive Risk mitigation" },
      { icon: RiMoneyDollarCircleLine, text: "$5M Annual value" }
    ]
  }
];

export default function SupplyChainManufacturingPage() {
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
              Supply Chain
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Optimize supplier relationships, material planning, and logistics with AI-powered supply chain solutions.
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
                href={`/use-cases/supply-chain-manufacturing/case-${solution.number}`}
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
                href={`/use-cases/supply-chain-manufacturing/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/supply-chain-manufacturing/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

