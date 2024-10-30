import Image from "next/image";

const sessao = require("./sessao.json");

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


export default function Home() {
  return (
    <>
      <TitleAndDescription title={sessao.titulo} description={sessao.horario}/>

      <button className={"flex flex-col bg-sky-600 px-8 py-2 rounded-2xl"}>
        <h2>Comprar</h2>
        <p>R$ 125,00</p>
      </button>
    </>
  );
}

