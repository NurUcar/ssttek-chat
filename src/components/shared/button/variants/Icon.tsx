
import { IIconButtonProps } from "@/components/shared/button/types/Icon";
import { classNames } from "@/utils/classNames";
import { motion } from 'framer-motion';
import { useState } from "react";

const Icon = ({
  icon,
  className,
  iconClassName,
  rotateOnHover = false,
  text,
  scaleOnHover,
  disabled = false,
  onClick,
  ...rest
}: IIconButtonProps) => {
  const [isHovered, setisHovered] = useState(false);
  const Icon = icon;
  return (
    <button
      className={classNames(
        text
          ? "text-sm justify-evenly rounded px-3"
          : "rounded-full justify-center",
        "flex items-center",
        className ? className : ""
      )}
      onClick={(e) => onClick && onClick(e)}
      disabled={disabled}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      {...rest}
      type="button"
    >
      <motion.div
        animate={{
          rotate: rotateOnHover && isHovered ? 360 : 0,
          scale: scaleOnHover && isHovered ? 1.2 : 1,
        }}
      >
        <Icon
          className={classNames(
            iconClassName ? iconClassName : "",
            text ? "w-[14px] h-[16px]" : ""
          )}
        />
      </motion.div>
      {text && <span className="px-2">{text}</span>}
    </button>
  );
};

export { Icon };
