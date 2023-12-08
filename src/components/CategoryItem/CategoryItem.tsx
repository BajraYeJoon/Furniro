import { Link } from "react-router-dom";

interface CategoryItemProps {
  label: string;
  ImgSrc: string;
}

const CategoryItem = ({ label, ImgSrc }: CategoryItemProps) => {
  return (
    <div className="flex flex-col md:max-w-xs rounded-lg items-center justify-center">
      <div>
        <Link to={`/products/${label}`}>
          <img className="rounded-t-lg" src={ImgSrc} alt="" />
        </Link>
      </div>

      <div className="py-5 text-primary/80 text-base font-semibold not-italic">
        {label}
      </div>
    </div>
  );
};

export default CategoryItem;
