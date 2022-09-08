import { IAdvantageProps } from "./Advantage.props";
import styles from "./Advantage.module.css";
import { TickIcon } from "./icons/TickIcon";
import Htag from "../Htag";
import Text from "../Text";

const Advantage = ({ advantage }: IAdvantageProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.flexWrapper}>
        <TickIcon />
        <p className={styles.title}>{advantage.title}</p>
      </div>
      <p className={styles.text}>{advantage.description}</p>
    </div>
  );
};

export default Advantage;
