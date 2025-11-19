"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiHeartLine, RiMoneyDollarCircleLine, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Project Management Automation & Tracking",
    description: "Reduce status reporting time by 90% and budget overruns by 50%",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in reporting time" },
      { icon: RiBarChartLine, text: "50% Reduction in budget overruns" }
    ]
  },
  {
    number: 2,
    title: "Deliverable Creation & Quality Assurance",
    description: "Reduce creation time by 60% with higher quality outputs",
    metrics: [
      { icon: RiTimeLine, text: "60% Reduction in creation time" },
      { icon: RiCheckboxCircleLine, text: "Higher Quality" }
    ]
  },
  {
    number: 3,
    title: "Client Communication & Engagement",
    description: "Reduce communication time by 80% with 45% improvement in satisfaction",
    metrics: [
      { icon: RiTimeLine, text: "80% Reduction in communication time" },
      { icon: RiHeartLine, text: "45% Improvement in satisfaction" }
    ]
  },
  {
    number: 4,
    title: "Quality Control & Review Automation",
    description: "Reduce review time by 70% with consistent quality standards",
    metrics: [
      { icon: RiTimeLine, text: "70% Reduction in review time" },
      { icon: RiCheckboxCircleLine, text: "Consistent Quality standards" }
    ]
  },
  {
    number: 5,
    title: "Post-Engagement Follow-Up & Value Tracking",
    description: "Increase repeat business by 80% with automated follow-up",
    metrics: [
      { icon: RiBarChartLine, text: "80% Increase in repeat business" },
      { icon: RiMoneyDollarCircleLine, text: "$5M Annual revenue increase" }
    ]
  }
];

export default function ClientDeliveryPage() {
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
              Client Delivery
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Enhance project management, deliverable creation, and client engagement with AI-powered delivery solutions.
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
                href={`/use-cases/client-delivery/case-${solution.number}`}
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
                href={`/use-cases/client-delivery/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/client-delivery/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

