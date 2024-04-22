'use client'

import { useRef, useState } from "react";
import { Link } from "@/navigation";
import CodeSnippet from "@/components/ui/CodeSnippet";
import ExpandableCodeSnippet from "@/components/ui/ExpandableCodeSnippet";

const GettingStarted = () => {
  const installRef = useRef<HTMLDivElement | null>(null);
  const usageRef = useRef<HTMLDivElement | null>(null);
  const [linkSelected, setLinkSelected] = useState("install");

  return (
    <div className="w-screen min-h-screen pt-[81px] px-[100px] flex">
      <aside className="pt-[100px] w-[25%] h-[100%] relative">
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

                  setLinkSelected("install")
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
      <section className="pt-[100px] w-[50%] flex flex-col gap-6">
        <h1 className="text-[52px] font-bold">Começando</h1>
        <p>
          Começe a usar Mockado e aprenda explorando{" "}
          <Link className="text-[#206DEB]" href="/features/basic">
            exemplos básicos.
          </Link>
        </p>
        <p ref={installRef}>
          Mockado vem para te auxiliar nos seus desenvolvimentos em ambientes de
          testes ou qualquer outro cenário onde você necessite de dados
          fictícios. Nossos módulos podem ser utilizados facilmente chamando
          funções responsáveis por fornecer cada tipo de dado, bem como
          personalizar de acordo com sua necessidade.
        </p>
        <div className="flex flex-col gap-6">
          <h2 className="text-[32px]">Instalação</h2>
          <p>
            Mockado está disponível para download no registro npm. Use seu
            gerenciador de pacotes preferido:
          </p>
          <CodeSnippet code="npm install mockado" />
          <CodeSnippet code="yarn add mockado" />
        </div>
        <div className="flex flex-col gap-6">
          <h2 ref={usageRef} id="usage" className="text-[32px]">
            Uso
          </h2>
          <p>
            Importe o modulo mockado para ter acesso a todas as funcoes
            disponiveis para gerar dados aleatorios realistas, tais como:
            username, email, password e password (consulte{" "}
            <Link className="text-[#206DEB]" href="/api-reference">
              a referência da API
            </Link>{" "}
            para obter uma lista completa de acessórios disponíveis)
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
      <aside className="pt-[100px] w-[25%] h-[100%] relative flex justify-end">
        <div className="w-[200px] h-[500px] bg-[#101010] fixed"></div>
      </aside>
    </div>
  );
};

export default GettingStarted;
