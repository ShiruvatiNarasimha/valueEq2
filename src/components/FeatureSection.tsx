import React from 'react';
import { BarChart3, Brain, Calculator, DollarSign, Globe, LineChart, Lock, PieChart, Shield } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Valuation',
    description:
      'Our advanced AI algorithms analyze thousands of data points to provide accurate and real-time valuation of assets.',
    icon: Calculator,
  },
  {
    name: 'Market Intelligence',
    description:
      'Get comprehensive market insights and trends analysis to make informed investment decisions.',
    icon: BarChart3,
  },
  {
    name: 'Predictive Analytics',
    description:
      'Leverage machine learning models to forecast market movements and identify potential opportunities.',
    icon: LineChart,
  },
  {
    name: 'Portfolio Optimization',
    description:
      'Automatically optimize your investment portfolio based on your risk tolerance and financial goals.',
    icon: PieChart,
  },
  {
    name: 'Global Market Coverage',
    description:
      'Access financial data and insights from markets around the world, all in one platform.',
    icon: Globe,
  },
  {
    name: 'Advanced Security',
    description:
      'Your financial data is protected with enterprise-grade security and encryption protocols.',
    icon: Shield,
  },
];

const FeatureSection = () => {
  return (
    <div id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Intelligent Financial Analysis
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform combines cutting-edge AI technology with comprehensive financial data to deliver powerful insights.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-16 w-16 rounded-xl bg-blue-500 text-white shadow-lg transform -translate-y-1/2">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="ml-20 text-xl leading-6 font-bold text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-20 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;