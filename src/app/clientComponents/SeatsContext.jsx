"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import sessao from "../sessao.json"

const SeatsContext = createContext();

export const SeatsProvider = ({ children }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    setValorTotal(selectedSeats.length * sessao.preco);
  }, [selectedSeats]);

  const toggleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((numero) => numero !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };

  return (
    <SeatsContext.Provider value={{ selectedSeats, toggleSeatSelection, valorTotal }}>
      {children}
    </SeatsContext.Provider>
  );
};

export const useSeats = () => useContext(SeatsContext);