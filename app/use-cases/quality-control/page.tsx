"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiCheckboxCircleLine, RiBarChartLine, RiShieldLine, RiTimeLine, RiMoneyDollarCircleLine, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Computer Vision Quality Inspection",
    description: "Achieve 100% inspection coverage with automated defect detection",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "100% Inspection coverage" },
      { icon: RiBarChartLine, text: "90% Reduction in defects" }
    ]
  },
  {
    number: 2,
    title: "Predictive Quality & Defect Prevention",
    description: "Prevent defects before they occur with predictive analytics",
    metrics: [
      { icon: RiBarChartLine, text: "80% Reduction in defects" },
      { icon: RiTimeLine, text: "Real-time Prevention" }
    ]
  },
  {
    number: 3,
    title: "Automated Quality Testing & Validation",
    description: "Automate 95% of quality testing with consistent standards",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "95% Automation of testing" },
      { icon: RiBarChartLine, text: "Consistent Quality standards" }
    ]
  },
  {
    number: 4,
    title: "Root Cause Analysis & Corrective Actions",
    description: "Identify root causes 90% faster with AI-powered analysis",
    metrics: [
      { icon: RiTimeLine, text: "90% Faster root cause identification" },
      { icon: RiCheckboxCircleLine, text: "Effective Corrective actions" }
    ]
  },
  {
    number: 5,
    title: "Quality Analytics & Continuous Improvement",
    description: "Improve quality continuously with real-time analytics",
    metrics: [
      { icon: RiBarChartLine, text: "Real-time Quality analytics" },
      { icon: RiMoneyDollarCircleLine, text: "$8M Annual value" }
    ]
  }
];

export default function QualityControlPage() {
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
              Quality Control
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Ensure product quality with AI-powered inspection, defect detection, and continuous improvement solutions.
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
                href={`/use-cases/quality-control/case-${solution.number}`}
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
                href={`/use-cases/quality-control/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/quality-control/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

