import { DatePickerWithRange } from "./DatePickerWithRange";
import FilterByRating from "./FilterByRating";
import Search from "./Search";

export default function FilterBar() {
  return (
    <div className="fixed bottom-0 top-64 w-80">
      <div className="relative h-full border-r border-gray-200">
        <div className="overflow-y-auto ">
          <Search />
          <DatePickerWithRange />
          <FilterByRating />
        </div>
      </div>
    </div>
  );
}
