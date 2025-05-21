import { Cctv, HandCoins, SatelliteDish } from "lucide-react";
import Image from "next/image";
import FlyraImage from "@/assets/images/flyra-with-florest.png";
import { BoxAnimate } from "@/components/shared/box-animate";

const limitations = [
  {
    title: "Satélites",
    icon: <SatelliteDish className="size-10" />,
    description:
      "Apesar da ampla cobertura, não estão continuamente no mesmo local, sendo influenciados por clima e órbita.",
  },
  {
    title: "Câmeras Fixas",
    icon: <Cctv className="size-10" />,
    description:
      "Possuem alcance limitado e dependem de infraestrutura local para instalação e operação.",
  },
  {
    title: "Alto Custo",
    icon: <HandCoins className="size-10" />,
    description:
      "As soluções atuais costumam ser caras, dificultando seu uso em larga escala, especialmente em áreas remotas.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="w-full min-h-screen flex items-center bg-zinc-950/10 bg-cover px-4">
      <div className="w-full mx-auto text-center flex justify-around max-md:flex-col">
        <BoxAnimate delay={0.3} className="max-w-3xl mx-auto">
          <div className="w-full flex justify-center">
            <Image src={FlyraImage} className="max-w-96 max-lg:w-64" alt="" />
          </div>
          <h2 className="text-5xl font-bold mb-4 px-3 max-sm:text-3xl max-lg:text-4xl">
            O meio ambiente está em risco
          </h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto px-4 max-sm:text-sm max-lg:text-base">
            Desastres florestais comprometem ecossistemas inteiros. As
            tecnologias atuais ainda têm limitações que impedem uma resposta
            eficaz e rápida.
          </p>
        </BoxAnimate>
        <div className="flex flex-col gap-8">
          {limitations.map((item, index) => (
            <BoxAnimate
              delay={0.3 + index * 0.2}
              key={index}
              width="100%"
              type="fade"
              className="bg-zinc-950/30 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </BoxAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
