import Image from "next/image";
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <header className="pt-80 pb-80">
      <div className="container">
        <div className="flex-row">
          <Image
            className={styles.header_image}
            src="/me.jpg"
            alt="Dev Whisperer"
            width="100"
            height="100"
          />
          <h1 className="h1">Dev Whisperer</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
