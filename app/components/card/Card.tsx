import Image from "next/image";
import styles from "./card.module.sass";
import Button from "@/app/components/button/Button";
import getCategoryColor from "@/app/helpers/get-category-color";

const Card = (props: {
  className?: string;
  label?: string;
  title?: string;
  summary?: string;
  href?: string;
  btnIcon?: string;
  btnLabel?: string;
}) => {
  return (
    <div className={`${styles.card_wrap} ${props.className || ""}`}>
      <div className={styles.card}>
        <div className={styles.card_imageWrap}>
          <div className={styles.card_image}>
            <Image
              src="/thumb-featured-article.png"
              alt="thumb-featured-article"
              fill
            />
          </div>
        </div>
        <div className={styles.card_content}>
          {props.label && (
            <div
              className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(
                props.label
              )}`}
            >
              {props.label}
            </div>
          )}
          {props.title && (
            <div className={`${styles.card_title} h3 mb-20`}>
              How to Write a Good Product Review and Boost Your Sales
            </div>
          )}
          {props.summary && (
            <p className={styles.card_summary}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex est
              obcaecati esse inventore.
            </p>
          )}
          {props.href && (
            <Button href={props.href} icon={props.btnIcon}>
              {props.btnLabel || "Read More"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
