'use client'

import React, { useEffect, useState } from 'react';
import { useTranslations } from "next-intl";
import { ArrowRightIcon, CalendarIcon, DownloadIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Form from '@/components/ui/Form';
import { Link } from '@/navigation';

const About = () => {
  const t = useTranslations("about_page");
  const [statsMockado, setStatsMockado] = useState({
    downloadsLastMonth: "",
    version: "",
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const downloadsLastMonth = await fetch(
          "https://api.npmjs.org/downloads/point/last-month/mockado"
        );
        const version = await fetch(
          "https://registry.npmjs.org/mockado/latest"
        );

        if (!downloadsLastMonth.ok || !version.ok) {
          throw new Error("Erro ao recuperar estatísticas");
        } else {
          const downloadsLastMonthData = await downloadsLastMonth.json();
          const versionData = await version.json();

          setStatsMockado({
            downloadsLastMonth: downloadsLastMonthData.downloads,
            version: versionData.version,
          });
        }
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="w-screen min-h-screen px-4 lg:px-[100px] pt-[72px] lg:pt-[81px] lg:flex">
      <div className="w-full lg:w-[50%] py-10 lg:pt-[100px] flex flex-col gap-6 items-start">
        <span className="text-[40px] font-bold">{t("presentation.title")}</span>
        <span className="text-[#c1c1c1]">{t("presentation.description")}</span>
        <Link href="getting-started">
          <button className="bg-[#1F6EEB] font-medium p-3 flex items-center gap-4 rounded-md">
            {t("presentation.button_text")}
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </Link>
        <div className="flex flex-col gap-8 mt-8">
          <div className="flex items-center gap-4">
            <div className="bg-[#1F6EEB] p-5 rounded-full">
              <GitHubLogoIcon className="w-4 h-4 text-[#101010]" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-[18px]">{`v${statsMockado.version}`}</span>
              <span className="font-medium text-[#c1c1c1]">
                {t("statistic.version")}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#1F6EEB] p-5 rounded-full">
              <DownloadIcon className="w-4 h-4 text-[#101010]" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-[18px]">{`+${statsMockado.downloadsLastMonth}`}</span>
              <span className="font-medium text-[#c1c1c1]">
                {t("statistic.downloads")}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#F7C949] p-5 rounded-full">
              <CalendarIcon className="w-4 h-4 text-[#101010]" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-[18px]">2024</span>
              <span className="font-medium text-[#c1c1c1]">
                {t("statistic.year")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 lg:w-[50%] lg:pt-[100px] lg:flex lg:justify-end">
        <Form />
      </div>
    </div>
  );
}

export default About;