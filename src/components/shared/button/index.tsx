
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
    type = "button",
    isLoading = false,
    ...rest
  } = props;

  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      className={classNames(
        " rounded-[40px] transition-all flex items-center justify-center",
        `bg-${color}`,
        className)}
      {...rest}
    >
      {leftIcon && <div>{leftIcon}</div>}

    </button>
  );
};

Button.Icon = Icon;

export { Button };
