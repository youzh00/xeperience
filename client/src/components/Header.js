import {
  ArrowDownTrayIcon,
  BellIcon,
  ChevronDownIcon,
  CodeBracketIcon,
  RssIcon,
} from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <div className="align-center flex justify-between">
      <p>Viewing 1-10 of 175 reviews</p>
      <div className="flex items-center gap-2">
        <button className="flex gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 ">
          <BellIcon className="h-5 w-5 text-gray-800" aria-hidden="true" />
          Create Alert
          <ChevronDownIcon
            className="h-5 w-5 text-gray-800"
            aria-hidden="true"
          />
        </button>
        <button className="flex gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 ">
          <RssIcon className="h-5 w-5 text-gray-800" aria-hidden="true" />
          <CodeBracketIcon
            className="h-5 w-5 text-gray-800"
            aria-hidden="true"
          />
          <ArrowDownTrayIcon
            className="h-5 w-5 text-gray-800"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}
