import {
  Building,
  Globe,
  BarChart3,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const CompanyOverviewSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-base font-semibold text-blue-300 tracking-wide uppercase">
              Company Intelligence
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Company Overview
            </p>
            <p className="mt-4 text-xl text-blue-200">
              Unlock company details with business description, exchange,
              Country, Region, Industry, Sector and more.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Building,
                  title: "Comprehensive Profiles",
                  description:
                    "Access detailed profiles for over 60,000 public companies worldwide.",
                },
                {
                  icon: Globe,
                  title: "Global Coverage",
                  description:
                    "Data from 120+ countries and 70+ exchanges for truly global insights.",
                },
                {
                  icon: BarChart3,
                  title: "Industry Classification",
                  description:
                    "Precise industry and sector classifications for accurate peer comparisons.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-base text-blue-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300"
              >
                Explore company data
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Dashboard visualization */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
              {/* Dashboard header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">
                      Company Overview
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                {/* Company header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">T</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      TechVision Inc.
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">NASDAQ: TVSI</span>
                      <span className="flex items-center text-green-500">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +2.4%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Industry</p>
                    <p className="font-medium">Software & Technology</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Sector</p>
                    <p className="font-medium">Information Technology</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Country</p>
                    <p className="font-medium">United States</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Exchange</p>
                    <p className="font-medium">NASDAQ</p>
                  </div>
                </div>

                {/* Company description */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-500 mb-2">
                    Business Description
                  </p>
                  <p className="text-sm text-gray-700">
                    TechVision Inc. is a leading provider of cloud-based
                    software solutions for enterprise customers. The company
                    specializes in AI-powered analytics, cybersecurity, and
                    digital transformation services across multiple industries
                    including finance, healthcare, and manufacturing.
                  </p>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-blue-500 mb-1">Market Cap</p>
                    <p className="font-bold">$24.7B</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-blue-500 mb-1">Employees</p>
                    <p className="font-bold">12,450</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-blue-500 mb-1">Founded</p>
                    <p className="font-bold">2005</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverviewSection;
