"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icons } from "../icons";
import { Link } from "@/navigation";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";
import "./NavBar.css";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href || "/"}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  const t = useTranslations("navigation");

  const toggleMenuActive = () => {
    setMenuActive((prevState) => !prevState);
  };

  const motionVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        type: "spring",
      },
    },

    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0,
        duration: 0,
      },
    },
  };

  const listItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },

    closed: {
      y: 100,
      opacity: 0,
      trasition: {
        duration: 0,
      },
    },
  };

  return (
    <>
      <div className="lg:hidden">
        <header className={`navbar ${menuActive ? "active" : ""}`}>
          <nav className={`navigation`}>
            <div className="bg-[#151515] p-3 rounded-md">
              <Image alt="logo image" src={Logo} className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-6">
              <LocalSwitcher />
              <Link href="https://github.com/luizfelipegois/mockado">
                <GitHubLogoIcon className="w-6 h-6" />
              </Link>
              <div
                className="burgerMenuContainer"
                onClick={() => toggleMenuActive()}
              >
                <div className="burgerMenuTrigger"></div>
                <div className="burgerMenu"></div>
              </div>
            </div>
          </nav>
          <div className="content">
            <motion.ul
              animate={menuActive ? "open" : "closed"}
              variants={motionVariants}
              className="w-full"
            >
              <motion.li className="py-4" variants={listItemVariants}>
                <Link className="w-full text-[22px]" href="/about">
                  {t("links.about")}
                </Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      {t("links.documentation")}
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link
                        className="flex flex-col mb-6"
                        href="/getting-started"
                      >
                        {t("sub_links.getting_started.title")}
                        <span className="text-[16px] text-[#505050]">
                          {t("sub_links.getting_started.description")}
                        </span>
                      </Link>
                      <Link className="flex flex-col" href="/api-reference">
                        {t("sub_links.api_reference.title")}
                        <span className="text-[16px] text-[#505050]">
                          {t("sub_links.api_reference.description")}
                        </span>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{t("links.features")}</AccordionTrigger>
                    <AccordionContent>
                      <Link
                        className="flex flex-col mb-6"
                        href="/features/basic"
                      >
                        {t("sub_links.most_used_features.title")}
                        <span className="text-[16px] text-[#505050]">
                          {t("sub_links.most_used_features.description")}
                        </span>
                      </Link>
                      <Link
                        className="flex flex-col"
                        href="/features/customization"
                      >
                        {t("sub_links.customization.title")}
                        <span className="text-[16px] text-[#505050]">
                          {t("sub_links.customization.description")}
                        </span>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.li>
            </motion.ul>
          </div>
        </header>
      </div>
      <header className="hidden px-[100px] py-[20px] border-b-[1px] border-[#151515] bg-[#101010] lg:flex items-center justify-between">
        <div className="flex gap-8">
          <div className="bg-[#151515] p-3 rounded-md">
            <Image alt="logo image" src={Logo} className="h-4 w-4" />
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t("links.about")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("links.documentation")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/about"
                        >
                          <Icons.gitHub className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Mockado
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Dados fictícios, porém realistas.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/getting-started"
                      title={t("sub_links.getting_started.title")}
                    >
                      {t("sub_links.getting_started.description")}
                    </ListItem>
                    <ListItem
                      href="/api-reference"
                      title={t("sub_links.api_reference.title")}
                    >
                      {t("sub_links.api_reference.description")}
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("links.features")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px] ">
                    <ListItem
                      href="/features/basic"
                      title={t("sub_links.most_used_features.title")}
                    >
                      {t("sub_links.most_used_features.description")}
                    </ListItem>
                    <ListItem
                      href="/features/customization"
                      title={t("sub_links.customization.title")}
                    >
                      {t("sub_links.customization.description")}
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-6">
          <LocalSwitcher />
          <Link href="https://github.com/luizfelipegois/mockado">
            <GitHubLogoIcon className="w-6 h-6" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
