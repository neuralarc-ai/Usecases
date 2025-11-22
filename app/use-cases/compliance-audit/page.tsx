"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine, RiShieldLine, RiBarChartLine, RiArrowLeftLine } from "react-icons/ri";
import { getIndustryFromPath } from "@/lib/industry-mapping";

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
    title: "Automated Regulatory Monitoring & Reporting",
    description: "Reduce monitoring time by 90% and capture 100% of regulatory changes",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in monitoring time" },
      { icon: RiCheckboxCircleLine, text: "100% Capture of regulatory changes" }
    ]
  },
  {
    number: 2,
    title: "Audit Trail Automation & Management",
    description: "Reduce audit prep time by 90% with 100% audit trail completeness",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in audit prep time" },
      { icon: RiCheckboxCircleLine, text: "100% Audit trail completeness" }
    ]
  },
  {
    number: 3,
    title: "Policy Compliance Verification & Testing",
    description: "Achieve 100% policy testing coverage with real-time issue identification",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "100% Policy testing coverage" },
      { icon: RiCheckboxCircleLine, text: "Real-time Issue identification" }
    ]
  },
  {
    number: 4,
    title: "Data Privacy & Security Compliance",
    description: "Achieve 100% PII visibility with real-time breach detection",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "100% PII visibility" },
      { icon: RiShieldLine, text: "Real-time Breach detection" }
    ]
  },
  {
    number: 5,
    title: "Market Conduct Compliance & Monitoring",
    description: "Reduce market conduct violations by 95% with proactive compliance",
    metrics: [
      { icon: RiBarChartLine, text: "95% Reduction in violations" },
      { icon: RiMoneyDollarCircleLine, text: "$3M Annual fine avoidance" }
    ]
  }
];

export default function ComplianceAuditPage() {
  const pathname = usePathname();
  const industry = getIndustryFromPath(pathname) || "banking";
  const backHref = `/use-cases?industry=${industry}`;

  return (
    <main>
      <section className="relative pt-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Back Button */}
          <Link 
            href={backHref}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 text-sm font-medium"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <RiArrowLeftLine className="w-4 h-4" />
            Back to Industries
          </Link>
          
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              Compliance & Audit
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
              Automate regulatory monitoring, audit trail management, and compliance verification with AI-powered solutions.
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
                href={`/use-cases/compliance-audit/case-${solution.number}`}
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
                href={`/use-cases/compliance-audit/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/compliance-audit/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

