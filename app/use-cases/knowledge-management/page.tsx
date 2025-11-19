"use client";

import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiFocus3Line, RiMoneyDollarCircleLine, RiArrowLeftLine } from "react-icons/ri";

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
    title: "Intelligent Document Organization & Retrieval",
    description: "Reduce search time by 90% with AI-powered organization",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in search time" },
      { icon: RiCheckboxCircleLine, text: "Better Knowledge reuse" }
    ]
  },
  {
    number: 2,
    title: "Best Practice Capture & Sharing",
    description: "Increase best practice reuse by 3x with automated capture",
    metrics: [
      { icon: RiBarChartLine, text: "3x Increase in reuse" },
      { icon: RiCheckboxCircleLine, text: "Reduced Knowledge loss" }
    ]
  },
  {
    number: 3,
    title: "Expert Location & Collaboration",
    description: "Reduce expert search time by 90% with intelligent matching",
    metrics: [
      { icon: RiTimeLine, text: "90% Reduction in search time" },
      { icon: RiBarChartLine, text: "50% Increase in collaboration" }
    ]
  },
  {
    number: 4,
    title: "Content Recommendation & Discovery",
    description: "Reduce content search time by 80% with intelligent recommendations",
    metrics: [
      { icon: RiTimeLine, text: "80% Reduction in search time" },
      { icon: RiBarChartLine, text: "3x Increase in content reuse" }
    ]
  },
  {
    number: 5,
    title: "Knowledge Retention & Succession Planning",
    description: "Achieve 90% knowledge retention with automated capture",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "90% Knowledge retention" },
      { icon: RiMoneyDollarCircleLine, text: "$2M Annual value protection" }
    ]
  }
];

export default function KnowledgeManagementPage() {
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
              Knowledge Management
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Organize documents, capture best practices, and connect experts with AI-powered knowledge management solutions.
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
                href={`/use-cases/knowledge-management/case-${solution.number}`}
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
                href={`/use-cases/knowledge-management/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/knowledge-management/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

