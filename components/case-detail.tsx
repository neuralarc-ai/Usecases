"use client";

import Link from "next/link";
import Image from "next/image";
import { RiArrowLeftLine } from "react-icons/ri";
import ProcessFlowDiagram from "@/components/process-flow-diagram";

interface Metric {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

interface BusinessChallenge {
  title: string;
  description: string;
}

interface HeliumSolution {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface CaseDetailProps {
  title: string;
  backHref: string;
  backLabel: string;
  businessChallenge: BusinessChallenge;
  heliumSolution: HeliumSolution;
  metrics: Metric[];
  imageUrl?: string;
  imageAlt?: string;
  processFlow?: {
    title?: string;
    steps: ProcessStep[];
  };
}

export default function CaseDetail({
  title,
  backHref,
  backLabel,
  businessChallenge,
  heliumSolution,
  metrics,
  imageUrl,
  imageAlt = "Case illustration",
  processFlow
}: CaseDetailProps) {
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
            {backLabel}
          </Link>
          
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-sora)" }}>
              {title}
            </h1>
          </div>

          {/* Business Challenge Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              {businessChallenge.title}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
              {businessChallenge.description}
            </p>
          </div>

          {/* Helium Solution Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
              {heliumSolution.title}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
              {heliumSolution.description}
            </p>
          </div>

          {/* Metrics Section */}
          {metrics.length > 0 && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2" style={{ fontFamily: "var(--font-sora)" }}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "var(--font-manrope)" }}>
                        {metric.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Image Section */}
          {imageUrl && (
            <div className="mt-12">
              <div className="relative w-full h-96 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Flow Section */}
      {processFlow && processFlow.steps.length > 0 && (
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20">
          <ProcessFlowDiagram 
            title={processFlow.title || "Process Flow"}
            steps={processFlow.steps}
          />
        </section>
      )}
    </main>
  );
}

