import React from "react";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const FinancialsSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-indigo-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Dashboard visualization */}
          <div className="relative mb-12 lg:mb-0">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
              {/* Dashboard header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">
                      Financial Statements
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                      Annual
                    </div>
                    <div className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      Quarterly
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-6">
                  <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-600 font-medium">
                    Income Statement
                  </button>
                  <button className="px-4 py-2 text-gray-500 font-medium">
                    Balance Sheet
                  </button>
                  <button className="px-4 py-2 text-gray-500 font-medium">
                    Cash Flow
                  </button>
                </div>

                {/* Financial data table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Metric
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          2022
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          2023
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          2024
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          YoY %
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        {
                          metric: "Revenue",
                          "2022": "4.2B",
                          "2023": "5.1B",
                          "2024": "6.3B",
                          yoy: "+23.5%",
                          trend: "up",
                        },
                        {
                          metric: "Gross Profit",
                          "2022": "2.8B",
                          "2023": "3.4B",
                          "2024": "4.2B",
                          yoy: "+23.5%",
                          trend: "up",
                        },
                        {
                          metric: "Operating Income",
                          "2022": "1.1B",
                          "2023": "1.4B",
                          "2024": "1.8B",
                          yoy: "+28.6%",
                          trend: "up",
                        },
                        {
                          metric: "Net Income",
                          "2022": "0.9B",
                          "2023": "1.2B",
                          "2024": "1.5B",
                          yoy: "+25.0%",
                          trend: "up",
                        },
                        {
                          metric: "EPS",
                          "2022": "$2.34",
                          "2023": "$3.12",
                          "2024": "$3.87",
                          yoy: "+24.0%",
                          trend: "up",
                        },
                        {
                          metric: "R&D Expenses",
                          "2022": "0.6B",
                          "2023": "0.7B",
                          "2024": "0.9B",
                          yoy: "+28.6%",
                          trend: "up",
                        },
                        {
                          metric: "SG&A Expenses",
                          "2022": "1.1B",
                          "2023": "1.3B",
                          "2024": "1.5B",
                          yoy: "+15.4%",
                          trend: "up",
                        },
                      ].map((row, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-3 py-3 text-sm font-medium text-gray-900">
                            {row.metric}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-500 text-right">
                            {row["2022"]}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-500 text-right">
                            {row["2023"]}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-900 font-medium text-right">
                            {row["2024"]}
                          </td>
                          <td className="px-3 py-3 text-sm text-right">
                            <span
                              className={`inline-flex items-center ${
                                row.trend === "up"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {row.trend === "up" ? (
                                <TrendingUp className="h-3 w-3 mr-1" />
                              ) : (
                                <TrendingDown className="h-3 w-3 mr-1" />
                              )}
                              {row.yoy}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Chart visualization */}
                <div className="mt-6 h-48 bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium text-gray-700">
                      Revenue Growth Trend
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-500">Revenue</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full ml-2"></div>
                      <span className="text-xs text-gray-500">Net Income</span>
                    </div>
                  </div>
                  <div className="h-28 flex items-end space-x-2">
                    {[
                      { revenue: 30, income: 15 },
                      { revenue: 40, income: 20 },
                      { revenue: 45, income: 22 },
                      { revenue: 55, income: 25 },
                      { revenue: 60, income: 28 },
                      { revenue: 70, income: 32 },
                      { revenue: 80, income: 38 },
                      { revenue: 90, income: 42 },
                    ].map((data, i) => (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-center space-y-1"
                      >
                        <div
                          className="w-full bg-green-500 rounded-t"
                          style={{ height: `${data.income}%` }}
                        ></div>
                        <div
                          className="w-full bg-blue-500 rounded-t"
                          style={{ height: `${data.revenue - data.income}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-400 rounded-full opacity-20"></div>
          </div>

          {/* Right side - Text content */}
          <div>
            <h2 className="text-base font-semibold text-blue-300 tracking-wide uppercase">
              Financial Data
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Financials
            </p>
            <p className="mt-4 text-xl text-blue-200">
              Get access to up to 10 years of historical data for income
              statement, balance sheet and cash flow statement with quarter and
              yearly periods.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: BarChart3,
                  title: "Comprehensive Financial Statements",
                  description:
                    "Access income statements, balance sheets, and cash flow statements with detailed line items.",
                },
                {
                  icon: TrendingUp,
                  title: "Historical Data",
                  description:
                    "View up to 10 years of historical financial data to analyze long-term trends.",
                },
                {
                  icon: DollarSign,
                  title: "Quarterly & Annual Reports",
                  description:
                    "Toggle between quarterly and annual data to analyze seasonal patterns and yearly growth.",
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
                Explore financial data
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialsSection;
