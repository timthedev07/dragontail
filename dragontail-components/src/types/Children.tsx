import { ReactNode } from "react";

export type MaybeRenderProp<PropsType> =
  | ReactNode
  | ((props: PropsType) => React.ReactNode);

export const isFunction = <T extends Function = Function>(
  value: any
): value is T => {
  return typeof value === "function";
};

export const runIfFn = <T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T => {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
};
