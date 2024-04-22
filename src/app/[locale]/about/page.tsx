'use client'

import React from 'react';
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Form from '@/components/ui/Form';

const About = () => {
  const t = useTranslations("about_page");
  return (
    <div className="w-screen min-h-screen px-4 lg:px-[100px] pt-[72px] lg:pt-[81px] lg:flex">
      <div className="w-full lg:w-[50%] py-10 lg:pt-[100px] flex flex-col gap-6 items-start">
        <span className="text-[40px] font-bold">{t("presentation.title")}</span>
        <span className="text-[#c1c1c1]">{t("presentation.description")}</span>
        <button className="bg-[#1F6EEB] font-medium p-3 flex items-center gap-4 rounded-md">
          {t("presentation.button_text")}
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="py-10 lg:w-[50%] lg:pt-[100px] lg:flex lg:justify-end">
        <Form />
      </div>
    </div>
  );
}

export default About;