"use client"
"use client"
import {useSeats} from "@/app/clientComponents/SeatsContext";

export default function BuyButton() {
  const {valorTotal} = useSeats();

  return <button
    className={"flex flex-col bg-sky-600 items-center py-2 rounded-2xl w-3/4 mt-auto mb-8 text-cyan-100"}
  onClick={() => alert("Compra efetuada com sucesso!")}>
    <h2 className={"text-3xl font-light"}>Comprar</h2>
    <p>R$ {valorTotal}</p>
  </button>;
}