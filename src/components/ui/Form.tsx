'use client'

import React, { useState } from 'react';
import { useTranslations } from "next-intl";
import mockado from "mockado";

const Form = () => {
  const t = useTranslations("about_page.form");
  const [data, setData] = useState({
    fullname: "",
    email: "",
    address: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: ""
  });

  function handleForm() {
    const createRandomUser = {
      fullname: mockado.name({ type: "fullName" }),
      email: mockado.email(),
      address: mockado.address(),
      birthdate: mockado.date({
        start: new Date(1965, 0, 1),
        end: new Date(2010, 0, 1),
      }),
      password: mockado.password(),
    };
  
    setData({
      fullname: createRandomUser.fullname,
      email: createRandomUser.email,
      address: createRandomUser.address,
      dateOfBirth: createRandomUser.birthdate,
      password: createRandomUser.password,
      confirmPassword: createRandomUser.password,
    });
  }

  return (
    <div className="flex flex-col items-end gap-4 lg:w-[80%]">
      <button
        onClick={() => handleForm()}
        className="bg-gradient-to-r from-pink-500 to-yellow-500 font-medium p-3 rounded-md"
      >
        {t("button_test_text")}
      </button>
      <div className="border-[#505050] border-[1px] p-8 rounded-3xl flex flex-col gap-6 w-full">
        <label htmlFor="" className="flex flex-col font-semibold gap-2">
          {t("inputs.fullname.label")}
          <input
            type="text"
            className="p-4 rounded-sm bg-[#101010] text-[14px]"
            placeholder={t("inputs.fullname.placeholder")}
            value={data.fullname}
          />
        </label>
        <label htmlFor="" className="flex flex-col font-semibold gap-2">
          {t("inputs.email.label")}
          <input
            type="text"
            className="p-4 rounded-sm bg-[#101010] text-[14px]"
            placeholder={t("inputs.email.placeholder")}
            value={data.email}
          />
        </label>
        <label htmlFor="" className="flex flex-col font-semibold gap-2">
          {t("inputs.address.label")}
          <input
            type="text"
            className="p-4 rounded-sm bg-[#101010] text-[14px]"
            placeholder={t("inputs.address.placeholder")}
            value={data.address}
          />
        </label>
        <label htmlFor="" className="flex flex-col font-semibold gap-2">
          {t("inputs.date_of_birth.label")}
          <input
            type="date"
            className="p-4 rounded-sm bg-[#101010] text-[14px]"
            value={data.dateOfBirth}
          />
        </label>
        <label htmlFor="" className="flex flex-col font-semibold gap-2">
          {t("inputs.password.label")}
          <input
            type="password"
            className="p-4 rounded-sm bg-[#101010] text-[14px]"
            placeholder={t("inputs.password.placeholder")}
            value={data.password}
          />
        </label>
        <label htmlFor="" className="flex flex-col font-semibold gap-2">
          {t("inputs.confirm_password.label")}
          <input
            type="password"
            className="p-4 rounded-sm bg-[#101010] text-[14px]"
            placeholder={t("inputs.confirm_password.placeholder")}
            value={data.password}
          />
        </label>
        <button className="bg-[#1F6EEB] font-medium p-3 rounded-md">
          {t("button_text")}
        </button>
      </div>
    </div>
  );
}

export default Form