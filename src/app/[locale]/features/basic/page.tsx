"use client";

import { useRef, useState } from "react";
import { Link } from "@/navigation";
import CodeSnippet from "@/components/ui/CodeSnippet";
import ExpandableCodeSnippet from "@/components/ui/ExpandableCodeSnippet";
import { useTranslations } from "next-intl";

const GettingStarted = () => {
  const installRef = useRef<HTMLDivElement | null>(null);
  const usageRef = useRef<HTMLDivElement | null>(null);
  const [linkSelected, setLinkSelected] = useState("install");
  const t = useTranslations("features_page");

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
                Start
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
                End
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <section className="pt-[50px] w-full lg:pt-[75px] lg:w-[50%] flex flex-col gap-12">
        <h1 className="text-[52px] font-bold">{t("title")}</h1>
        <p ref={installRef}>{t("description")}</p>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("firstName.title")}
          </h2>
          <p>{t("firstName.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const firstName = mockado.name({type: "firstName", gender: "female"});`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("fullName.title")}
          </h2>
          <p>{t("fullName.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const fullName = mockado.name({type: "fullName");`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("email_default.title")}
          </h2>
          <p>{t("email_default.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const email = mockado.email();
`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("email_with_defined_domain.title")}
          </h2>
          <p>{t("email_with_defined_domain.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const email = mockado.email({type: "yahoo.com"});
`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("email_with_defined_domain_and_gender.title")}
          </h2>
          <p>{t("email_with_defined_domain_and_gender.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const email = mockado.email({type: "yahoo.com", gender: "female"});
`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("password_default.title")}
          </h2>
          <p>{t("password_default.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const password = mockado.password();`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("custom_password.title")}
          </h2>
          <p>{t("custom_password.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const password = mockado.password({
  letters: true,
  capitalLetters: true,
  numbers: false,
  specialCharacters: true,
  length: 21,
})`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("date_default.title")}
          </h2>
          <p>{t("date_default.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const date = mockado.date();`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("date_between_a_specified_start_and_end.title")}
          </h2>
          <p>{t("date_between_a_specified_start_and_end.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const date = mockado.date({
  start: new Date(1995, 0, 1),
  end: new Date(2018, 0, 1),
})
`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("phone_number.title")}
          </h2>
          <p>{t("phone_number.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const phone = mockado.phone()
`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("phone_number_with_specified_code.title")}
          </h2>
          <p>{t("phone_number_with_specified_code.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const phone = mockado.phone({code: "EUA"})
`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("location.title")}
          </h2>
          <p>{t("location.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const location = mockado.location();

`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            {t("get_just_the_street.title")}
          </h2>
          <p>{t("get_just_the_street.description")}</p>
          <ExpandableCodeSnippet
            code={`// ESM
import mockado from 'mockado';

// CJS
const mockado = require('mockado');

const location = mockado.location("street");
`}
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
