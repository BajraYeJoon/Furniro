import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { CATEGORIES_ITEMS } from "../../lib/constants";

interface CategoriesProps {
  label: string;
  ImgSrc: string;
}

const Categories = () => {
  return (
    <div className="flex flex-col mt-5 md:mt-12 md:flex-row gap-6 md:gap-8 items-center justify-center ">
      {CATEGORIES_ITEMS.map(({ label, ImgSrc }: CategoriesProps) => (
        <CategoryItem label={label} ImgSrc={ImgSrc} />
      ))}
    </div>
  );
};

export default Categories;
