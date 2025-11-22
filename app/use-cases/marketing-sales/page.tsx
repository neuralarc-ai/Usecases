"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine, RiFocus3Line, RiArrowLeftLine } from "react-icons/ri";
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
    title: "AI-Generated Marketing Content & Campaigns",
    description: "Reduce content creation time by 90% with 150% improvement in performance",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in creation time" },
      { icon: RiBarChartLine, text: "150% Improvement in performance" }
    ]
  },
  {
    number: 2,
    title: "Dynamic Pricing & Promotion Optimization",
    description: "Improve gross margin by 25% with real-time pricing optimization",
    metrics: [
      { icon: RiBarChartLine, text: "25% Improvement in gross margin" },
      { icon: RiTimeLine, text: "Real-time Pricing" }
    ]
  },
  {
    number: 3,
    title: "Customer Segmentation & Targeting",
    description: "Improve response rate by 600% with 1000+ micro-segments",
    metrics: [
      { icon: RiBarChartLine, text: "600% Improvement in response rate" },
      { icon: RiFocus3Line, text: "1000+ Micro-segments" }
    ]
  },
  {
    number: 4,
    title: "Marketing Attribution & ROI Optimization",
    description: "Improve marketing ROI by 45% with multi-touch attribution",
    metrics: [
      { icon: RiBarChartLine, text: "45% Improvement in marketing ROI" },
      { icon: RiCheckboxCircleLine, text: "Multi-touch Attribution" }
    ]
  },
  {
    number: 5,
    title: "Customer Acquisition Cost Optimization",
    description: "Reduce CAC by 35% with optimized targeting and bidding",
    metrics: [
      { icon: RiBarChartLine, text: "35% Reduction in CAC" },
      { icon: RiMoneyDollarCircleLine, text: "$8M Annual efficiency gain" }
    ]
  }
];

export default function MarketingSalesPage() {
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
              Marketing & Sales
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
              Drive revenue growth with AI-powered content generation, dynamic pricing, and optimized marketing campaigns.
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
                href={`/use-cases/marketing-sales/case-${solution.number}`}
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
                href={`/use-cases/marketing-sales/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/marketing-sales/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

