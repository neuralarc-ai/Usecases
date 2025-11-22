"use client";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessFlowDiagramProps {
  title?: string;
  steps: ProcessStep[];
}

export default function ProcessFlowDiagram({ 
  title = "Process Flow",
  steps 
}: ProcessFlowDiagramProps) {
  // Determine how many columns based on number of steps
  const getGridCols = () => {
    if (steps.length <= 4) return "grid-cols-4";
    if (steps.length <= 5) return "grid-cols-5";
    if (steps.length <= 6) return "grid-cols-6";
    return "grid-cols-7";
  };

  return (
    <div className="py-14 max-w-7xl mx-auto px-4">
      <h2 className="text-center text-3xl font-semibold mb-12 text-gray-900" style={{ fontFamily: "var(--font-sora)" }}>
        {title}
      </h2>

      {/* Desktop Layout - Horizontal Flow with Cards */}
      <div className="hidden lg:block">
        <div className="flex items-center gap-4 justify-center flex-wrap">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Card */}
              <div className="min-w-[260px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl font-bold text-gray-900/10 mb-3" style={{ fontFamily: "var(--font-sora)" }}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900" style={{ fontFamily: "var(--font-sora)" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 mx-2">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tablet Layout - 2-3 Columns with Wrapping */}
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl font-bold text-gray-900/10 mb-3" style={{ fontFamily: "var(--font-sora)" }}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900" style={{ fontFamily: "var(--font-sora)" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow - Right side for even indices */}
              {index < steps.length - 1 && index % 2 === 0 && (
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}

              {/* Connecting Arrow - Bottom for last item in row (odd indices) */}
              {index < steps.length - 1 && index % 2 === 1 && index !== steps.length - 1 && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Vertical Stack */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-bold text-gray-900/10 mb-3" style={{ fontFamily: "var(--font-sora)" }}>
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900" style={{ fontFamily: "var(--font-sora)" }}>
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                {step.description}
              </p>
            </div>

            {/* Connecting Arrow - Bottom */}
            {index < steps.length - 1 && (
              <div className="flex justify-center mt-4">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
