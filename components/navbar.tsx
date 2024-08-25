"use client";

import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

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
  Divider,
} from "@nextui-org/react";

import { usePathname } from "next/navigation.js";
import { ChevronDown } from "./Icons.jsx";


export default function NavBarUI() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground" className="text-2xl font-bold">
            KeyItem 3D
          </Link>
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
              <Link
                href="/products?keyrings"
                className=" font-semibold w-full"
                color="foreground"
              >
                Breloki
              </Link>
            </DropdownItem>
            <DropdownItem key="figurines">
              <Link
                href="/products?figurines"
                className=" w-full font-semibold"
                color="foreground"
              >
                Figurki
              </Link>
            </DropdownItem>
            <DropdownItem key="gadgets">
              <Link
                href="/products?gadgets"
                className=" w-full font-semibold"
                color="foreground"
              >
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
            Kontakt
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link href="/cart">
            <Image
              as={NextImage}
              src="/cart.png"
              alt="cart"
              width={35}
              height={35}
              radius="none"
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/products?keyrings"
            size="lg"
          >
            Breloki
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/products?figurines"
            size="lg"
          >
            Figurki
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/products?gadgets"
            size="lg"
          >
            Gadżety
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem>
          <Link
            color={pathname == "/" ? "primary" : "foreground"}
            className="w-full"
            href="/"
            size="lg"
          >
            Strona główna
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color={pathname == "/products" ? "primary" : "foreground"}
            className="w-full"
            href="/products"
            size="lg"
          >
            Produkty
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color={pathname == "/contact" ? "primary" : "foreground"}
            className="w-full"
            href="/contact"
            size="lg"
          >
            Kontakt
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
