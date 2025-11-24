"use client";

import { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { RiBankLine, RiShieldLine, RiShoppingCartLine, RiTeamLine } from "react-icons/ri";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/tabs";
import BankingFinanceSection from "@/components/industry-sections/banking-finance";
import RetailSection from "@/components/industry-sections/retail";
import ConsultingSection from "@/components/industry-sections/consulting";
import ManufacturingSection from "@/components/industry-sections/manufacturing";
import InsuranceSection from "@/components/industry-sections/insurance";

interface IndustryTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType;
}

// Custom Manufacturing Icon Component
const ManufacturingIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
    <path d="M2 13.5v5.5l5 3" />
    <path d="M7 16.545l5 -3.03" />
    <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
    <path d="M12 19l5 3" />
    <path d="M17 16.5l5 -3" />
    <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
    <path d="M7 5.03v5.455" />
    <path d="M12 8l5 -3" />
  </svg>
);

const industries: IndustryTab[] = [
  { id: "banking", label: "Banking & Finance", icon: RiBankLine, component: BankingFinanceSection },
  { id: "insurance", label: "Insurance", icon: RiShieldLine, component: InsuranceSection },
  { id: "retail", label: "Retail", icon: RiShoppingCartLine, component: RetailSection },
  { id: "consulting", label: "Consulting", icon: RiTeamLine, component: ConsultingSection },
  { id: "manufacturing", label: "Manufacturing", icon: ManufacturingIcon, component: ManufacturingSection },
];

function UseCasesContent() {
  const searchParams = useSearchParams();
  const industryParam = searchParams.get("industry");
  const defaultTab = industryParam && industries.find(i => i.id === industryParam) ? industryParam : "banking";
  const tabsSectionRef = useRef<HTMLDivElement>(null);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    // Scroll to tabs section if industry parameter is present and we haven't scrolled yet
    if (industryParam && tabsSectionRef.current && !hasScrolledRef.current) {
      hasScrolledRef.current = true;
      setTimeout(() => {
        tabsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [industryParam]);

  return (
    <main>
      {/* Hero Section with Background Image */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24 pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/use-case-hero.png"
            alt="Use Cases Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-[#FBFAF8]/60"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 w-full mx-auto max-w-5xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="mb-8 text-5xl font-bold leading-tight text-gray-900 md:text-7xl lg:text-6xl" style={{ fontFamily: "var(--font-sora)" }}>
              Helium Across Industries
            </h1>
            <h2 className="max-w-4xl mx-auto text-2xl leading-relaxed text-gray-700 md:text-3xl lg:text-4xl font-medium" style={{ fontFamily: "var(--font-manrope)" }}>
              Discover how leading organizations use Helium to transform operations, reduce costs, and accelerate growth across every department.
            </h2>
          </div>
        </div>
      </section>
      
      {/* Middle Text Section */}
      <section className="py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed font-normal" style={{ fontFamily: "var(--font-sora)" }}>
            Helium brings all core services together in a single powerful platform — explore the use cases below.
          </p>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-10" ref={tabsSectionRef}>
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          {/* Centered Header */}
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl mb-6" style={{ fontFamily: "var(--font-sora)" }}>
              AI Solutions for Your Industry:
            </h3>
            
            {/* Industry Selector Tabs */}
            <div className="flex justify-center max-lg:justify-start max-lg:overflow-x-auto max-lg:scrollbar-hide max-lg:-mx-4 max-lg:px-4">
              <Tabs defaultValue={defaultTab} className="w-auto max-lg:w-full">
              <TabsList 
                className="
                  overflow-hidden lg:overflow-hidden max-lg:overflow-x-auto max-lg:scrollbar-hide 
                  inline-flex w-auto max-lg:w-full rounded-4xl 
                  h-12 max-md:h-11 lg:h-14 
                  p-1 max-md:p-1 lg:p-1.5 
                  gap-1 max-md:gap-1 lg:gap-1.5 
                  border border-gray-300
                  bg-white backdrop-blur-[20px] shadow-sm
                "
              >
                {industries.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <TabsTrigger
                      key={industry.id}
                      value={industry.id}
                      className="
                        relative flex items-center justify-center 
                        gap-0 max-md:gap-0 md:gap-2 lg:gap-2.5 
                        rounded-4xl 
                        px-3 max-md:px-3 md:px-4 lg:px-5 
                        py-2 max-md:py-2 md:py-2 lg:py-2.5 
                        h-auto
                        text-sm md:text-sm lg:text-base 
                        font-medium transition-all duration-300 ease-out cursor-pointer whitespace-nowrap shrink-0
                        text-gray-600 hover:bg-gray-100 hover:text-gray-900
                        data-[state=active]:text-gray-900 data-[state=active]:bg-gray-200
                      "
                    >
                      <Icon className="h-5 w-5 max-md:h-5 max-md:w-5 md:h-4 md:w-4 lg:h-5 lg:w-5 shrink-0" />
                      <span className="hidden md:inline">{industry.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {industries.map((industry) => {
                const IndustryComponent = industry.component;
                return (
                  <TabsContent key={industry.id} value={industry.id}>
                    <IndustryComponent />
                  </TabsContent>
                );
              })}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function UseCasesPage() {
  return (
    <Suspense fallback={
      <main>
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24 pb-24">
          <div className="relative z-10 w-full mx-auto max-w-5xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="mb-8 text-5xl font-bold leading-tight text-gray-900 md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-sora)" }}>
                Helium Across Industries
              </h1>
            </div>
          </div>
        </section>
      </main>
    }>
      <UseCasesContent />
    </Suspense>
  );
}

