"use client";

import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiAlertLine } from "react-icons/ri";

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
    title: "Automated Regulatory Document Analysis",
    description: "Reduce document review time by 90% and capture 100% of regulatory changes",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in review time" },
      { icon: RiCheckboxCircleLine, text: "100% Capture of regulatory changes" }
    ]
  },
  {
    number: 2,
    title: "Intelligent Contract Review & Risk Assessment",
    description: "Cut contract review time by 80% with 95% risk identification accuracy",
    metrics: [
      { icon: RiTimeLine, text: "80% Reduction in review time" },
      { icon: RiBarChartLine, text: "95% Accuracy in risk identification" }
    ]
  },
  {
    number: 3,
    title: "Real-Time Regulatory Risk Monitoring",
    description: "Achieve 95% reduction in violations with real-time compliance visibility",
    metrics: [
      { icon: RiBarChartLine, text: "95% Reduction in violations" },
      { icon: RiBarChartLine, text: "Real-time Compliance visibility" }
    ]
  },
  {
    number: 4,
    title: "Automated Audit Trail & Documentation Management",
    description: "Reduce audit preparation by 90% with 100% audit trail completeness",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in audit prep time" },
      { icon: RiCheckboxCircleLine, text: "100% Audit trail completeness" }
    ]
  },
  {
    number: 5,
    title: "Policy Compliance Monitoring & Enforcement",
    description: "Achieve 99% transaction coverage with real-time violation detection",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "99% Transaction coverage" },
      { icon: RiAlertLine, text: "Real-time Violation detection" }
    ]
  }
];

export default function LegalCompliancePage() {
  return (
    <main>
      <section className="relative pt-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              Legal & Compliance
            </h1>
            <p className="text-base text-white/80 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Automate regulatory monitoring, contract review, and compliance management.
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {solutions.slice(0, 3).map((solution) => (
              <DetailCard
                key={solution.number}
                number={solution.number}
                title={solution.title}
                description={solution.description}
                metrics={solution.metrics}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 items-stretch">
            <div className="md:col-start-1 md:col-end-2 flex">
              <DetailCard
                number={solutions[3].number}
                title={solutions[3].title}
                description={solutions[3].description}
                metrics={solutions[3].metrics}
              />
            </div>
            <div className="md:col-start-2 md:col-end-3 flex">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

