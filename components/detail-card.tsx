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
      <div className="flex-1">
        <h5 className="text-xl font-bold text-gray-900 mb-2 text-left font-sora">
          {title}
        </h5>
        <p className="text-base text-gray-600 leading-relaxed mb-4 text-left">
          {description}
        </p>
        
        {/* Horizontal Divider */}
        <hr className="border-gray-200 mb-4 w-full" />
        
        {/* Metrics Pills */}
        <div className="flex flex-col gap-2 mb-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index} 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit bg-[#27584F]"
              >
                <Icon className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="text-xs text-white font-medium">
                  {metric.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* View Details - Right Bottom */}
      <div className="mt-auto flex justify-end">
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors text-sm font-medium underline"
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

