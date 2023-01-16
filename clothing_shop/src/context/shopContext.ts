import { createContext } from "react";
import { ShopState, initialState } from "../components/hooks";

export const ShopContext = createContext<ShopState>(initialState);
