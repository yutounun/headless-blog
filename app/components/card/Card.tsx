import Image from "next/image";
import styles from "./card.module.sass";
import Button from "@/app/components/button/Button";
import getCategoryColor from "@/app/helpers/get-category-color";

const Card = (props: {
  className?: string;
  label: string;
  title: string;
  summary: string;
  href: string;
  btnIcon?: string;
  btnLabel?: string;
  imgSrc: string;
  imgAlt: string;
}) => {
  return (
    <div className={`${styles.card_wrap} ${props.className || ""}`}>
      <div className={styles.card}>
        <div className={styles.card_imageWrap}>
          <div className={styles.card_image}>
            <Image src={props.imgSrc} alt={props.imgAlt} fill />
          </div>
        </div>
        <div className={styles.card_content}>
          <div
            className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(
              props.label
            )}`}
          >
            {props.label}
          </div>
          <div className={`${styles.card_title} h3 mb-20`}>{props.title}</div>
          <p className={styles.card_summary}>{props.summary}</p>
          <Button href={props.href} icon={props.btnIcon}>
            {props.btnLabel || "Read More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
