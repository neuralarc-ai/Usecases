import React from 'react'
import { RiFileTextLine, RiCheckLine } from 'react-icons/ri'

export default function FeaturesPage() {
  return (
    <main className="flex flex-col">
      {/* Top Section - White Background */}
      <section className="bg-white pt-16 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-center"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Every AI Capability Your Enterprise Needs
            </h1>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed text-center mx-auto"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Helium combines autonomous agents, web automation, data processing, content creation, software development, and workflow orchestration in one unified platform.
          </p>
        </div>
      </section>

      {/* Bottom Section - White Background with Intelligent Automation */}
      <div>
        <section className="bg-[#E0693D] pt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Main Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Intelligent Automation
            </h2>

            {/* Subheading */}
            <p 
              className="text-lg md:text-xl text-white text-center mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Automate complex workflows and processes with AI-powered intelligence.
            </p>

            {/* Three Feature Cards - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1 - Document Intelligence */}
              <div className="border border-white/40 rounded-2xl p-6 md:p-8 shadow-sm">
                {/* Icon */}
                <div className="w-14 h-14 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                  <RiFileTextLine className="text-white text-2xl" />
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold text-white mb-4 text-center"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Document Intelligence
                </h3>

                {/* Description */}
                <p 
                  className="text-white mb-6 leading-relaxed text-center"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Extract, classify, and process documents with industry-leading accuracy.
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      AI-powered OCR with 99.5% accuracy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Intelligent document classification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Data extraction from any format
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Automated validation and verification
                    </span>
                  </li>
                </ul>
              </div>

              {/* Card 2 - Workflow Automation */}
              <div className="border border-white/40 rounded-2xl p-6 md:p-8 shadow-sm">
                {/* Icon */}
                <div className="w-14 h-14 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white text-2xl w-6 h-6">
                    <path d="M6 21.5C4.067 21.5 2.5 19.933 2.5 18C2.5 16.067 4.067 14.5 6 14.5C7.5852 14.5 8.92427 15.5539 9.35481 16.9992L15 16.9994V15L17 14.9994V9.24339L14.757 6.99938H9V9.00003H3V3.00003H9V4.99939H14.757L18 1.75739L22.2426 6.00003L19 9.24139V14.9994L21 15V21H15V18.9994L9.35499 19.0003C8.92464 20.4459 7.58543 21.5 6 21.5ZM6 16.5C5.17157 16.5 4.5 17.1716 4.5 18C4.5 18.8285 5.17157 19.5 6 19.5C6.82843 19.5 7.5 18.8285 7.5 18C7.5 17.1716 6.82843 16.5 6 16.5ZM19 17H17V19H19V17ZM18 4.58581L16.5858 6.00003L18 7.41424L19.4142 6.00003L18 4.58581ZM7 5.00003H5V7.00003H7V5.00003Z"></path>
                  </svg>
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold text-white mb-4 text-center"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Workflow Automation
                </h3>

                {/* Description */}
                <p 
                  className="text-white mb-6 leading-relaxed text-center"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Design, deploy, and optimize complex workflows without coding.
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Visual workflow designer
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Pre-built industry templates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Conditional logic and branching
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Real-time monitoring and alerts
                    </span>
                  </li>
                </ul>
              </div>

              {/* Card 3 - Natural Language Processing */}
              <div className="border border-white/40 rounded-2xl p-6 md:p-8 shadow-sm">
                {/* Icon */}
                <div className="w-14 h-14 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white text-2xl w-6 h-6">
                    <path d="M19.5 4.7832V7.6709L22 9.11426V14.8867L19.499 16.3311L19.5 19.2178L14.5 22.1045L12 20.6611L9.5 22.1045L4.5 19.2178V16.3311L2 14.8877L2.00098 9.11328L4.5 7.66992V4.78418L9.5 1.89746L11.999 3.34082L14.501 1.89648L19.5 4.7832ZM13 5.07227V7H11V5.07324L9.5 4.20703L6.49902 5.93848V8.8252L4 10.2676V13.7334L6.5 15.1768V18.0635L9.5 19.7959L11 18.9287V17H13V18.9297L14.5 19.7959L17.5 18.0625V15.1768L20 13.7324V10.2695L17.499 8.8252L17.5 5.9375L14.501 4.20605L13 5.07227ZM14.2646 13.1602C14.3529 12.9473 14.6472 12.9473 14.7354 13.1602L14.8623 13.4648C15.0783 13.986 15.4807 14.4027 15.9873 14.6279L16.3457 14.7871C16.5511 14.8784 16.5511 15.1773 16.3457 15.2686L15.9658 15.4375C15.4721 15.6571 15.0761 16.0586 14.8564 16.5625L14.7334 16.8447C14.6432 17.0517 14.3569 17.0517 14.2666 16.8447L14.1436 16.5625C13.9239 16.0586 13.5279 15.6571 13.0342 15.4375L12.6543 15.2686C12.4489 15.1773 12.4489 14.8784 12.6543 14.7871L13.0127 14.6279C13.5193 14.4027 13.9217 13.986 14.1377 13.4648L14.2646 13.1602ZM9.58789 7.7793C9.74239 7.40671 10.2577 7.4067 10.4121 7.7793L10.6338 8.31445C11.0118 9.22695 11.7161 9.95624 12.6025 10.3506L13.2305 10.6289C13.5899 10.7887 13.5897 11.3117 13.2305 11.4717L12.5654 11.7676C11.7013 12.152 11.0086 12.8548 10.624 13.7373L10.4082 14.2324C10.2504 14.5948 9.74973 14.5948 9.5918 14.2324L9.37598 13.7373C8.99143 12.8548 8.29875 12.152 7.43457 11.7676L6.76953 11.4717C6.41033 11.3117 6.41022 10.7887 6.76953 10.6289L7.39746 10.3506C8.2839 9.95624 8.98832 9.22697 9.36621 8.31445L9.58789 7.7793Z"></path>
                  </svg>
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold text-white mb-4 text-center"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Natural Language Processing
                </h3>


                {/* Description */}
                <p 
                  className="text-white mb-6 leading-relaxed text-center"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Understand, analyze, and generate human language at scale.
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Sentiment analysis and emotion detection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Entity recognition and extraction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Multi-language support (100+ languages)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RiCheckLine className="text-white mt-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      Content generation and summarization
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* AIM Section - White Background */}
      <div>
        <section className="bg-[#A69CBE] pt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Title with Icon */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-10 h-10">
                  <path d="M15.1416 2.81836L13.1016 3.94824L12 3.31055L4.5 7.65234V7.6582L12 12V20.6895L19.5 16.3467V11.5L21.5 10.3291V17.5L12 23L2.5 17.5V6.5L12 1L15.1416 2.81836ZM18.5293 2.31934C18.7059 1.8935 19.2943 1.89349 19.4707 2.31934L19.7236 2.93066C20.1556 3.97346 20.9615 4.80618 21.9746 5.25684L22.6924 5.57617C23.1026 5.75901 23.1026 6.3562 22.6924 6.53906L21.9326 6.87695C20.9449 7.31624 20.1534 8.11944 19.7139 9.12793L19.4668 9.69336C19.2864 10.1075 18.7137 10.1075 18.5332 9.69336L18.2871 9.12793C17.8476 8.11929 17.0552 7.31628 16.0674 6.87695L15.3076 6.53906C14.8974 6.35622 14.8974 5.75899 15.3076 5.57617L16.0254 5.25684C17.0385 4.80618 17.8445 3.97348 18.2764 2.93066L18.5293 2.31934Z"></path>
                </svg>
              </div>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Adaptive Intelligence Memory (AIM)
              </h2>
          </div>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-white mb-8 text-center"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Your Business Brain
            </p>

            {/* Introductory Paragraphs */}
            <div className="mb-12 space-y-4">
              <p 
                className="text-base md:text-lg text-white leading-relaxed max-w-4xl text-center mx-auto"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                AIM is the master context model that transforms Helium from a generic AI tool into your business's intelligent <span className="whitespace-nowrap">partner.</span>
              </p>
              <p 
                className="text-base md:text-lg text-white leading-relaxed max-w-4xl text-center mx-auto"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                It's the most advanced and effective way to build custom rules, guardrails, and domain expertise.
              </p>
            </div>

            {/* Two-Column Feature Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Left Column - What You Can Upload */}
              <div className="text-center">
                <h3 
                  className="text-xl md:text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  What You Can Upload
                </h3>
                <ul className="space-y-3 list-disc list-inside pl-4 text-left">
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Documents, PDFs, and reports
                  </li>
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Images, diagrams, and visual assets
                  </li>
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Websites and web content
                  </li>
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Instructions, policies, and procedures
                  </li>
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Structured data and databases
                  </li>
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Knowledge bases and documentation
                  </li>
                </ul>
              </div>

              {/* Right Column - What AIM Enables */}
              <div className="text-center">
                <h3 
                  className="text-xl md:text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  What AIM Enables
                </h3>
                <ul className="space-y-3 list-disc list-inside pl-4 text-left">
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Context-aware responses based on your business data
                  </li>
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Automated compliance with your rules and policies
                  </li>
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Brand-consistent outputs across all content
                  </li>
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Domain-specific expertise without retraining
                  </li>
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Persistent memory across all interactions
                  </li>
                  <li className="text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                    Custom guardrails for security and accuracy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Orbit Section - White Background */}
      <div>
        <section className="bg-[#D0EF5E] pt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Title with Icon */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="flex items-center gap-4 text-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 w-12 h-12">
                    <path d="M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75 2.5 4.40279 4.40279 2.5 6.75 2.5ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5 4.40279 21.5 2.5 19.5972 2.5 17.25 2.5 14.9028 4.40279 13 6.75 13ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25 21.5 19.5972 19.5972 21.5 17.25 21.5 14.9028 21.5 13 19.5972 13 17.25V13ZM18.008 10.0695 17.746 10.6702C17.5543 11.1099 16.9457 11.1099 16.7539 10.6702L16.492 10.0695C16.0251 8.99837 15.184 8.14559 14.1345 7.67906L13.3273 7.32028C12.8909 7.12628 12.8909 6.49155 13.3273 6.29754L14.0893 5.95881C15.1658 5.48028 16.022 4.59594 16.4809 3.48847L16.7499 2.83932C16.9374 2.38689 17.5626 2.38689 17.75 2.83932L18.019 3.48847C18.478 4.59594 19.3342 5.48028 20.4107 5.95881L21.1726 6.29754C21.6091 6.49155 21.6091 7.12628 21.1726 7.32028L20.3656 7.67906C19.316 8.14559 18.475 8.99837 18.008 10.0695Z"></path>
                  </svg>
                </div>
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Orbit
                </h2>
              </div>
            </div>
            <div className="text-center mb-8">
              <p 
                className="text-lg md:text-xl text-gray-600 mt-2"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Your Published Apps Hub
              </p>
            </div>

            

            {/* Main Description */}
            <p 
              className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mb-12 text-center mx-auto"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Orbit is your centralized workspace for all AI-generated websites, dashboards, and applications. Pin, organize, and access everything Helium creates for you.
            </p>

            {/* Three Feature Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Block 1 - Pin & Organize */}
              <div className="text-center bg-white/30 rounded-2xl p-6">
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Pin & Organize
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Save important websites, dashboards, and apps for quick access
                </p>
              </div>

              {/* Block 2 - Share Seamlessly */}
              <div className="text-center bg-white/30 rounded-2xl p-6">
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Share Seamlessly
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Generate shareable links for team collaboration
            </p>
          </div>

              {/* Block 3 - Version History */}
              <div className="text-center bg-white/30 rounded-2xl p-6">
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Version History
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Track changes and revert to previous versions
                </p>
              </div>
            </div>
        </div>
        </section>
      </div>

      {/* Vault Section - White Background */}
      <div>
        <section className="bg-[#A6C8D5] pt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Title with Icon */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="flex items-center gap-4 text-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 w-10 h-10">
                    <path d="M15 3C15.5523 3 16 3.44772 16 4V6H20C20.5523 6 21 6.44772 21 7V19H23V21H1V19H3V7C3 6.44772 3.44772 6 4 6H8V4C8 3.44772 8.44772 3 9 3H15ZM8 8H5V19H8V8ZM14 8H10V19H14V8ZM19 8H16V19H19V8ZM14 5H10V6H14V5Z"></path>
                  </svg>
                </div>
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Vault
                </h2>
              </div>
            </div>
            <div className="text-center mb-8">
              <p 
                className="text-lg md:text-xl text-gray-600 mt-2 mb-8"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Unified File Management
              </p>
            </div>

            

            {/* Main Description */}
            <p 
              className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mb-12 text-center mx-auto"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Vault provides a unified view of all files created by Helium over time — documents, reports, presentations, images, videos, and more. Never lose track of your AI-generated assets.
            </p>

            {/* Four Feature Boxes - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Top-Left Box - Intelligent Search */}
              <div className="text-center bg-white/30 rounded-2xl p-6">
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Intelligent Search
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Find any file instantly with semantic search across all your content.
                </p>
              </div>

              {/* Top-Right Box - Smart Filtering */}
              <div className="text-center bg-white/30 rounded-2xl p-6">
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Smart Filtering
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Filter by type, date, project, or custom tags.
                </p>
              </div>

              {/* Bottom-Left Box - Auto-Organization */}
              <div className="text-center bg-white/30 rounded-2xl p-6">
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Auto-Organization
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Files are automatically categorized and organized.
                </p>
              </div>

              {/* Bottom-Right Box - Bulk Operations */}
              <div className="text-center bg-white/30 rounded-2xl p-6">
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Bulk Operations
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Download, share, or archive multiple files at once.
                </p>
              </div>
        </div>
      </div>
    </section>
      </div>

      {/* Integrations Section - White Background */}
      <div>
        <section className="bg-[#27584F] pt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Title with Icon */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="flex items-center gap-4 text-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-10 h-10">
                    <path d="M4 15V8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5V15.5C13 16.8807 14.1193 18 15.5 18C16.8807 18 18 16.8807 18 15.5V8.82929C16.8348 8.41746 16 7.30622 16 6C16 4.34315 17.3431 3 19 3C20.6569 3 22 4.34315 22 6C22 7.30622 21.1652 8.41746 20 8.82929V15.5C20 17.9853 17.9853 20 15.5 20C13.0147 20 11 17.9853 11 15.5V8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5V15H9L5 20L1 15H4ZM19 7C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5C18.4477 5 18 5.44772 18 6C18 6.55228 18.4477 7 19 7Z"></path>
                  </svg>
                </div>
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  200+ Integrations
                </h2>
              </div>
            </div>
            <div className="text-center mb-8">
              <p 
                className="text-lg md:text-xl text-white mt-2"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Connect Your Entire Tech Stack
              </p>
            </div>

            {/* Main Description */}
            <p 
              className="text-base md:text-lg text-white leading-relaxed max-w-4xl mb-12 text-center mx-auto"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Helium integrates with your entire tech stack in just a few clicks. Connect CRM, ERP, email, social media, databases, and more — all working together under Helium's intelligent orchestration.
            </p>

            {/* Six Integration Category Boxes - 2x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Box 1 - CRM & Sales */}
              <div className="bg-white/30 rounded-lg p-6">
                <h3 
                  className="text-lg md:text-xl font-bold text-white mb-4 text-center"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  CRM & Sales
                </h3>
                <ul className="space-y-2 text-center">
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Salesforce</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>HubSpot</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Pipedrive</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Zoho CRM</li>
                </ul>
              </div>

              {/* Box 2 - Email & Communication */}
              <div className="bg-white/30 rounded-lg p-6">
                <h3 
                  className="text-lg md:text-xl font-bold text-white mb-4 text-center"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Email & Communication
                </h3>
                <ul className="space-y-2 text-center">
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Gmail</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Outlook</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Slack</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Microsoft Teams</li>
                </ul>
              </div>

              {/* Box 3 - Databases & Storage */}
              <div className="bg-white/30 rounded-lg p-6">
                <h3 
                  className="text-lg md:text-xl font-bold text-white mb-4 text-center"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Databases & Storage
                </h3>
                <ul className="space-y-2 text-center">
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>PostgreSQL</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>MySQL</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>MongoDB</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Supabase</li>
                </ul>
              </div>

              {/* Box 4 - Project Management */}
              <div className="bg-white/30 rounded-lg p-6">
                <h3 
                  className="text-lg md:text-xl font-bold text-white mb-4 text-center"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Project Management
                </h3>
                <ul className="space-y-2 text-center">
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Asana</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Trello</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Jira</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Monday.com</li>
                </ul>
              </div>

              {/* Box 5 - Documentation */}
              <div className="bg-white/30 rounded-lg p-6">
                <h3 
                  className="text-lg md:text-xl font-bold text-white mb-4 text-center"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Documentation
                </h3>
                <ul className="space-y-2 text-center">
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Notion</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Confluence</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Google Docs</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Dropbox</li>
                </ul>
              </div>

              {/* Box 6 - Social Media */}
              <div className="bg-white/30 rounded-lg p-6">
                <h3 
                  className="text-lg md:text-xl font-bold text-white mb-4 text-center"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Social Media
                </h3>
                <ul className="space-y-2 text-center">
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>LinkedIn</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Twitter</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Facebook</li>
                  <li className="text-white text-sm" style={{ fontFamily: "var(--font-manrope)" }}>Instagram</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}