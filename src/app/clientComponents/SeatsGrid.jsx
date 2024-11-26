"use client";
import { useSeats } from "@/app/clientComponents/SeatsContext";
import sessao from "@/app/sessao.json";

function Square({ color = "white", modifier = "" }) {
  const colorClasses = {
    slate: "dark:bg-slate-600 bg-slate-400",
    white: "dark:bg-slate-100 bg-slate-800",
    cyan: "bg-cyan-600",
  };

  return (
    <div
      className={`${colorClasses[color]} size-8 rounded-md ${modifier}`}
    ></div>
  );
}

export const SeatsGrid = () => {
  const { selectedSeats, toggleSeatSelection } = useSeats();
  const { novaSessao } = useSeats();

  return (
    <div className="flex justify-center items-center">
      <ul className="inline-grid grid-cols-8 gap-4 mx-6">
        {novaSessao.assentos.map((seat, index) => (
          <li
            key={index}
            onClick={() => seat.disponivel && toggleSeatSelection(seat.numero)}
          >
            <Square
              modifier="m-1"
              color={
                seat.disponivel
                  ? selectedSeats.includes(seat.numero)
                    ? "cyan"
                    : "white"
                  : "slate"
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
