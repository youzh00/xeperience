import { cn, timeAgo, getCountryCode } from "@/lib/utils";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/20/solid";

export default function Review({ colors, review }) {
  return (
    <div className="overflow-hidden rounded-md bg-white p-6 shadow-[0_0_15px_2px_rgb(0,0,0,0.1)]">
      <header className="flex items-center justify-start gap-5">
        <span
          className={cn(
            colors[1 % colors.length],
            "inline-block h-7 w-7 flex-shrink-0 rounded-lg"
          )}
        />
        <span class="inline-flex items-center rounded bg-gray-100 px-2 py-1.5 text-sm font-medium text-gray-800">
          {review.appStoreName}
        </span>
        <h3 className="text-lg font-semibold">{review.reviewHeading}</h3>
        <div className="flex items-center gap-1">
          {[...Array(parseInt(review.rating))].map((e, i) => (
            <StarIcon key={i} className="h-6 w-6 text-yellow-600" />
          ))}
        </div>
      </header>
      <div className="mt-4">
        <p className="text-base text-gray-900">{review.reviewText}</p>
      </div>
      <footer className="mt-4 flex items-center gap-4 text-sm font-semibold">
        <div className=" flex flex-1 items-center gap-6">
          <span>by {review.reviewUserName}</span>
          <span>{timeAgo(new Date(review.reviewDate))}</span>
          <span>{review.version}</span>
          <span className="flex items-center gap-2">
            <img
              src={`https://flagsapi.com/${getCountryCode(
                review.countryName
              )}/flat/32.png`}
              className="w-8"
            />
            <p>{review.countryName}</p>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <p>reply</p>
          <p className="flex items-center gap-1">
            share <ChevronDownIcon className="h-4 w-4" />
          </p>
        </div>
      </footer>
    </div>
  );
}
