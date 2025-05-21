import SolutionGrid from "../global/solution-grid";
import { BoxAnimate } from "../shared/box-animate";
import { TextShadow } from "../shared/text-shadow";

export default function SolutionSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 mt-10">
      <BoxAnimate delay={0.3}>
        <div className="w-full max-w-8xl mx-auto flex flex-col">
          <TextShadow className="font-bold text-6xl">
            <h1>Nossa Solução</h1>
          </TextShadow>
          <p className="max-w-3xl">
            Projetamos um sistema que utiliza um drone equipado com inteligência
            artificial, visando superar limitações, identificando e relatando
            dados em tempo real, junto com monitoramento de nível de fumaça e
            chamas.
          </p>
        </div>
        <SolutionGrid />
      </BoxAnimate>
    </section>
  );
}
