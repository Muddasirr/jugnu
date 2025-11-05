// components/AboutUs.jsx
export default function AboutUs() {
    return (
      <section className="min-h-screen bg-white text-black px-6 md:px-16 py-12 flex flex-col md:flex-row items-start gap-10">
        {/* LEFT SECTION — Images with connecting border */}
        <div className="relative flex flex-col items-center md:w-1/2">
          {/* First Image */}
          <div className="w-64 h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/woman1.jpg"
              alt="Abuse Survivor"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Connecting line */}
          <div className="absolute top-[60%] left-[45%] w-[2px] h-[180px] bg-red-500 rotate-[150deg] md:rotate-[130deg]"></div>
  
          {/* Second Image */}
          <div className="w-64 h-72 rounded-lg overflow-hidden shadow-lg mt-32">
            <img
              src="/images/woman2.jpg"
              alt="Hiding Woman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  
        {/* RIGHT SECTION — Text Content */}
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl font-semibold">
            About <span className="text-red-600 font-bold">us</span>
          </h2>
  
          <div className="space-y-2">
            <h3 className="font-semibold text-red-600">Who Are We / Our Story</h3>
            <p className="text-gray-800">
              At The Jugnu Project, we work towards a world where...
            </p>
          </div>
  
          <div className="space-y-2">
            <h3 className="font-semibold text-red-600">
              Do You Need Family Violence Support?
            </h3>
            <p>
              If you, or someone you know, is in immediate danger, please call{" "}
              <span className="font-semibold text-red-600">15 (Police)</span>.
            </p>
          </div>
  
          <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-md text-sm">
            <p>
              If you would like to find specialist family violence services or
              NGOs/organizations supporting survivors, please view our{" "}
              <span className="font-semibold text-red-600 cursor-pointer underline">
                VICTIM’S DIRECTORY
              </span>
              .
            </p>
            <p className="mt-2">
              You can also find various resources on family violence on our{" "}
              <span className="font-semibold text-red-600 cursor-pointer underline">
                RESOURCES page
              </span>
              .
            </p>
          </div>
  
          <div className="flex gap-4 pt-4">
            <button className="border border-red-600 text-red-600 font-semibold px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition">
              Read Jugnu’s Story
            </button>
            <button className="border border-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition">
              About The Founder
            </button>
          </div>
        </div>
      </section>
    );
  }
  