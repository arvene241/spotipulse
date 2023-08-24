"use client";

import { store } from "@/libs/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const StateProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
