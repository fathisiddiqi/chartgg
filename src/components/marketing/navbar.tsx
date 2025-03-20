"use client";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../custom-ui/button";
import Link from "next/link";
import { ChartggText } from "../common/chartgg-text";
import { Menu, X } from "lucide-react";

const Navbar = ({ pathname }: { pathname: string }) => {
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
