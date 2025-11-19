"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiHeartLine, RiFocus3Line, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Hyper-Personalized Product Recommendations",
    description: "Increase click-through rate by 800% and conversion by 1000%",
    metrics: [
      { icon: RiBarChartLine, text: "800% Increase in click-through rate" },
      { icon: RiBarChartLine, text: "1000% Increase in conversion" }
    ]
  },
  {
    number: 2,
    title: "AI-Powered Virtual Shopping Assistant",
    description: "Automate 85% of product inquiries with zero wait time",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "85% Automation of inquiries" },
      { icon: RiTimeLine, text: "Zero Wait time" }
    ]
  },
  {
    number: 3,
    title: "Real-Time Sentiment Analysis & Service Recovery",
    description: "Detect 90% of issues in real-time with 75% recovery success",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "90% Issue detection rate" },
      { icon: RiBarChartLine, text: "75% Service recovery success" }
    ]
  },
  {
    number: 4,
    title: "Omnichannel Customer Journey Optimization",
    description: "Improve conversion rates by 50% with seamless channel transitions",
    metrics: [
      { icon: RiBarChartLine, text: "50% Improvement in conversion rates" },
      { icon: RiFocus3Line, text: "360° Customer journey visibility" }
    ]
  },
  {
    number: 5,
    title: "Loyalty Program Optimization & Personalization",
    description: "Increase redemption rate by 200% and engagement by 180%",
    metrics: [
      { icon: RiBarChartLine, text: "200% Increase in redemption rate" },
      { icon: RiHeartLine, text: "180% Increase in engagement" }
    ]
  }
];

export default function CustomerExperiencePage() {
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
              Customer Experience
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Deliver exceptional customer experiences with AI-powered personalization, virtual assistants, and omnichannel optimization.
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
                href={`/use-cases/customer-experience/case-${solution.number}`}
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
                href={`/use-cases/customer-experience/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/customer-experience/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

