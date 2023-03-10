import { motion } from "framer-motion";
import { sections } from "../constants/navigation";
import TextRandomizer from "../reuse/TextRandomizer";
import { itemNav } from "../utils/motion";

type Props = {
  isActive: boolean;
  setIsActive: (isAcive: boolean) => void;
};

const NavigationMenuList = ({ isActive, setIsActive }: Props) => {
  return (
    <ul className="flex flex-col gap-4 justify-center h-screen w-screen ">
      {sections.map((section, index) => (
        <motion.li
          animate={isActive ? "open" : "close"}
          variants={itemNav(index)}
          whileHover={{ scale: 1.1 }}
          key={index}
          className="navigation__item border-y-4 border-dark dark:border-dark"
        >
          <motion.a
            whileTap={{ scale: 0.9 }}
            href={section.href}
            className="navigation__link font-semibold relative block text-dark dark:text-dark hover:bg-primary dark:hover:bg-secondary transition-colors duration-300"
            onClick={() => setIsActive(false)}
          >
            <TextRandomizer text={section.label} />
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavigationMenuList;
