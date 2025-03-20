"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Input Your Data",
    description:
      "Upload your data file or start fresh with our spreadsheet editor",
    image: "/create-data.gif",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Choose Your Chart",
    description:
      "Select from various chart types that best tell your data story",
    image: "/choose-chart.gif",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Customize Design",
    description: "Style your chart with colors, fonts, and animations",
    image: "/style-chart.gif",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    title: "Share & Export",
    description: "Download your chart or share it directly with your team",
    image: "/download-chart.gif",
    gradient: "from-orange-500 to-amber-500",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-12 sm:py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Create beautiful charts in four simple steps
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 bg-gradient-to-r ${
                  step.gradient
                } text-white shadow-lg transform hover:scale-105 ${
                  activeStep === idx
                    ? "ring-4 ring-purple-300 ring-opacity-50"
                    : ""
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>

          <div className="w-full max-w-4xl">
            <div className="group relative p-8 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-1">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${steps[activeStep].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10 space-y-6">
                <div className="relative h-64 sm:h-96 mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
