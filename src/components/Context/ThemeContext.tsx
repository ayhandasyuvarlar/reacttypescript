import { createContext } from "react";
import { theme } from "./theme";

type THEMETYPE = {
    children : React.ReactNode
}
 
export const ThemeContext = createContext(theme)

export default function ThemeContextProvicer({children}:THEMETYPE)  {
  return (
   <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}
