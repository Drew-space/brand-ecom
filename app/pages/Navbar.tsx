"use client";
import { navlinks } from "../constance";
import Link from "next/link";
import { Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="container mx-auto w-full  md:py-4 font-primary  px-4  ">
      <div className=" flex justify-between items-center py-2 mt-2 px-4   border-2 md:border-black/15 lg:border-black  rounded-2xl">
        <div>
          <h1 className=" font-bold md:text-3xl tracking-tighter ">
            HappyFeet
          </h1>
        </div>
        <div className="  items-center  hidden lg:flex">
          {navlinks.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? (
                <Link
                  key={index}
                  href={link.href}
                  className="rounded-full border-gray-950  border-2 px-3  font-semibold transition-all duration-200 ease-in-out "
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="px-3  font-semibold transition-all duration-200 ease-in-out"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className=" flex items-center gap-2 md:gap-4 ">
          <User size={24} className="hover:cursor-pointer" />
          <ShoppingCart size={24} className=" hover:cursor-pointer " />
          <Button className="px-2 max-md:py-2 hidden md:block">Sign In</Button>
          <Sheet>
            <SheetTrigger asChild className=" md:hidden ">
              <Menu />
            </SheetTrigger>
            <SheetContent className="w-84">
              <div className=" flex flex-col  gap-12  h-full pt-16">
                <div>
                  <nav className="flex flex-col items-start gap-5  text-zinc-950 pl-4 font-bold ">
                    {navlinks.map((links) => (
                      <a
                        href={links.href}
                        key={links.name}
                        className="link-pirmary hover:text-accent-2 "
                      >
                        {links.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <Button className="w-fit mx-4">Sign In</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
