import FilterBar from "@/components/FilterBar";
import Header from "@/components/Header";
import Select from "@/components/Select";
import SelectProduct from "@/components/SelectProduct";
import Review from "@/components/Review";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Inter } from "next/font/google";
import reviews from "@/assets/reviews.json";

const inter = Inter({ subsets: ["latin"] });

const languages = [
  { id: 1, name: "English" },
  { id: 2, name: "Japanese" },
];

const sortings = [
  { id: 1, name: "Newest first" },
  { id: 2, name: "Oldest first" },
];

const PRODUCT_COLORS = [
  "bg-red-600",
  "bg-yellow-600",
  "bg-green-600",
  "bg-blue-600",
  "bg-indigo-600",
];

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
      <div className="flex justify-between border-b border-gray-200 p-12">
        <div className="max-w-lg flex-grow">
          <SelectProduct colors={PRODUCT_COLORS} Icon={ChevronDownIcon} />
        </div>
        <div className="flex max-w-lg flex-grow justify-center gap-5">
          <div>
            <Select data={sortings} />
          </div>
          <div>
            <Select data={languages} />
          </div>
        </div>
      </div>
      <div>
        <FilterBar />
        <div className="flex flex-1 flex-col pl-80">
          <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
              <Header />

              <div className="flex flex-col gap-4">
                {reviews.slice(0, 10).map((review) => (
                  <Review
                    key={review.id}
                    review={review}
                    colors={PRODUCT_COLORS}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
