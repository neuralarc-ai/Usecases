import React from 'react'
import { RiCheckLine, RiShoppingCartLine, RiMailLine, RiDatabaseLine, RiTaskLine, RiBookLine, RiShareLine } from 'react-icons/ri'

export default function FeaturesPage() {
  return (
    <main className="flex flex-col">
      {/* Top Section - White Background */}
      <section className="bg-white  pt-16 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto min-h-[500px] flex flex-col items-center justify-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-center font-sora"
            >
              Every AI Capability Your Enterprise Needs
            </h1>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed text-center mx-auto"
          >
            Helium combines autonomous agents, web automation, data processing, content creation, software development, and workflow orchestration in one unified platform.
          </p>
        </div>
      </section>

      {/* Bottom Section - White Background with Intelligent Automation */}
      <div>
        <section className="bg-[#E0693D] pt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Badge/Tag */}
            <div className="flex justify-center mb-6">
              <span className="bg-[#C85A2F] text-white text-sm font-semibold px-4 py-2 rounded-full">
                AUTONOMOUS AGENTS
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight font-sora"
            >
              AI That Works While You Sleep
            </h2>

            {/* Subheading */}
            <p 
              className="text-lg md:text-xl text-white text-center mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Deploy intelligent agents that handle complex workflows autonomously, from customer inquiries to data analysis.
            </p>

            {/* Four Feature Boxes - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Box 1 - Multi-Step Reasoning */}
              <div className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Multi-Step Reasoning
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Agents break down complex tasks into logical steps and execute them systematically. They understand context, make decisions, and adapt to changing conditions without human intervention.
                </p>
              </div>

              {/* Box 2 - Universal Integration */}
              <div className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Universal Integration
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Connect to any API, database, or system in your tech stack. Helium agents work seamlessly with your existing tools, eliminating data silos and manual data transfer.
                </p>
              </div>

              {/* Box 3 - 24/7 Operation */}
              <div className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  24/7 Operation
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Agents work continuously across time zones, handling tasks while your team sleeps. Wake up to completed work, processed data, and actionable insights every morning.
                </p>
              </div>

              {/* Box 4 - Enterprise Security */}
              <div className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Enterprise Security
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  SOC 2 compliant with role-based access control, encryption at rest and in transit, and comprehensive audit logs. Your data stays secure and compliant.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* AIM Section - White Background */}
      <div>
        <section className="bg-[#A69CBE] pt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Badge/Tag */}
            <div className="flex justify-center mb-6">
              <span className="bg-[#8B7FA8] text-white text-sm font-semibold px-4 py-2 rounded-full">
                DATA PROCESSING
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight font-sora"
            >
              Turn Data Into Strategic Intelligence
            </h2>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-white text-center mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Process millions of records with AI-powered insights that drive business decisions.
            </p>

            {/* Four Feature Boxes - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Box 1 - Data Cleaning & Transformation */}
              <div className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Data Cleaning & Transformation
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Automatically clean messy data, handle missing values, standardize formats, and transform datasets into analysis-ready structures. What takes days manually happens in minutes.
                </p>
              </div>

              {/* Box 2 - Advanced Analytics */}
              <div className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Advanced Analytics
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Run complex statistical analyses, build predictive models, and generate insights using machine learning. Helium makes advanced analytics accessible to every team member.
                </p>
              </div>

              {/* Box 3 - Data Visualization */}
              <div className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Data Visualization
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Create interactive dashboards, charts, and reports that update in real-time. Share insights across your organization with beautiful, actionable visualizations.
                </p>
              </div>

              {/* Box 4 - Data Integration */}
              <div className="bg-white/10 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Data Integration
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Connect to any data source - databases, APIs, files, or web services. Helium unifies data from across your enterprise into a single source of truth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Orbit Section - White Background */}
      <div>
        <section className="bg-[#D0EF5E] pt-16 pb-20  px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Badge/Tag */}
            <div className="flex justify-center mb-6">
              <span className="bg-[#B8C98A] text-gray-800 text-sm font-semibold px-4 py-2 rounded-full">
                CONTENT CREATION
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-6 leading-tight font-sora"
            >
              Generate Content That Converts
            </h2>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-gray-800 text-center mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Create marketing materials, reports, presentations, and documentation at scale while maintaining your brand voice.
            </p>

            {/* Four Feature Boxes - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Box 1 - Document Generation */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Document Generation
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Generate reports, proposals, contracts, and documentation automatically. Helium maintains consistency, accuracy, and your brand guidelines across all content.
                </p>
              </div>

              {/* Box 2 - Marketing Copy */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Marketing Copy
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Create compelling ad copy, email campaigns, social media posts, and landing pages that drive conversions. AI-optimized for engagement and performance.
                </p>
              </div>

              {/* Box 3 - Presentation Builder */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Presentation Builder
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Build professional presentations with AI-generated content, data visualizations, and design templates. Export to PowerPoint or share as interactive web presentations.
                </p>
              </div>

              {/* Box 4 - Visual Content */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Visual Content
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Generate images, infographics, and visual assets that align with your brand. Create custom visuals for any use case without design expertise.
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
            {/* Badge/Tag */}
            <div className="flex justify-center mb-6">
              <span className="bg-[#FFFFFF]/30  text-black text-sm font-semibold px-4 py-2 rounded-full">
                WEB AUTOMATION
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-6 leading-tight font-sora"
            >
              Automate Any Web-Based Task
            </h2>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-gray-800 text-center mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              From data extraction to form filling, Helium handles web automation at enterprise scale.
            </p>

            {/* Four Feature Boxes - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Box 1 - Intelligent Web Scraping */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Intelligent Web Scraping
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Extract structured data from any website, even those with complex JavaScript rendering. Helium handles pagination, infinite scroll, and dynamic content automatically.
                </p>
              </div>

              {/* Box 2 - Browser Automation */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Browser Automation
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Automate clicks, form submissions, file uploads, and complex user interactions. Helium can navigate any web application just like a human user would.
                </p>
              </div>

              {/* Box 3 - Site Monitoring */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Site Monitoring
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Monitor competitor websites, track price changes, detect content updates, and receive instant alerts when important changes occur across thousands of sites.
                </p>
              </div>

              {/* Box 4 - Scheduled Automation */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Scheduled Automation
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Run web automation tasks on schedules or triggers. Daily reports, weekly data pulls, or real-time monitoring - Helium handles it all automatically.
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
            {/* Badge/Tag */}
            <div className="flex justify-center mb-6">
              <span className="bg-[#1F4A3F] text-white text-sm font-semibold px-4 py-2 rounded-full">
                SOFTWARE DEVELOPMENT
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight font-sora"
            >
              Build Applications 10x Faster
            </h2>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-white text-center mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Accelerate development from concept to production with AI-powered coding assistance.
            </p>

            {/* Four Feature Boxes - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Box 1 - Code Generation */}
              <div className="bg-white/20 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Code Generation
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Generate production-ready code in any language. From APIs to full applications, Helium writes clean, maintainable code that follows best practices.
                </p>
              </div>

              {/* Box 2 - Debugging & Testing */}
              <div className="bg-white/20 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Debugging & Testing
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Identify bugs, write test cases, and ensure code quality automatically. Helium catches issues before they reach production.
                </p>
              </div>

              {/* Box 3 - Version Control Integration */}
              <div className="bg-white/20 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Version Control Integration
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Seamlessly integrate with GitHub, GitLab, and Bitbucket. Helium manages branches, commits, and pull requests as part of your development workflow.
                </p>
              </div>

              {/* Box 4 - Deployment Automation */}
              <div className="bg-white/20 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Deployment Automation
                </h3>
                <p 
                  className="text-white text-base leading-relaxed"
                >
                  Deploy applications to any cloud platform with one command. Helium handles CI/CD pipelines, environment configuration, and rollback strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Workflow Orchestration Section */}
      <div>
        <section className="bg-[#E7B31B] pt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Badge/Tag */}
            <div className="flex justify-center mb-6">
              <span className="bg-white/30 text-black text-sm font-semibold px-4 py-2 rounded-full">
                WORKFLOW ORCHESTRATION
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-6 leading-tight font-sora"
            >
              Connect Your Entire Tech Stack
            </h2>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-gray-800 text-center mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Orchestrate complex workflows across departments and systems with seamless automation.
            </p>

            {/* Four Feature Boxes - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Box 1 - Universal Connectors */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Universal Connectors
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Connect to 1000+ applications and services. From CRMs to databases, email to project management, Helium integrates with your entire ecosystem.
                </p>
              </div>

              {/* Box 2 - Conditional Logic */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Conditional Logic
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Build sophisticated workflows with if-then logic, loops, and error handling. Helium adapts to different scenarios and handles exceptions intelligently.
                </p>
              </div>

              {/* Box 3 - Scheduled Workflows */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Scheduled Workflows
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Run workflows on schedules, triggers, or events. Daily reports, weekly summaries, or real-time alerts - Helium executes workflows exactly when needed.
                </p>
              </div>

              {/* Box 4 - Real-Time Monitoring */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 font-sora"
                >
                  Real-Time Monitoring
                </h3>
                <p 
                  className="text-gray-800 text-base leading-relaxed"
                >
                  Track workflow execution in real-time with detailed logs and performance metrics. Identify bottlenecks and optimize processes continuously.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}