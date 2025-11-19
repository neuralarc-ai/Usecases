"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiCheckboxCircleLine, RiTimeLine, RiShieldLine, RiBarChartLine, RiFocus3Line, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Intelligent Invoice Processing & Automation",
    description: "Achieve 95% straight-through processing with 99.5% accuracy",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "95% Straight-through processing" },
      { icon: RiTimeLine, text: "90% Reduction in processing time" }
    ]
  },
  {
    number: 2,
    title: "AI-Driven Fraud Detection & Prevention",
    description: "Increase fraud detection to 95% with 85% reduction in false positives",
    metrics: [
      { icon: RiShieldLine, text: "95% Fraud detection rate" },
      { icon: RiBarChartLine, text: "85% Reduction in false positives" }
    ]
  },
  {
    number: 3,
    title: "Dynamic Credit Risk Scoring & Assessment",
    description: "Increase approval rates by 40% while reducing defaults by 25%",
    metrics: [
      { icon: RiBarChartLine, text: "40% Increase in approval rates" },
      { icon: RiTimeLine, text: "85% Reduction in underwriting time" }
    ]
  },
  {
    number: 4,
    title: "Predictive Financial Forecasting & Planning",
    description: "Improve forecast accuracy by 60% with real-time updates",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in prep time" },
      { icon: RiFocus3Line, text: "60% Improvement in accuracy" }
    ]
  }
];

export default function FinanceOperationsPage() {
  return (
    <main>
      <section className="relative pt-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Back Button */}
          <Link 
            href="/use-cases"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm font-medium"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <RiArrowLeftLine className="w-4 h-4" />
            Back to Industries
          </Link>
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              Finance Operations
            </h1>
            <p className="text-base text-white/80 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Streamline invoice processing, fraud detection, and financial forecasting with AI-powered solutions.
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

