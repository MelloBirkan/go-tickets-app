import sessao from "./sessao.json";


const TitleAndDescription = ({title, description, big = true}) => {
  return (
    <section className={"flex flex-col mt-5"}>
      {big
        ? <h1 className={"font-bold text-4xl"}>{title}</h1>
        : <h2>{title}</h2>}
      <h3 className={"font-thin text-3xl"}>{description}</h3>
    </section>
  );
}

const Circle = ({ size = "10", color = "amber" }) => {
  const colorClasses = {
    amber: "bg-amber-500",
    blue: "bg-blue-500",
    red: "bg-white",
    green: "bg-gray-500",
    // Adicione outras cores conforme necessário
  };

  return (
    <div
      className={`w-${size} h-${size} rounded-full ${
        colorClasses[color] || colorClasses["amber"]
      }`}
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

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <TitleAndDescription title={sessao.titulo} description={sessao.horario}/>

      <Circle color={"red"}/>

      <BuyButton/>
    </main>
  );
}

