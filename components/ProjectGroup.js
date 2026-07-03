"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function ProjectGroup({ label, children, defaultOpen = true }) {
  return (
    <Disclosure as="div" defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center justify-between w-full py-1.5 group cursor-pointer">
            <span className="font-handwritten text-[24px] text-black">
              {label}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`text-neutral-700 group-hover:text-neutral-400 transition-all duration-300 ease-in-out ${
                open ? "rotate-180" : "rotate-0"
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </DisclosureButton>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              open
                ? "grid-rows-[1fr] opacity-100 mt-6 mb-10"
                : "grid-rows-[0fr] opacity-0 mt-0 mb-0"
            }`}
          >
            <div className="overflow-hidden">
              <DisclosurePanel static className="flex flex-col space-y-8">
                {children}
              </DisclosurePanel>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
