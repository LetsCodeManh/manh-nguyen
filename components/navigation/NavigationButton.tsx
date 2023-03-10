import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { socials } from "../constants/navigation";
import SquareButton from "../reuse/SquareButton";
import Icon from "../reuse/ReactIconReuse";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type Props = {
  isActive: boolean;
};

const NavigationButton = ({ isActive }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <motion.div
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      className={`absolute bottom-6 left-1/2 -translate-x-1/2 gap-4 center`}
    >
      {socials.map((social, index) => (
        <SquareButton
          key={index}
          target="_blank"
          stylesButton="border-dark dark:border-dark hover:bg-primary dark:hover:bg-secondary"
          stylesIcon="text-dark dark:text-dark"
          link={social.link}
          icon={social.icon}
          label={social.label}
        />
      ))}

      <motion.button
        aria-label="Toggle theme"
        whileHover={{ scale: 1.2, borderRadius: "99rem" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className={`square border-dark dark:border-dark hover:bg-primary dark:hover:bg-secondary`}
      >
        <Icon
          icon={currentTheme === "dark" ? MdLightMode : MdDarkMode}
          className="text-dark dark:text-dark"
        />
      </motion.button>
    </motion.div>
  );
};

export default NavigationButton;
