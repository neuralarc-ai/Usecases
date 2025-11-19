import Link from "next/link";

interface Metric {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface DetailCardProps {
  number: number;
  title: string;
  description: string;
  metrics: Metric[];
  href?: string;
}

export default function DetailCard({ number, title, description, metrics, href = "#" }: DetailCardProps) {
  return (
    <div className="h-full flex flex-col bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-lg">{number}</span>
        </div>
        <div className="flex-1">
          <h5 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-sora)" }}>
            {title}
          </h5>
          <p className="text-base text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            {description}
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4 flex-1">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div 
              key={index} 
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200"
            >
              <Icon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="text-xs text-blue-700 font-medium" style={{ fontFamily: "var(--font-manrope)" }}>
                {metric.text}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="mt-auto">
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          View Details
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

