import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISalaryInfoCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  salaryValue: number | undefined;
}
