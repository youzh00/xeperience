import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Search() {
  return (
    <div>
      <div className="relative my-1 rounded-md shadow-sm w-[300px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
