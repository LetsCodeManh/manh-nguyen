import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="px-[5%] sm:px-[10%] md:px-[15%] lg:px-[20%]">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 border-t-2 py-4">
        <p>
          Build and Design with{" "}
          <FontAwesomeIcon icon={faHeart} style={{ color: "#ff5252" }} /> by
          Manh
        </p>
        <p>&copy; 2023 Manh Nguyen, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
