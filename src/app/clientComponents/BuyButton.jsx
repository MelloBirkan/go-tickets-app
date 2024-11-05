// src/app/clientComponents/BuyButton.jsx
"use client"
import { useSeats } from "@/app/clientComponents/SeatsContext";

export default function BuyButton() {
  const { valorTotal, novaSessao, selectedSeats, updateSessao } = useSeats();

  const handleClick = (event) => {
    event.preventDefault();
    alert("Compra efetuada com sucesso!");

    const newSessao = { ...novaSessao };
    selectedSeats.forEach(seatNumber => {
      const seatIndex = newSessao.assentos.findIndex(seat => seat.numero === seatNumber);
      if (seatIndex !== -1) {
        newSessao.assentos[seatIndex].disponivel = false;
      }
    });

    updateSessao(newSessao);
  };

  return (
    <button
      type="button"
      className={"flex flex-col bg-sky-600 items-center py-2 rounded-2xl w-3/4 mt-auto mb-8 text-cyan-100"}
      onClick={handleClick}
    >
      <h2 className={"text-3xl font-light"}>Comprar</h2>
      <p>R$ {valorTotal}</p>
    </button>
  );
}