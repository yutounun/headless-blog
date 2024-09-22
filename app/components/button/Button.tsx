import Link from "next/link";
import styles from "./button.module.sass";

type Props = {
  href?: string;
  children: React.ReactNode;
  icon?: string;
};

export const IconTypes = {
  ARROW_ROGHT: "ARROW_ROGHT",
};

const Button = (props: Props) => {
  if (props.href) {
    return (
      <Link className={styles.button} href={props.href}>
        {props.children}
        <Button.Icon iconType={props.icon} />
      </Link>
    );
  }
  return <button className={styles.button}>{props.children}</button>;
};

Button.Icon = function ButtonIcon({ iconType }: { iconType?: string }) {
  if (iconType === "ARROW_ROGHT") {
    return (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18.5L15 12L9 5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
};

export default Button;
