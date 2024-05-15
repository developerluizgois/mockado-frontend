'use client'

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import LinkedinIcon from "../../../public/linkedin-original.svg";
import BehanceIcon from "../../../public/behance-original.svg";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="flex items-center py-4 px-6 lg:px-[100px] border-t-[1px] border-[#101010] justify-between">
      <p className="text-[#f2f2f2] font-light text-[14px]">
        {t("developer_text")}{" "}
        <Link
          className="border-b-[#505050] border-b-[1px]"
          href="https://www.linkedin.com/in/luizfelipegois/"
        >
          <span>Luiz Felipe</span>
        </Link>
      </p>
      <p className="text-[#f2f2f2] font-light text-[14px]">
        Copyright © 2024 mockado
      </p>
      <div className="lg:flex items-center gap-4 hidden">
        <Link href="https://www.behance.net/fractastudios">
          <Image src={BehanceIcon} alt="Behance icon" className="w-6 h-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/luizfelipegois/">
          <Image src={LinkedinIcon} alt="Linkedin icon" className="w-6 h-6" />
        </Link>
        <Link href="https://github.com/luizfelipegois">
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
