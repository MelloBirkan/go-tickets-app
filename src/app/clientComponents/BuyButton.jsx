"use client";
import { useSeats } from "@/app/clientComponents/SeatsContext";

export default function BuyButton() {
  const {
    valorTotal,
    novaSessao,
    selectedSeats,
    updateSessao,
    setValorTotal,
    setSelectedSeats,
  } = useSeats();

  const handleClick = (event) => {
    event.preventDefault();
    selectedSeats.length > 0
      ? alert("Compra efetuada com sucesso!")
      : alert("Selecione 1 ou mais assentos primeiro!");

    const newSessao = { ...novaSessao };
    selectedSeats.forEach((seatNumber) => {
      const seatIndex = newSessao.assentos.findIndex(
        (seat) => seat.numero === seatNumber
      );
      if (seatIndex !== -1) {
        newSessao.assentos[seatIndex].disponivel = false;
      }
    });

    updateSessao(newSessao);
    setValorTotal(0); // Zera o valor total
    setSelectedSeats([]); // Limpa os assentos selecionados
  };

  return (
    <button
      type="button"
      className={
        "flex flex-col bg-sky-600 items-center py-2 rounded-2xl md:w-[450px] w-11/12 mt-auto mb-8 text-cyan-100 md:mt-16"
      }
      onClick={handleClick}
    >
      <h2 className={"text-3xl font-light"}>Comprar</h2>
      <p>R$ {valorTotal}</p>
    </button>
  );
}
