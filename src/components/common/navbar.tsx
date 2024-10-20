import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import { Button } from "../custom-ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex h-12 w-full shrink-0 items-center px-12 border-b border-muted">
      <Link
        href="/"
        className="mr-6 hidden lg:flex items-center"
        prefetch={false}
      >
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <span className="ml-2 text-xl font-bold">ChartSS</span>
      </Link>
      <NavigationMenu className="hidden lg:flex justify-center w-full">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="/chart-editor"
              className="group inline-flex h-6 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Chart Editor
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      {/* <div className="ml-auto flex gap-2 justify-end">
        <Button size="mini-sm" variant="outline">
          Sign in
        </Button>
        <Button size="mini-sm">Sign Up</Button>
      </div> */}
    </header>
  );
};

export default Navbar;
