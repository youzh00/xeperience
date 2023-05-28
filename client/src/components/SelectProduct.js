import { cn } from "@/lib/utils";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import reviews from "@/assets/reviews.json";

const products = [...new Set(reviews.map((review) => review.appID))].map(
  (appId, idx) => ({
    id: idx,
    name:
      appId
        .replace(/^com\./, "")
        .charAt(0)
        .toUpperCase() + appId.slice(5),
  })
);

const colors = [
  "bg-red-600",
  "bg-yellow-600",
  "bg-green-600",
  "bg-blue-600",
  "bg-indigo-600",
];

export default function SelectProduct() {
  const [selected, setSelected] = useState(products[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            Select Product
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <span
                  aria-label={selected.online ? "Online" : "Offline"}
                  className={cn(
                    colors[selected.id % colors.length],
                    "inline-block h-4 w-4 flex-shrink-0 rounded-sm"
                  )}
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {products.map((product) => (
                  <Listbox.Option
                    key={product.id}
                    className={({ active }) =>
                      cn(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={product}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={cn(
                              colors[product.id % colors.length],
                              "inline-block h-4 w-4 flex-shrink-0 rounded-sm"
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={cn(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {product.name}
                            <span className="sr-only">
                              is {product.online ? "online" : "offline"}
                            </span>
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={cn(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
