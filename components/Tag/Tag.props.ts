import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant: "green" | "red" | "outlined" | "ghost" | "grey";
  size?: "s" | "m";
  href?: string;
  children: ReactNode;
}
