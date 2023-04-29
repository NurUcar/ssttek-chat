import React, { DetailedHTMLProps, ReactElement } from "react";

export interface IDefaultButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "xs" | "default";
  color?: string;
  buttonType?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  leftIcon?: ReactElement<any>;
  rightIcon?: ReactElement<any>;
  spanClassName?: string;
  isLoading?: boolean;
}
