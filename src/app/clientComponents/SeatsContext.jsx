// src/app/clientComponents/SeatsContext.jsx
"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import sessao from "../sessao.json"

const SeatsContext = createContext();

export const SeatsProvider = ({ children }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const [novaSessao, setNovaSessao] = useState(sessao);

  useEffect(() => {
    setValorTotal(selectedSeats.length * novaSessao.preco);
  }, [selectedSeats, novaSessao]);

  const toggleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((numero) => numero !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };

  const updateSessao = (newSessao) => {
    setNovaSessao(newSessao);
  };

  return (
    <SeatsContext.Provider value={{ selectedSeats, toggleSeatSelection, valorTotal, novaSessao, updateSessao }}>
      {children}
    </SeatsContext.Provider>
  );
};

export const useSeats = () => useContext(SeatsContext);