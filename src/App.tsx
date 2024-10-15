import "./App.css";
import { Button } from "@/components/ui/button";
import {
  Droplet,
  Droplets,
  Waves,
  Fence,
  Dam,
  Fuel,
  SunSnow,
  FireExtinguisher,
} from "lucide-react";

function App() {
  return (
    <>
      <div className="bg-black w-full text-white">
        <div className="flex justify-between items-center p-4 w-full">
          <h1 className="text-2xl font-bold">HYDROS v1</h1>
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            APP
          </Button>
        </div>

        <div className="flex justify-center w-full">
          <img
            src="./src/assets/logo.svg"
            alt="Logo"
            className="w-100 h-auto"
          />
        </div>

        <h4 className="mt-4 text-center w-full text-gray-400">
          SISTEMA DE DIMENSIONAMENTO INSTALAÇÕES PREDIAIS
        </h4>

        <h1 className="text-4xl mt-2 text-center font-bold">
          Descubra como nossa plataforma
          <br />
          se diferencia do cenário tradicional
        </h1>

        <h4 className="mt-2 text-center w-full text-gray-400">
          Confira alguns exemplos de soluções criadas para melhorar a
          experiência do usuário
        </h4>

        <div className="flex flex-wrap justify-between w-full p-4">
          <div className="flex flex-col items-center mx-10">
            <Droplet className="w-10 h-10 mb-2 text-gray-400" />
            <span>ÁGUA FRIA</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <Droplets className="w-10 h-10 mb-2 text-gray-400" />
            <span>ÁGUA QUENTE</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <Waves className="w-10 h-10 mb-2 text-gray-400" />
            <span>ÁGUAS PLUVIAIS</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <Fence className="w-10 h-10 mb-2 text-gray-400" />
            <span>ESGOTO</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <Dam className="w-10 h-10 mb-2 text-gray-400" />
            <span>DRENAGEM</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <Fuel className="w-10 h-10 mb-2 text-gray-400" />
            <span>GÁS</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <SunSnow className="w-10 h-10 mb-2 text-gray-400" />
            <span>CLIMATIZAÇÃO</span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <FireExtinguisher className="w-10 h-10 mb-2 text-gray-400" />
            <span>INCÊNDIO</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-between w-full mt-8">
          <div className="flex-1 mr-4">
            <h2 className="text-xl font-semibold">CASOS DE USO</h2>
            <h4 className="mt-2 text-gray-400">
              O sistema de dimensionamento de instalações prediais é uma
              ferramenta projetada para facilitar o planejamento e a execução de
              projetos de edificações, garantindo que todas as infraestruturas
              necessárias, como elétrica, hidráulica, esgoto e climatização,
              sejam dimensionadas de forma eficiente e segura.
            </h4>

            <h2 className="text-xl font-semibold">ARQUITETURA</h2>
            <h4 className="mt-2 text-gray-400">
              PYTHON - TYPESCRIPT - ML / IA
            </h4>
          </div>

          <div className="flex items-start">
            <div className="flex-1 ml-4">
              <h2 className="text-xl font-semibold">
                DADOS ANALISADOS EM TEMPO REAL COM AUXÍLIO DE IA
              </h2>
              <h4 className="mt-2 text-gray-400">
                Dimensionamento inteligente para instalações prediais eficientes
                e seguras
              </h4>
            </div>
            <img
              src="./src/assets/IA.svg"
              alt="IA"
              className="mt-4 w-100 h-auto ml-4"
            />
          </div>
        </div>

        <div className="w-full text-center mt-4">
          <h4>Hydros v1 © 2024 All rights reserved.</h4>
        </div>
      </div>
    </>
  );
}

export default App;
