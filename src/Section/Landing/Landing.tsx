import CustomHeading from "../../components/CustomHeading/CustomHeading";
import Hero from "../Hero/Hero";
import { MaxWidthWrapper } from "../../components/Wrapper/MaxWidthWrapper";
import Separator from "../../components/Separator/Separator";
import Categories from "../Categories/Categories";

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
      </MaxWidthWrapper>
    </>
  );
};

export default Landing;
