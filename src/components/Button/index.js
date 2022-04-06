import classnames from "classnames";
import styles from "./index.module.css";

export const Button = ({
  children,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classnames(
        styles.button,
        disabled && styles["button--disabled"]
      )}
      {...props}
    >
      {children}
    </button>
  );
};
