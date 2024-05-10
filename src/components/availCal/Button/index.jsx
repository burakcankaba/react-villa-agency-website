import React from "react";
import { memo } from "react";
import styles from "./styles.module.scss";
import {AiOutlineArrowRight} from "react-icons/ai"
export function Button({
  label,
  children,
  disabled,
  onClickHandle,
  className,
  withArrow = true,
}) {
  const handleOnClick = () =>
    typeof onClickHandle === "function" && onClickHandle();
  return (
    <button
      disabled={disabled}
      className={`${className} ${styles.buttonWrapper}`}
      onClick={handleOnClick}
    >
      {label ?? children}
      {withArrow && <AiOutlineArrowRight/>}
      
    </button>
  );
}

export default memo(Button);
