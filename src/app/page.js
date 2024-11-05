import sessao from "./sessao.json";
import {SeatsGrid} from "@/app/clientComponents/SeatsGrid";

const TitleAndDescription = ({
                               title,
                               description,
                               big = true,
                               modifier = ""
                             }) => {
  return (
    <section className={"flex flex-col mt-5"}>
      {big
        ? (
          <div className={`flex flex-col items-center gap-1 ${modifier}`}>
            <h1 className={"font-bold text-4xl"}>{title}</h1>
            <h3 className={"font-thin text-3xl"}>{description}</h3>
          </div>
        )
        : (
          <>
            <h1 className={"font-bold text-2xl"}>{title}</h1>
            <h3 className={"font-thin text-xl"}>{description}</h3>
          </>
        )
      }
    </section>
  )
}

const Circle = ({color = "white"}) => {
  const colorClasses = {
    "slate": "bg-slate-600",
    "white": "dark:bg-slate-100 bg-slate-900",
    "cyan": "bg-cyan-600",
  };

  return (
    <div
      className={`rounded-full size-4 ${colorClasses[color] || colorClasses["gray-700"]}`}
    ></div>
  );
};


function BuyButton() {
  return <button
    className={"flex flex-col bg-sky-600 items-center py-2 rounded-2xl w-3/4 mt-auto mb-8 text-cyan-100"}>
    <h2 className={"text-3xl font-light"}>Comprar</h2>
    <p>R$ 125,00</p>
  </button>;
}

function CircleAndText({text, color}) {
  return <div className={"flex items-center gap-3"}>
    <Circle color={color}/>
    <p className={"font-light"}>{text}</p>
  </div>;
}


function SeatTip() {
  return <div className={"flex gap-6"}>
    <CircleAndText text={"Livre"}/>
    <CircleAndText text={"Selecionado"} color={"cyan"}/>
    <CircleAndText text={"Indisponivel"} color={"slate"}/>
  </div>;
}

function ScreenLocation() {
  return <div className={"w-screen flex flex-col items-center mb-16 mt-10"}>
    <p className={"font-thin"}>Tela</p>
    <div className={"w-10/12 h-5 bg-slate-600"}></div>
  </div>;
}

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <TitleAndDescription title={sessao.titulo} description={sessao.horario}
                           modifier={"mt-5 mb-12"}/>
      <SeatsGrid/>
      <ScreenLocation/>
      <SeatTip/>
      <BuyButton/>
    </main>
  );
}

