'use client'

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const ApiReference = () => {
  const nameRef = useRef<HTMLDivElement | null>(null);
  const emailRef = useRef<HTMLDivElement | null>(null);
  const passwordRef = useRef<HTMLDivElement | null>(null);
  const dateRef = useRef<HTMLDivElement | null>(null);
  const phoneNumberRef = useRef<HTMLDivElement | null>(null);
  const addressRef = useRef<HTMLDivElement | null>(null);
  const [linkSelected, setLinkSelected] = useState("name");
  const t = useTranslations("api_reference_page");

  return (
    <div className="w-screen min-h-screen px-4 pb-4 pt-[72px] lg:pt-[81px] lg:px-[100px] flex">
      <aside className="hidden lg:block pt-[100px] w-[25%] h-[100%] relative">
        <div className="flex flex-col gap-6 fixed">
          <span>Nesta página</span>
          <ul className="flex flex-col gap-2 border-l-[1px] border-l-[#505050]">
            <li
              className={`border-l-[3px] ${
                linkSelected === "name"
                  ? "border-l-[#1F6EEB]"
                  : "border-l-[#050505]"
              } pl-4 ${
                linkSelected === "name" ? "text-[#f2f2f2]" : "text-[#505050]"
              }`}
            >
              <button
                className="p-0 b-0"
                onClick={() => {
                  nameRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });

                  setLinkSelected("name");
                }}
              >
                Name
              </button>
            </li>
            <li
              className={`border-l-[3px] ${
                linkSelected === "email"
                  ? "border-l-[#1F6EEB]"
                  : "border-l-[#050505]"
              } pl-4 ${
                linkSelected === "email" ? "text-[#f2f2f2]" : "text-[#505050]"
              }`}
            >
              <button
                className="p-0 b-0"
                onClick={() => {
                  emailRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });

                  setLinkSelected("email");
                }}
              >
                Email
              </button>
            </li>
            <li
              className={`border-l-[3px] ${
                linkSelected === "password"
                  ? "border-l-[#1F6EEB]"
                  : "border-l-[#050505]"
              } pl-4 ${
                linkSelected === "password"
                  ? "text-[#f2f2f2]"
                  : "text-[#505050]"
              }`}
            >
              <button
                className="p-0 b-0"
                onClick={() => {
                  passwordRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });

                  setLinkSelected("password");
                }}
              >
                Password
              </button>
            </li>
            <li
              className={`border-l-[3px] ${
                linkSelected === "date"
                  ? "border-l-[#1F6EEB]"
                  : "border-l-[#050505]"
              } pl-4 ${
                linkSelected === "date" ? "text-[#f2f2f2]" : "text-[#505050]"
              }`}
            >
              <button
                className="p-0 b-0"
                onClick={() => {
                  dateRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });

                  setLinkSelected("date");
                }}
              >
                Date
              </button>
            </li>
            <li
              className={`border-l-[3px] ${
                linkSelected === "phoneNumber"
                  ? "border-l-[#1F6EEB]"
                  : "border-l-[#050505]"
              } pl-4 ${
                linkSelected === "phoneNumber"
                  ? "text-[#f2f2f2]"
                  : "text-[#505050]"
              }`}
            >
              <button
                className="p-0 b-0"
                onClick={() => {
                  phoneNumberRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });

                  setLinkSelected("phoneNumber");
                }}
              >
                Phone Number
              </button>
            </li>
            <li
              className={`border-l-[3px] ${
                linkSelected === "address"
                  ? "border-l-[#1F6EEB]"
                  : "border-l-[#050505]"
              } pl-4 ${
                linkSelected === "address" ? "text-[#f2f2f2]" : "text-[#505050]"
              }`}
            >
              <button
                className="p-0 b-0"
                onClick={() => {
                  addressRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });

                  setLinkSelected("address");
                }}
              >
                Address
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <section className="pt-[50px] w-full lg:pt-[75px] lg:w-[50%] flex flex-col gap-12">
        <h1 className="text-[52px] font-bold">{t("title")}</h1>
        <p ref={nameRef}>{t("description")}</p>
        <div className="flex flex-col gap-6">
          <h2 className="text-[32px] text-[#fae756]">Name</h2>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">gender</span>
            </div>
            <span>{`${t(
              "section_name.type"
            )}: "male" | "female" | undefined`}</span>
            <span>{`${t("section_name.default")}: "male"`}</span>
          </div>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">type</span>
            </div>
            <span>{`${t(
              "section_name.type"
            )}: "firstName" | "fullName" | "username" | undefined`}</span>
            <span>{`${t("section_name.default")}: "firstName"`}</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={emailRef} className="text-[32px] text-[#fae756]">
            Email
          </h2>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">gender</span>
            </div>
            <span>{`${t(
              "section_name.type"
            )}: "male" | "female" | undefined`}</span>
            <span>{`${t("section_name.default")}: "male"`}</span>
          </div>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">type</span>
            </div>
            <span>{`${t("section_name.type")}: "gmail.com"
            | "hotmail.com"
            | "outlook.com"
            | "yahoo.com"
            | undefined`}</span>
            <span>{`${t("section_name.default")}: "firstName"`}</span>
          </div>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">numbers</span>
            </div>
            <span>{`${t("section_name.type")}: boolean | undefined`}</span>
            <span>{`${t("section_name.default")}: true`}</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={passwordRef} className="text-[32px] text-[#fae756]">
            Password
          </h2>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">letters</span>
            </div>
            <span>{`${t("section_name.type")}: boolean | undefined`}</span>
            <span>{`${t("section_name.default")}: true`}</span>
          </div>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">
                capitalLetters
              </span>
            </div>
            <span>{`${t("section_name.type")}: boolean | undefined`}</span>
            <span>{`${t("section_name.default")}: true`}</span>
          </div>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">numbers</span>
            </div>
            <span>{`${t("section_name.type")}: boolean | undefined`}</span>
            <span>{`${t("section_name.default")}: true`}</span>
          </div>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">
                specialCharacters
              </span>
            </div>
            <span>{`${t("section_name.type")}: boolean | undefined`}</span>
            <span>{`${t("section_name.default")}: true`}</span>
          </div>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">length</span>
            </div>
            <span>{`${t("section_name.type")}: boolean | undefined`}</span>
            <span>{`${t("section_name.default")}: true`}</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={dateRef} className="text-[32px] text-[#fae756]">
            Date
          </h2>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">format</span>
            </div>
            <span>{`${t("section_name.type")}: "YYYY-MM-DD"
            | "DD/MM/YYYY"
            | "MM/DD/YYYY"
            | "MMM DD, YYYY"
            | "DD MMM YYYY"
            | "YYYY/MM/DD"
            | "YYYY-MM-DD HH:mm:ss"
            | undefined`}</span>
            <span>{`${t("section_name.default")}: "YYYY/MM/DD"`}</span>
          </div>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">start</span>
            </div>
            <span>{`${t("section_name.type")}: Date | undefined`}</span>
            <span>{`${t("section_name.default")}: undefined`}</span>
          </div>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">end</span>
            </div>
            <span>{`${t("section_name.type")}: Date | undefined`}</span>
            <span>{`${t("section_name.default")}: undefined`}</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={phoneNumberRef} className="text-[32px] text-[#fae756]">
            Phone Number
          </h2>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">code</span>
            </div>
            <span>{`${t(
              "section_name.type"
            )}: "EUA" | "BRL" | undefined`}</span>
            <span>{`${t("section_name.default")}: BRL`}</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={addressRef} className="text-[32px] text-[#fae756]">
            Address
          </h2>
          <div className="pl-6 flex flex-col gap-4">
            <div>
              <span className="py-2 px-3 bg-[#151515] rounded-md">params</span>
            </div>
            <span>{`${t("section_name.type")}: "number"
      | "street"
      | "district"
      | "city"
      | "state"
      | "zipCode"
      | undefined`}</span>
            <span>{`${t("section_name.default")}: undefined`}</span>
          </div>
        </div>
      </section>
      <aside className="hidden pt-[100px] w-[25%] h-[100%] relative lg:flex justify-end">
        <div className="w-[200px] h-[500px] bg-[#0A0A0A] fixed"></div>
      </aside>
    </div>
  );
};

export default ApiReference;
