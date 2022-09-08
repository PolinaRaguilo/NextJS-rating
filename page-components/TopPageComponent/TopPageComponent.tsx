import { Card, Htag, SalaryInfoCard, Sort, Tag } from "../../components";
import { ITopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import RateIcon from "../../assets/icons/RateIcon";
import { TopLevelCategory } from "../../interfaces/page";
import Advantage from "../../components/Advantage";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useReducer } from "react";
import { sortReducer } from "./reducers/sort.reducer";

const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: ITopPageComponentProps) => {
  const [{ products: sortProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };
  return (
    <div>
      <div className={styles.titleWrapper}>
        <Htag tag="h1">{page.title}</Htag>
        <Tag variant="grey">{products && products.length}</Tag>
        <Sort sort={sort} setSort={setSort} />
      </div>
      {products &&
        products.map((product) => {
          return <div key={product._id}>{product.title}</div>;
        })}

      <div className={styles.hhTitleWrapper}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag variant="red">hh.ru</Tag>
      </div>

      {firstCategory === TopLevelCategory.Courses && (
        <div className={styles.hhContentWrapper}>
          <Card className={styles.hhCount}>
            <p className={styles.hhCountTitle}>Всего вакансий</p>
            <p className={styles.hhCountNumber}>{page.hh?.count}</p>
          </Card>
          <Card className={styles.salaryWrapper}>
            <SalaryInfoCard
              title="Начальный"
              salaryValue={page.hh?.juniorSalary}
            />
            <SalaryInfoCard
              title="Средний"
              salaryValue={page.hh?.middleSalary}
            />
            <SalaryInfoCard
              title="Профессионал"
              salaryValue={page.hh?.seniorSalary}
            />
          </Card>
        </div>
      )}
      {page.advantages && !!page.advantages.length && (
        <div className={styles.advantagesWrapper}>
          <Htag tag="h2">Преимущества</Htag>
          {page.advantages.map((item) => {
            return <Advantage key={item._id} advantage={item} />;
          })}
        </div>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <div className={styles.advantagesWrapper}>
        <Htag tag="h2">Получаемые навыки</Htag>
        {page.tags.map((tag) => {
          return (
            <Tag variant="outlined" key={tag}>
              {tag}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default TopPageComponent;
