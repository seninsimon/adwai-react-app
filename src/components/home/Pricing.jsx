import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function PlanCard({ plan }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-[#D1D5DB] p-6 flex flex-col h-full hover:shadow-md transition-all">
      {/* Title */}
      <h2 className="text-xl font-semibold text-[#1F2937] text-center">
        {plan.name}
      </h2>

      {/* Short Description */}
      <p className="text-sm text-gray-600 mt-4 text-center">
        {plan.short}
      </p>

      {/* CTA */}
      <div className="mt-6">
        <a
          href="http://journeys.adwai.com/login"
          className="block text-center bg-[#1F2937] text-white py-2.5 rounded-lg text-sm hover:opacity-90 transition"
        >
          Get Started
        </a>
      </div>

      {/* Features */}
      <div className="mt-6 space-y-3">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <FaCheck className="text-green-500 mt-1" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Long Description */}
      <div className="mt-6 text-sm text-gray-600">
        <p className={expanded ? "" : "line-clamp-1 "}>
          {plan.long}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-[#1F2937] font-medium hover:underline text-sm"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  const plans = [
    {
      name: "Freemium",
      short:
        "Perfect for journey participants getting started. Access a free account to manage tasks where you can enable Assists for guided, intelligent care workflows using built-in tokens.",
      long: `The Freemium Plan is designed for individuals seeking care journey support without any upfront cost. Create your free account and immediately begin using tools included. Users can enable Journey Assists—intelligent tools that help guide you through care-related workflows, decisions, and next steps.

With included tokens, you can activate assisted experiences that simplify navigating care journeys, whether you're organizing appointments, tracking needs, or exploring support options. This plan is ideal for those who want to experience the platform’s core capabilities before upgrading to more advanced features.`,
      features: [
        "Free account access",
        "Journey Assists enabled",
        "Built-in tokens included",
        "Task & care workflow support"
      ]
    },
    {
      name: "Standard",
      short:
        "Empower your journey participants with scheduling, care plans, and shared Care Assists—all powered by intelligent workflow tools and included tokens to help assist your clients",
      long: `The Standard Plan is tailored for journey participants who are also independent practitioners who want to streamline operations and enhance care. This plan enables you to set your availability, manage personalized care plans, and access shared Practitioner Care Tools.

With included tokens, you can activate both Journey Assists and Care Assists—intelligent workflow companions designed to support everything from care coordination to service delivery. Features such as Find Care Assist and Book Care Assist make it easier to connect with clients and manage engagements efficiently.

This plan is ideal for professionals looking to scale their services while maintaining high-quality, personalized care.`,
      features: [
        "Scheduling & availability management",
        "Personalized care plans",
        "Journey & Care Assists",
        "Find & Book Care Assist tools"
      ]
    },
    {
      name: "Custom Plan",
      short:
        "Custom-built for multi-practitioner organizations. Deploy private, encrypted workflow systems with dedicated delivery pods and your own trainable intelligent assists.",
      long: `The Custom Plan is designed for care organizations and practices with multiple practitioners that require scalable, secure, and customizable infrastructure. Through dedicated delivery pods, your organization gains access to private, fully encrypted environments powered by state-of-the-art intelligent workflow engines.

This plan allows you to create, train, and manage your own proprietary assists—tailored specifically to your workflows, standards, and operational needs. You maintain full control over how assists are deployed, refined, and integrated across your teams.

Ideal for organizations seeking enterprise-grade performance, security, and flexibility, the Custom Plan transforms how care is delivered at scale—while maintaining privacy, control, and efficiency.`,
      features: [
        "Multi-practitioner support",
        "Private encrypted systems",
        "Custom trainable assists",
        "Dedicated delivery infrastructure"
      ]
    }
  ];

  return (
    <section id="price" className="py-3">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold text-[#1F2937]">
            Pricing
          </h1>
          <p className="text-sm text-gray-600">
            Simple, flexible plans designed to grow with your care journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}