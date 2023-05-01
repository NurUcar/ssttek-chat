
import { IDefaultButtonProps } from "@/components/shared/button/types/Default";
import { Icon } from "@/components/shared/button/variants/Icon";
import { classNames } from "@/utils/classNames";


const Button = (props: IDefaultButtonProps) => {
  const {
    children,
    disabled = false,
    className = "",
    spanClassName = "",
    color = "red",
    leftIcon,
    rightIcon,
    buttonType,
    type = "button",
    isLoading = false,
    ...rest
  } = props;

  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      className={classNames(
        " rounded-[60px] transition-all flex items-center justify-center",
        `bg-${color}`,
        buttonType === "ghost" &&
        "font-normal text-base text-blueJeans disabled:text-philippineGray",
        className)}
      {...rest}
    >
      {leftIcon && <div>{leftIcon}</div>}
      <span className={classNames("w-full", spanClassName)}>{children}</span>
      {rightIcon && <div>{rightIcon}</div>}
    </button>
  );
};

Button.Icon = Icon;

export { Button };
