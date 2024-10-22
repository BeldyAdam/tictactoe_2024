import { createContext } from "react";
import { useState } from "react";

export const KattContext = createContext("");

export const KattProvider = ({ children }) => {
  const [lista, setLista] = useState([
    "X",
    "X",
    " ",
    "O",
    " ",
    " ",
    " ",
    " ",
    "O",
  ]);

  const [lepes, setLepes] = useState(0);

  function katt(adat) {
    console.log("app-ban", adat);

    const sl = [...lista];

    if (lepes % 2 === 0) {
      sl[adat] = "X";
    } else {
      sl[adat] = "O";
    }

    setLista([...sl]);
    let slepes = lepes + 1;
    setLepes(slepes);

  }
  return <KattContext.Provider value={{lista, katt}}>
    {children}
    </KattContext.Provider>;
};
