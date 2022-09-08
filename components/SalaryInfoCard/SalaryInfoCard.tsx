import RateIcon from "../../assets/icons/RateIcon";
import { priceRUB } from "../../helpers/helpers";
import styles from "./SalaryInfoCard.module.css";
import { ISalaryInfoCardProps } from "./SalaryInfoCard.props";

const SalaryInfoCard = ({ title, salaryValue }: ISalaryInfoCardProps) => {
  const middleClasses =
    title === "Средний" || title === "Профессионал" ? styles.filled : "";
  return (
    <div>
      <p className={styles.hhCountTitle}>{title}</p>
      <p className={styles.hhSalaryValue}>{priceRUB(salaryValue || 0)}</p>
      <div className={styles.hhSalaryStars}>
        <RateIcon className={styles.filled} />
        <RateIcon className={middleClasses} />
        <RateIcon className={title === "Профессионал" ? styles.filled : ""} />
      </div>
    </div>
  );
};

export default SalaryInfoCard;
