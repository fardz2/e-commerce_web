import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

import Search from "../ui/search";
import Cart from "../ui/cart";

import HamburgerTrigger from "../ui/hamburger-trigger";
import { auth } from "@/auth";
import FormLogout from "../form-logout";
import DropdownProfile from "../ui/dropdown-profile";

export default async function Navbar() {
  const session = await auth();
  console.log(session?.user);
  return (
    <nav className="fixed bg-white inset-x-0 ">
      <div className="md:flex hidden container mx-auto px-4 justify-between items-center py-4 gap-2 ">
        <Link href="/" className="text-xl font-bold">
          App
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href={"/"}>On Sale</Link>
        <Link href={"/"}>New Arrival</Link>
        <Link href={"/"}>Brands</Link>
        <Input
          placeholder="Search for products..."
          className="rounded-[50px]"
        />
        <Cart />
        {session?.user ? (
          <DropdownProfile
            image={session?.user.image ?? "https://github.com/shadcn.png"}
          />
        ) : (
          <Link href="/login" className="text-xl font-bold">
            login
          </Link>
        )}
      </div>
      <div className="flex container mx-auto px-4 justify-between items-center py-4 gap-2 md:hidden">
        <div className="flex gap-4 justify-center items-center">
          <HamburgerTrigger />
          <Link href="/" className="text-xl font-bold">
            App
          </Link>
        </div>
        <div className="flex gap-4">
          <Search />
          <Cart />
          {session?.user ? (
            <DropdownProfile
              image={session?.user.image ?? "https://github.com/shadcn.png"}
            />
          ) : (
            <Link href="/login" className="text-xl font-bold">
              login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
