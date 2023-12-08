import CustomHeading from "../../components/CustomHeading/CustomHeading";
import Hero from "../Hero/Hero";
import { MaxWidthWrapper } from "../../components/Wrapper/MaxWidthWrapper";
import Separator from "../../components/Separator/Separator";
import Categories from "../Categories/Categories";
import Grid from "../Grid/Grid";

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
        {/*  */}
        <Separator />
        {/*  */}
        <CustomHeading
          Heading="Our Products"
          SubHeading="
           Updated daily, discover our latest products.
         "
          isReverse={true}
        />
        <Grid />
      </MaxWidthWrapper>
    </>
  );
};

export default Landing;
