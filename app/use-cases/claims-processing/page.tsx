"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiFocus3Line, RiShieldLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine, RiBarChartLine, RiArrowLeftLine } from "react-icons/ri";
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
    title: "Automated Claims Triage & Routing",
    description: "Reduce triage time by 90% and achieve 95% routing accuracy",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in triage time" },
      { icon: RiFocus3Line, text: "95% Routing accuracy" }
    ]
  },
  {
    number: 2,
    title: "Computer Vision Damage Assessment",
    description: "Cut assessment time by 80% with 95% consistency in damage evaluation",
    metrics: [
      { icon: RiTimeLine, text: "80% Reduction in assessment time" },
      { icon: RiCheckboxCircleLine, text: "95% Consistency in evaluation" }
    ]
  },
  {
    number: 3,
    title: "Intelligent Fraud Detection & Prevention",
    description: "Increase fraud detection to 90% with 75% reduction in false positives",
    metrics: [
      { icon: RiShieldLine, text: "90% Fraud detection rate" },
      { icon: RiBarChartLine, text: "75% Reduction in false positives" }
    ]
  },
  {
    number: 4,
    title: "Accelerated Claims Settlement",
    description: "Reduce settlement time by 65% with 85% straight-through processing",
    metrics: [
      { icon: RiTimeLine, text: "65% Reduction in settlement time" },
      { icon: RiCheckboxCircleLine, text: "85% Straight-through processing" }
    ]
  },
  {
    number: 5,
    title: "Proactive Customer Communication & Updates",
    description: "Reduce status inquiry calls by 70% and improve satisfaction by 60%",
    metrics: [
      { icon: RiTimeLine, text: "70% Reduction in inquiry calls" },
      { icon: RiBarChartLine, text: "60% Improvement in satisfaction" }
    ]
  }
];

export default function ClaimsProcessingPage() {
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
              Claims Processing
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
              Automate claims triage, damage assessment, fraud detection, and settlement with AI-powered solutions.
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
                href={`/use-cases/claims-processing/case-${solution.number}`}
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
                href={`/use-cases/claims-processing/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/claims-processing/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

