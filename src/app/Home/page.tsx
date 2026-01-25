"use client";

export default function First() {
  return (

    <main className="min-h-screen flex flex-col bg-[#111] text-white">
      {/* Header */}
      {/* <header className="flex justify-center items-center py-6">
        <div className="text-center">
          <h1 className="bg-[#AC1514] text-5xl font-extrabold text-[white] tracking-widest">
            JUGNU
          </h1>
          <p className=" font-extrabold text-sm text-[white] mt-1">
            امدادی وسائل برائے گھریلو تشدد
          </p>
        </div>
      </header> */}

      {/* Two sections */}
      <section className="flex flex-col md:flex-row flex-1">
        {/* Left block */}
        <div className="flex flex-1 justify-center items-center p-10 text-center relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/land2.png)' }}>
          {/* Color overlay */}
          <div className="absolute inset-0 bg-[#AC1514] opacity-80"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex justify-center mb-6">

              <img src={"/hand.svg"} />
            </div>
            <h2
              className=" font-extrabold text-[60.15px] leading-[100%] tracking-[0] text-center uppercase mb-3"
            >
              DOMESTIC VIOLENCE <br /> RESOURCE CENTER
            </h2>

            <a
              href="/Social"
              className=" font-extrabold text-[18px] leading-[100%] tracking-[0] text-center uppercase text-white underline underline decoration-solid hover:text-gray-200 transition"
            >
              CLICK HERE
            </a>
          </div>
        </div>

        {/* Right block */}
        <div className="flex flex-1 justify-center items-center p-10 text-center relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/land1.png)' }}>
          {/* Color overlay */}
          <div className="absolute inset-0 bg-[#1C1C1C] opacity-80"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex justify-center mb-6">


              <img src={"/earth.svg"} />
            </div>
            <h2
              className=" font-extrabold text-[60.15px] leading-[100%] tracking-[0] text-center uppercase mb-5">
              SOCIAL IMPACT <br /> CONSULTANCY
            </h2>
            <a
              href="/Corporate"
              className=" font-extrabold text-[18px] leading-[100%] tracking-[0] text-center uppercase text-white underline underline decoration-solid hover:text-gray-200 transition"
            >
              CLICK HERE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
