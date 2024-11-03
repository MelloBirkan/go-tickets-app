import sessao from "./sessao.json";

const TitleAndDescription = ({title, description, big = true}) => {
  return (
    <section className={"flex flex-col mt-5"}>
      {big
        ? (
          <div className={"flex flex-col items-center"}>
            <h1 className={"font-bold text-4xl"}>{title}</h1>
            <h3 className={"font-thin text-3xl"}>{description}</h3>
          </div>
        )
        : (
          <>
            <h2>{title}</h2>
            <h3 className={"font-thin text-3xl"}>{description}</h3>
          </>
        )
      }

    </section>
  )
}

const Circle = ({size = 9, color = "white"}) => {
  const sizeClasses = {
    4: "w-4 h-4",
    9: "w-9 h-9",
  };

  const colorClasses = {
    "slate": "bg-slate-600",
    "white": "bg-slate-50",
    "cyan": "bg-cyan-600",
  };

  return (
    <div
      className={`rounded-full ${
        sizeClasses[size] || sizeClasses["10"]
      } ${colorClasses[color] || colorClasses["gray-700"]}`}
    ></div>
  );
};


function BuyButton() {
  return <button
    className={"flex flex-col bg-sky-600 items-center py-2 rounded-2xl w-3/4 mt-auto mb-8"}>
    <h2 className={"text-3xl font-light"}>Comprar</h2>
    <p>R$ 125,00</p>
  </button>;
}

function CircleAndText({text, color}) {
  return <div className={"flex items-center gap-3"}>
    <Circle size={4} color={color}/>
    <p>{text}</p>
  </div>;
}

function SeatTip() {
  return <div className={"flex gap-5"}>
    <CircleAndText text={"Livre"}/>
    <CircleAndText text={"Selecionado"} color={"cyan"}/>
    <CircleAndText text={"Indisponivel"} color={"slate"}/>
  </div>;
}

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <TitleAndDescription title={sessao.titulo} description={sessao.horario}/>

      <SeatTip/>

      <BuyButton/>
    </main>
  );
}

