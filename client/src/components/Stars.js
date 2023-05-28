import { StarIcon } from "@heroicons/react/20/solid";

const Stars = ({ count }) => {
  return (
    <div className=" flex items-center justify-start gap-1">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          className={index + 1 > count ? "text-gray-400" : "text-yellow-600"}
          width={15}
          height={15}
          key={index}
        />
      ))}
    </div>
  );
};

export default Stars;
