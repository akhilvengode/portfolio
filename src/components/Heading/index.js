import classnames from "classnames";
import styles from "./index.module.css";

export const Heading = ({
  children,
  className,
  textAlign = "left",
  varient = "h1",
}) => {
  const Heading = varient;
  return (
    <Heading
      className={classnames(
        styles.heading,
        styles[`heading--${textAlign}`],
        className
      )}
    >
      {children}
    </Heading>
  );
};
