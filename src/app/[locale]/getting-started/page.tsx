'use client'

import { useRef, useState } from "react";
import { Link } from "@/navigation";
import CodeSnippet from "@/components/ui/CodeSnippet";
import ExpandableCodeSnippet from "@/components/ui/ExpandableCodeSnippet";
import { useTranslations } from "next-intl";

const GettingStarted = () => {
  const installRef = useRef<HTMLDivElement | null>(null);
  const usageRef = useRef<HTMLDivElement | null>(null);
  const [linkSelected, setLinkSelected] = useState("install");
  const t = useTranslations("getting_started_page");

  return (
    <div className="w-screen min-h-screen px-4 pb-4 pt-[72px] lg:pt-[81px] lg:px-[100px] flex">
      <aside className="hidden lg:block pt-[100px] w-[25%] h-[100%] relative">
        <div className="flex flex-col gap-6 fixed">
          <span>Nesta página</span>
          <ul className="flex flex-col gap-2 border-l-[1px] border-l-[#505050]">
            <li
              className={`border-l-[3px] ${
                linkSelected === "install"
                  ? "border-l-[#1F6EEB]"
                  : "border-l-[#050505]"
              } pl-4 ${
                linkSelected === "install" ? "text-[#f2f2f2]" : "text-[#505050]"
              }`}
            >
              <button
                className="p-0 b-0"
                onClick={() => {
                  installRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });

                  setLinkSelected("install");
                }}
              >
                Instalação
              </button>
            </li>
            <li
              className={`border-l-[3px] ${
                linkSelected === "usage"
                  ? "border-l-[#1F6EEB]"
                  : "border-l-[#050505]"
              } pl-4 ${
                linkSelected === "usage" ? "text-[#f2f2f2]" : "text-[#505050]"
              }`}
            >
              <button
                className="p-0 b-0"
                onClick={() => {
                  usageRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });

                  setLinkSelected("usage");
                }}
              >
                Uso
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <section className="pt-[50px] w-full lg:pt-[75px] lg:w-[50%] flex flex-col gap-12">
        <h1 className="text-[52px] font-bold">{t("title")}</h1>
        <span>
          {t("sub_title.text")}{" "}
          <Link className="text-[#206DEB]" href="/features/basic">
            {t("sub_title.link_text")}
          </Link>
        </span>
        <p ref={installRef}>{t("description")}</p>
        <div className="flex flex-col gap-6">
          <h2 className="text-[32px]">{t("section_installation.title")}</h2>
          <p>{t("section_installation.description")}</p>
          <CodeSnippet code="npm install mockado" />
          <CodeSnippet code="yarn add mockado" />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("section_usage.title")}
          </h2>
          <p>
            {t("section_usage.description.text_before")}{" "}
            <Link className="text-[#206DEB]" href="/api-reference">
              {t("section_usage.description.link_text")}
            </Link>{" "}
            {t("section_usage.description.text_after")}
          </p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

export function createRandomUser() {
  return {
    username: mockado.name({type: "username"}),
    email: mockado.email(),
    password: mockado.password(),
    birthdate: mockado.date(),
  };
}`}
          />
        </div>
      </section>
      <aside className="hidden pt-[100px] w-[25%] h-[100%] relative lg:flex justify-end">
        <div className="w-[200px] h-[500px] bg-[#0A0A0A] fixed"></div>
      </aside>
    </div>
  );
};

export default GettingStarted;
