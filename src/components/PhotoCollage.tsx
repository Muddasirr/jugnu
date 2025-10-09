"use client";

const images = [
  // Left column
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",

  // Center large
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",

  // Bottom right group
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=600&q=80",
];

const PhotoCollage = () => {
  return (
    <section className="bg-white py-12 ">
      <div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full"

        style={{ gridAutoRows: "350px" }}
      >
        {/* Left column */}
        <img
          src={"./gallery5.png"}
          alt=""
          className="object-cover w-full h-full rounded-lg row-span-1"
        />
        {/* Large center image */}
        <img
          src={"./gallery1.png"}
          alt=""
          className="object-cover w-full h-full rounded-lg md:col-span-2 md:row-span-2"
        />
        <img
          src={"./gallery6.png"}
          alt=""
          className="object-cover w-full h-full rounded-lg row-span-1"
        />
        <img
          src={"./gallery4.png"}
          alt=""
          className="object-cover w-full h-full rounded-lg row-span-1"
        />
        {/* Bottom right images */}
        <img
          src={"./gallery2.png"}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
        <img
          src={"./gallery3.png"}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
        
      </div>
    </section>
  );
};

export default PhotoCollage;
