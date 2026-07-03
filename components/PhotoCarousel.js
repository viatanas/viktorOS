const photos = [
  {
    src: "/img/photo-1.png",
    alt: "Viktor at the beach by a rock arch",
    note: "Praia das Catedrais, Spain",
  },
  {
    src: "/img/photo-4.png",
    alt: "Viktor in the snowy mountains",
    note: "Vitosha, Bulgaria",
  },
  {
    src: "/img/photo-3.png",
    alt: "Viktor in front of colorful art",
    note: "A random wall in London",
  },
  {
    src: "/img/photo-2.png",
    alt: "Viktor piggyback in Shanghai",
    note: "Shanghai, China",
  },
  {
    src: "/img/photo-5.png",
    alt: "Viktor skiing in the mountains",
    note: "Borovets, Bulgaria",
  },
];

export default function PhotoCarousel() {
  return (
    <div className="-mx-4 lg:-mx-72 xl:-mx-80 mt-10 lg:mt-14">
      <div className="flex gap-1.5 overflow-x-auto snap-x snap-mandatory px-4 lg:px-0 lg:overflow-visible lg:grid lg:grid-cols-5 scrollbar-hide">
        {photos.map((photo, i) => (
          <div key={i} className="flex-shrink-0 w-[72%] lg:w-auto snap-center">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <span className="block mt-2 font-indie text-[14px] -rotate-1 text-neutral-400 text-center">
              {photo.note}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
