import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../custom-ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex h-12 shrink-0 items-center px-4 sm:px-12 border-b-2 border-muted z-50 max-w-[1280px] mx-auto bg-white rounded-md">
      <Link href="/" className="mr-6 flex items-center" prefetch={false}>
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <span className="ml-2 text-xl font-bold">Chartgg</span>
        <span className="ml-2 inline-flex items-center rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary ring-1 ring-inset ring-primary/20">
          Beta
        </span>
      </Link>
      <NavigationMenu className="hidden md:flex justify-center">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="/features"
              className="group inline-flex h-6 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Features
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/blog"
              className="group inline-flex h-6 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Blog
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <Link
        href="/chart-editor"
        className="hidden sm:flex ml-auto gap-2 justify-end"
      >
        <Button size="sm" variant="default">
          Go to Editor
        </Button>
      </Link>
      <Link
        href="/chart-editor"
        className="flex sm:hidden ml-auto gap-2 justify-end"
      >
        <Button size="sm" variant="default">
          Editor
        </Button>
      </Link>
    </header>
  );
};

export default Navbar;
