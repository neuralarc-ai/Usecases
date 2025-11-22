"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiShieldLine, RiFocus3Line, RiArrowLeftLine } from "react-icons/ri";
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
    title: "Route Optimization & Delivery Management",
    description: "Reduce delivery costs by 30% and improve on-time delivery to 85%",
    metrics: [
      { icon: RiTimeLine, text: "30% Reduction in delivery costs" },
      { icon: RiCheckboxCircleLine, text: "85% On-time delivery rate" }
    ]
  },
  {
    number: 2,
    title: "Supplier Performance Management & Optimization",
    description: "Improve supplier performance by 40% with real-time monitoring",
    metrics: [
      { icon: RiBarChartLine, text: "40% Improvement in supplier performance" },
      { icon: RiCheckboxCircleLine, text: "50% Reduction in quality issues" }
    ]
  },
  {
    number: 3,
    title: "Logistics Network Optimization",
    description: "Reduce logistics costs by 20% with optimized network design",
    metrics: [
      { icon: RiBarChartLine, text: "20% Reduction in logistics costs" },
      { icon: RiFocus3Line, text: "Optimized Network design" }
    ]
  },
  {
    number: 4,
    title: "Quality Control & Defect Detection",
    description: "Reduce return rate by 60% with 100% inspection coverage",
    metrics: [
      { icon: RiBarChartLine, text: "60% Reduction in return rate" },
      { icon: RiCheckboxCircleLine, text: "100% Inspection coverage" }
    ]
  },
  {
    number: 5,
    title: "Inventory Accuracy & Cycle Counting",
    description: "Achieve 99% inventory accuracy with automated cycle counting",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "99% Inventory accuracy" },
      { icon: RiShieldLine, text: "Elimination of annual physical counts" }
    ]
  }
];

export default function SupplyChainPage() {
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
              Supply Chain
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
              Optimize logistics, supplier relationships, and quality control with AI-powered supply chain solutions.
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
                href={`/use-cases/supply-chain/case-${solution.number}`}
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
                href={`/use-cases/supply-chain/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/supply-chain/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

