import sessao from "./sessao.json";
import {SeatsGrid} from "@/app/clientComponents/SeatsGrid";
import {SeatsProvider} from "@/app/clientComponents/SeatsContext";
import BuyButton from "@/app/clientComponents/BuyButton";

const TitleAndDescription = ({
                               title,
                               description,
                               big = false,
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


function CircleAndText({text, color}) {
  return <div className={"flex items-center gap-3"}>
    <Circle color={color}/>
    <p className={"font-light"}>{text}</p>
  </div>;
}


function SeatTip() {
  return (
    <div className={"flex gap-6 mb-5 justify-center"}>
      <CircleAndText text={"Livre"}/>
      <CircleAndText text={"Selecionado"} color={"cyan"}/>
      <CircleAndText text={"Indisponivel"} color={"slate"}/>
    </div>
  );
}

function ScreenLocation() {
  return <div className={"flex flex-col items-center mb-16 mt-10"}>
    <p className={"font-thin"}>Tela</p>
    <div className={"w-[450px] h-5 bg-slate-600"}></div>
  </div>;
}

export default function Home() {
  return (
    <SeatsProvider>
      <main className="flex flex-col items-center h-screen mx-auto max-w-screen-lg">
        <TitleAndDescription title={sessao.titulo} description={sessao.horario}
                             modifier={"mt-5 mb-12"} big={true}/>
        <div className={"flex justify-center md:mx-6 gap-8"}>
          <div className={"flex flex-col"}>
            <SeatsGrid/>
            <ScreenLocation/>
            <SeatTip/>
          </div>
          <div className={"hidden md:flex md:flex-col gap-6"}>
            <TitleAndDescription title={"Sinopse do filme"}
                                 description={sessao.sinopse}/>
            <TitleAndDescription title={"Data de lancamento"}
                                 description={sessao.dataLancamento}/>
            <TitleAndDescription title={"Direcão"}
                                 description={sessao.direcao}/>
          </div>
        </div>
        <BuyButton/>
      </main>
    </SeatsProvider>
  )
}

