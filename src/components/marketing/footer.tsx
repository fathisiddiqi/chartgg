import Link from "next/link";
import { ChartggText } from "@/components/common/chartgg-text";

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          {/* Brand Column */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <ChartggText size="lg" showBeta />
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Turning data into stunning visuals, effortlessly.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Explore
            </h4>
            <ul className="space-y-3 sm:space-y-2">
              <li>
                <a
                  href="/features"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/chart-editor"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Chart Editor
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} ChartGG. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="space-y-2 sm:space-y-0">
            <h4 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 sm:hidden">
              Connect
            </h4>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://twitter.com/chartgg"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
