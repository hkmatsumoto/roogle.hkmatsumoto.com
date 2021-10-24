import { createContext, Dispatch, SetStateAction } from "react";

type ScopesContext = {
    scopes: string[],
    setScopes: Dispatch<SetStateAction<string[]>>
}

export const ScopesContext = createContext({} as ScopesContext)
