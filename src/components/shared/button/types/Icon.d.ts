import React, { DetailedHTMLProps } from "react";
import { IIconProps } from "../../icon";

export interface IIconButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: React.ComponentType<IIconProps>;
	iconClassName?: string;
	rotateOnHover?: boolean;
	scaleOnHover?: boolean;
	text?: string;
}
