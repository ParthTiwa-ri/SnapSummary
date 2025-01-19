import Image from "next/image";
import Link from "next/link";
import data from "@/data/homepage.json";

function MainContent() {
  return (
    <main className="flex-grow">
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 ">
        {/* Text Section */}
        <div className="text-left lg:w-1/2">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            {data.textSection.title.split(" ")[0]} <br />
            <span className="text-[#E91515]">{data.textSection.highlight}</span>
          </h1>
          <p className="sm:text-lg text-base mb-8">
            {data.textSection.description}
          </p>
          <div className="flex gap-4">
            <Link href="./upload">
              <button className="bg-[#E91515] text-white text-base font-semibold px-4 sm:px-8 py-2 sm:py-4 rounded-md hover:bg-red-600 transition">
                Upload Now
              </button>
            </Link>
            <Link href="./learnmore">
              <button className="text-white border text-base border-white px-4 sm:px-8 py-2 sm:py-4 rounded-md hover:bg-white hover:text-black transition">
                Learn More →
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 px-8 py-8 hidden lg:flex">
          {data.imageSection.map((image, index) => (
            <div
              key={index}
              className="w-72 h-48 bg-gray-800 rounded-md overflow-hidden flex items-center justify-center border-4"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={image.className}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainContent;
