import { ReactNode } from "react";

export type MaybeRenderProp<PropsType> =
  | ReactNode
  | ((props: PropsType) => React.ReactNode);
