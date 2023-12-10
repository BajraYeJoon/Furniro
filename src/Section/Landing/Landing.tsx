import CustomHeading from "../../components/CustomHeading/CustomHeading";
import Hero from "../Hero/Hero";
import { MaxWidthWrapper } from "../../components/Wrapper/MaxWidthWrapper";
import Separator from "../../components/Separator/Separator";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
const Landing = () => {
  return (
    <>
      <Hero />
      <MaxWidthWrapper>
        {/*  */}
        <Separator />
        {/*  */}
        <CustomHeading
          Heading="Browse The Range"
          SubHeading="
           Dive into the world of our new collection.
         "
        />
        <Categories />
        {/*  */}
        <Separator />
        {/*  */}
        <CustomHeading
          Heading="Our Products"
          SubHeading="
           Updated daily, discover our latest products.
         "
        />
        <Products />
        {/*  */}
        <Separator />
        {/*  */}
        <CustomHeading
          Heading=" #FuniroFurniture"
          SubHeading="
          Share your setup with
         "
          isReverse={true}
        />
        <img
          src="/img/grid.png"
          className="scale-150 md:scale-100 my-12 md:my-0 md:w-full h-auto"
        />
        {/*   */}
        <Separator />
        {/*  */}
      </MaxWidthWrapper>
    </>
  );
};

export default Landing;
