interface CustomHeadingProps {
  isReverse?: boolean;
  Heading: string;
  SubHeading: string;
}

const CustomHeading = ({
  isReverse,
  Heading,
  SubHeading,
}: CustomHeadingProps) => {
  return (
    <div
      className={`flex ${
        isReverse ? "flex-col-reverse" : "flex-col "
      } items-center`}
    >
      <div className="font-bold text-2xl leading-normal text-primary">
        {Heading}
      </div>
      <div
        className=" tracking-wide font-medium text-base not-italic text-secondary
"
      >
        {SubHeading}
      </div>
    </div>
  );
};

export default CustomHeading;
