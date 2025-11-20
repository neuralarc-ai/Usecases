import AIStackGrid from "@/components/ai-stack-grid";
import FeatureComparisonTable from "@/components/feature-comparison-table";
import HeliumReplacementCards from "@/components/helium-replacement-cards";

export default function WhyHelium() {
  return (
    <main className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 
            className="mb-4 text-5xl font-bold text-black md:text-7xl lg:text-6xl"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            What Your AI Stack Probably Looks Like
          </h1>
        </div>
        <AIStackGrid />
        
        {/* Feature Comparison Section */}
        <div className="mt-24">
          <div className="mb-8 text-center">
            <h2
              className="mb-4 text-4xl font-bold text-black md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Feature Comparison
            </h2>
            <p
              className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              See how Helium compares to managing multiple tools. One unified platform that delivers everything you need, without the complexity.
            </p>
          </div>
          <FeatureComparisonTable />
        </div>

        {/* How Helium Replaces Leading AI Tools Section */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 text-4xl font-bold text-black md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              How Helium Replaces Leading AI Tools
            </h2>
            <p
              className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Discover how Helium consolidates multiple specialized tools into one powerful, unified platform that delivers superior results.
            </p>
          </div>
          <HeliumReplacementCards />
        </div>
      </div>
    </main>
  );
}

