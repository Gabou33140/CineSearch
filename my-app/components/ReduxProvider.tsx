import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

export const ReduxProvider = (props: PropsWithChildren) => (
    <Provider store={store}>{props.children}</Provider>
)