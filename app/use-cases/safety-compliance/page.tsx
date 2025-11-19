"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiShieldLine, RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Incident Prediction & Prevention",
    description: "Reduce safety incidents by 80% with predictive analytics",
    metrics: [
      { icon: RiBarChartLine, text: "80% Reduction in incidents" },
      { icon: RiShieldLine, text: "Proactive Prevention" }
    ]
  },
  {
    number: 2,
    title: "Safety Monitoring & Compliance Tracking",
    description: "Achieve 100% compliance with automated monitoring",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "100% Compliance tracking" },
      { icon: RiTimeLine, text: "Real-time Monitoring" }
    ]
  },
  {
    number: 3,
    title: "Automated Safety Training & Certification",
    description: "Automate 90% of training with personalized programs",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "90% Training automation" },
      { icon: RiBarChartLine, text: "100% Certification compliance" }
    ]
  },
  {
    number: 4,
    title: "Risk Assessment & Mitigation",
    description: "Identify and mitigate risks 85% faster with AI analysis",
    metrics: [
      { icon: RiTimeLine, text: "85% Faster risk identification" },
      { icon: RiShieldLine, text: "Effective Mitigation" }
    ]
  },
  {
    number: 5,
    title: "Safety Analytics & Reporting",
    description: "Improve safety performance with real-time analytics",
    metrics: [
      { icon: RiBarChartLine, text: "Real-time Safety analytics" },
      { icon: RiMoneyDollarCircleLine, text: "$3M Annual value" }
    ]
  }
];

export default function SafetyCompliancePage() {
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
              Safety & Compliance
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Prevent incidents, ensure compliance, and improve safety with AI-powered safety and compliance solutions.
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
                href={`/use-cases/safety-compliance/case-${solution.number}`}
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
                href={`/use-cases/safety-compliance/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/safety-compliance/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

