import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import CharacterList from "./components/Characters/CharacterList";

// Mock de la función fetch para simular una solicitud a la API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            origin: { name: "Earth" },
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          },
          {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            origin: { name: "Earth" },
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          },
          // Añade más datos según tu necesidad
        ],
        info: {
          pages: 3, // Número total de páginas
        },
      }),
  })
);

test("renders character list component", async () => {
  // Renderiza el componente
  const { getByText } = render(<CharacterList />);

  // Espera a que se carguen los datos
  await waitFor(() => getByText("Rick Sanchez"));

  // Verifica que los datos se hayan renderizado correctamente
  expect(getByText("Rick Sanchez")).toBeInTheDocument();
  expect(getByText("Morty Smith")).toBeInTheDocument();
  // Añade más expectativas según tu componente

  // Simula hacer clic en el botón de siguiente página
  fireEvent.click(getByText("Next Page"));

  // Espera a que se cargue la siguiente página
  await waitFor(() => getByText("Summer Smith"));

  // Verifica que los datos de la segunda página se hayan renderizado correctamente
  expect(getByText("Summer Smith")).toBeInTheDocument();
  // Añade más expectativas según tu componente

  // Puedes continuar haciendo clic en los botones de paginación y verificando los resultados
});
