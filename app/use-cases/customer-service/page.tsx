"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DetailCard from "@/components/detail-card";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine, RiHeartLine, RiArrowLeftLine } from "react-icons/ri";
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
    title: "AI-Powered 24/7 Customer Support Chatbot",
    description: "Automate 80% of routine inquiries with zero wait time and 60% cost reduction",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "80% Automation of inquiries" },
      { icon: RiTimeLine, text: "60% Reduction in call center costs" }
    ]
  },
  {
    number: 2,
    title: "Intelligent Policy Inquiry & Self-Service",
    description: "Achieve 90% self-service rate with instant information access",
    metrics: [
      { icon: RiCheckboxCircleLine, text: "90% Self-service rate" },
      { icon: RiTimeLine, text: "Instant Information access" }
    ]
  },
  {
    number: 3,
    title: "Automated Renewal Reminders & Processing",
    description: "Reduce lapse rate by 50% and cut renewal processing cost by 70%",
    metrics: [
      { icon: RiBarChartLine, text: "50% Reduction in lapse rate" },
      { icon: RiMoneyDollarCircleLine, text: "$12M Annual revenue retention" }
    ]
  },
  {
    number: 4,
    title: "Intelligent Claims Fraud Investigation",
    description: "Reduce investigation time by 75% with 50% reduction in false positives",
    metrics: [
      { icon: RiTimeLine, text: "75% Reduction in investigation time" },
      { icon: RiBarChartLine, text: "50% Reduction in false positives" }
    ]
  },
  {
    number: 5,
    title: "Customer Retention & Satisfaction Analytics",
    description: "Reduce churn rate by 40% with 6-month advance warning",
    metrics: [
      { icon: RiBarChartLine, text: "40% Reduction in churn rate" },
      { icon: RiMoneyDollarCircleLine, text: "$8M Annual revenue retention" }
    ]
  }
];

export default function CustomerServicePage() {
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
              Customer Service
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
              Deliver exceptional customer service with AI-powered support, self-service capabilities, and proactive communication.
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
                href={`/use-cases/customer-service/case-${solution.number}`}
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
                href={`/use-cases/customer-service/case-${solutions[3].number}`}
              />
            </div>
            <div className="md:col-start-2">
              <DetailCard
                number={solutions[4].number}
                title={solutions[4].title}
                description={solutions[4].description}
                metrics={solutions[4].metrics}
                href={`/use-cases/customer-service/case-${solutions[4].number}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

