"use client";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../custom-ui/button";
import Link from "next/link";
import { ChartggText } from "../common/chartgg-text";
import { Menu, X, Github, Star } from "lucide-react";
import { useGithubStars } from "@/hook/use-github-stars";

const Navbar = ({ pathname }: { pathname: string }) => {
  const { stargazers_count, loading } = useGithubStars(
    "fathisiddiqi",
    "chartgg"
  );
  return (
    <header className="fixed top-0 left-0 right-0 flex h-16 shrink-0 items-center px-4 sm:px-12 z-50 backdrop-blur-md bg-white/75 border-b border-white/10 transition-all duration-300 ease-in-out">
      {/* <button
        onClick={(e) => {
          const btn = e.currentTarget;
          const expanded = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", (!expanded).toString());
          btn.setAttribute("data-state", expanded ? "closed" : "open");
        }}
        className="md:hidden p-2 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Toggle menu"
        aria-expanded="false"
        data-state="closed"
      >
        <Menu
          className="h-5 w-5 transition-all duration-300 menu-icon"
          data-state="closed"
        />
        <X
          className="h-5 w-5 transition-all duration-300 menu-icon"
          data-state="open"
        />
        <style jsx>{`
          button[data-state="closed"] .menu-icon[data-state="open"] {
            display: none;
          }
          button[data-state="closed"] .menu-icon[data-state="closed"] {
            display: block;
          }
          button[data-state="open"] .menu-icon[data-state="closed"] {
            display: none;
          }
          button[data-state="open"] .menu-icon[data-state="open"] {
            display: block;
          }
        `}</style>
      </button> */}
      <Link
        href="/"
        className="ml-2 md:ml-0 mr-6 flex items-center group transition-transform duration-300 hover:scale-105"
        prefetch={false}
      >
        <ChartggText showBeta />
      </Link>
      <NavigationMenu className="hidden md:flex justify-center">
        <NavigationMenuList className="space-x-2">
          <NavigationMenuLink asChild>
            <Link
              href="/features"
              className={`group relative inline-flex h-8 w-max items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-1 ${
                pathname === "/features"
                  ? "bg-white/20 shadow-lg"
                  : "bg-white/10"
              }`}
            >
              Features
              <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/blog"
              className={`group relative inline-flex h-8 w-max items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-1 ${
                pathname === "/blog" ? "bg-white/20 shadow-lg" : "bg-white/10"
              }`}
            >
              Blog
              <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      <Link
        href="/chart-editor"
        className="hidden sm:flex ml-auto gap-2 justify-end"
      >
        <Button
          size="sm"
          variant="default"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 rounded-full px-6"
        >
          Go to Editor
        </Button>
      </Link>
      <Link
        href="https://github.com/fathisiddiqi/chartgg"
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex h-8 w-max items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-1 bg-white/10`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 md:h-4 md:w-4"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
        {!loading && stargazers_count > 0 && (
          <span className="ml-2 flex items-center text-xs">
            <Star className="h-3 w-3 mr-0.5" />
            {stargazers_count}
          </span>
        )}
        <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
      </Link>
      <Link
        href="/chart-editor"
        className="flex sm:hidden ml-auto gap-2 justify-end"
      >
        <Button
          size="sm"
          variant="default"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 rounded-full px-6"
        >
          Editor
        </Button>
      </Link>
      {/* Mobile Navigation Menu */}
      <div
        className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 pointer-events-none"
        data-state="closed"
        style={{
          opacity: "var(--overlay-opacity, 0)",
          pointerEvents: "var(--overlay-pointer-events, none)" as
            | "none"
            | "auto",
        }}
        onClick={(e) => {
          const menu = e.currentTarget;
          const btn = document.querySelector(
            "button[aria-label='Toggle menu']"
          );
          if (btn) {
            btn.setAttribute("aria-expanded", "false");
            btn.setAttribute("data-state", "closed");
          }
        }}
      >
        <style jsx>{`
          div[data-state="open"] {
            --overlay-opacity: 1;
            --overlay-pointer-events: auto;
          }
          div[data-state="closed"] {
            --overlay-opacity: 0;
            --overlay-pointer-events: none;
          }
          div[data-state="open"] > div[data-state="open"] {
            transform: translateX(0);
          }
          div[data-state="closed"] > div[data-state="closed"] {
            transform: translateX(-100%);
          }
        `}</style>
        <div
          className="fixed inset-y-0 left-0 w-64 bg-white/95 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out -translate-x-full"
          data-state="closed"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-6 space-y-6">
            <Link
              href="/features"
              className={`group relative inline-flex h-10 w-full items-center justify-start rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-1 ${
                pathname === "/features"
                  ? "bg-white/20 shadow-lg"
                  : "bg-white/10"
              }`}
              onClick={(e) => {
                const btn = document.querySelector(
                  "button[aria-label='Toggle menu']"
                );
                if (btn) {
                  btn.setAttribute("aria-expanded", "false");
                  btn.setAttribute("data-state", "closed");
                }
              }}
            >
              Features
            </Link>
            <Link
              href="/blog"
              className={`group relative inline-flex h-10 w-full items-center justify-start rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-1 ${
                pathname === "/blog" ? "bg-white/20 shadow-lg" : "bg-white/10"
              }`}
              onClick={(e) => {
                const btn = document.querySelector(
                  "button[aria-label='Toggle menu']"
                );
                if (btn) {
                  btn.setAttribute("aria-expanded", "false");
                  btn.setAttribute("data-state", "closed");
                }
              }}
            >
              Blog
            </Link>
            <Link
              href="https://github.com/fathisiddiqi/chartgg"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-10 w-full items-center justify-start rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-1 bg-white/10"
              onClick={(e) => {
                const btn = document.querySelector(
                  "button[aria-label='Toggle menu']"
                );
                if (btn) {
                  btn.setAttribute("aria-expanded", "false");
                  btn.setAttribute("data-state", "closed");
                }
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
              {!loading && stargazers_count > 0 && (
                <span className="ml-2 flex items-center text-xs">
                  <Star className="h-3 w-3 mr-0.5" />
                  {stargazers_count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
