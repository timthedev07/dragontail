import { FunctionArguments } from "../types/FormControl";

export const ariaAttr = (condition: boolean | undefined) =>
  condition ? true : undefined;
export function callAllHandlers<T extends (event: any) => void>(
  ...fns: (T | undefined)[]
) {
  return function func(event: FunctionArguments<T>[0]) {
    fns.some((fn) => {
      fn?.(event);
      return event?.defaultPrevented;
    });
  };
}
