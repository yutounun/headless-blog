import Card from "@/app/components/card/Card";
import { IconTypes } from "./components/button/Button";

export default function Home() {
  return (
    <div className="container">
      <Card
        title="How to Write a Good Product Review and Boost Your Sales"
        btnLabel="Read More"
        btnIcon={IconTypes.ARROW_ROGHT}
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        href="#"
        label="Product Reviews"
        className="mb-30"
      />
      <div className="row">
        <div className="col col_4 m-mw-100">
          <Card
            title="How to Write a Good Product Review and Boost Your Sales"
            btnLabel="Read More"
            btnIcon={IconTypes.ARROW_ROGHT}
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            href="#"
            className="mb-30"
            label="Product Reviews"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            title="How to Write a Good Product Review and Boost Your Sales"
            btnLabel="Read More"
            btnIcon={IconTypes.ARROW_ROGHT}
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            href="#"
            className="mb-30"
            label="Travel Guides"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            title="How to Write a Good Product Review and Boost Your Sales"
            btnLabel="Read More"
            btnIcon={IconTypes.ARROW_ROGHT}
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            href="#"
            className="mb-30"
            label="Opinions"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            title="How to Write a Good Product Review and Boost Your Sales"
            btnLabel="Read More"
            btnIcon={IconTypes.ARROW_ROGHT}
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            href="#"
            className="mb-30"
            label="Product Reviews"
          />
        </div>
      </div>
    </div>
  );
}
