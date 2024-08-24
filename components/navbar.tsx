"use client";

import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import round from '@/public/round.png';

import { Products } from "@/const";
import { usePathname } from "next/navigation.js";
import { ChevronDown } from "./Icons.jsx";

import { AcmeLogo } from "./Icons.jsx";

export default function NavBarUI() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  console.log(pathname);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className=" text-2xl font-bold">KeyItem 3D</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href={"/"}
            color={pathname == "/" ? "primary" : "foreground"}
            className=" font-semibold text-lg"
          >
            {"Strona główna"}
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                endContent={<ChevronDown />}
                className=" font-semibold text-lg p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                color={pathname == "/products" ? "primary" : "default"}
              >
                Produkty
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Products"
            className="w-full"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="keyrings">
              
              <Link href="/products?keyrings" className=" font-semibold w-full" color="foreground">
                Bryloki
              </Link>
            </DropdownItem>
            <DropdownItem key="figurines">
              <Link href="/products?figurines" className=" w-full font-semibold" color="foreground">
                Figurki
              </Link>
            </DropdownItem>
            <DropdownItem key="gadgets">
              <Link href="/products?gadgets" className=" w-full font-semibold" color="foreground">
                Gadżety
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            href={"/contact"}
            color={pathname == "/contact" ? "primary" : "foreground"}
            className=" font-semibold text-lg"
          >
            {"Kontakt"}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link href="/cart">
            <AcmeLogo />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
