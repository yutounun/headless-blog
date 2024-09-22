import React from "react";
import getCategoryColor from "../helpers/get-category-color";
import Image from "next/image";
import styles from "./style.module.sass";

const BlogDetail = () => {
  return (
    <>
      <div className="pb-80 container">
        <div className="row">
          <div className="col col_9">
            <div
              className={`h6 mb-20 c-${getCategoryColor("Product Reviews")}`}
            >
              Product Reviews
            </div>
            <h2 className="mb-50">
              How to Write a Good Product Review and Boost Your Sales
            </h2>
            <Image
              className={`${styles.featuredImage} mb-50`}
              src="/thumb-featured-article.png"
              alt="thumb-featured-article"
              width="1280"
              height="387"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              incidunt deleniti minima perferendis, a autem eveniet, ratione
              magni itaque dolores cupiditate quos facere alias enim, dolore
              distinctio aperiam architecto facilis. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates veniam iure ipsa quis similique. Tempore voluptatibus
              minima accusamus dolor rerum velit sed doloribus, aperiam tempora
              expedita, itaque omnis, pariatur optio?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              incidunt deleniti minima perferendis, a autem eveniet, ratione
              magni itaque dolores cupiditate quos facere alias enim, dolore
              distinctio aperiam architecto facilis. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates veniam iure ipsa quis similique. Tempore voluptatibus
              minima accusamus dolor rerum velit sed doloribus, aperiam tempora
              expedita, itaque omnis, pariatur optio?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              incidunt deleniti minima perferendis, a autem eveniet, ratione
              magni itaque dolores cupiditate quos facere alias enim, dolore
              distinctio aperiam architecto facilis. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates veniam iure ipsa quis similique. Tempore voluptatibus
              minima accusamus dolor rerum velit sed doloribus, aperiam tempora
              expedita, itaque omnis, pariatur optio?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
