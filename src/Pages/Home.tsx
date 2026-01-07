import { useState } from "react"
import "../style.css"
import trust_img_1 from "../assets/Trust-badges/trust1.png"
import trust_img_2 from "../assets/Trust-badges/trust2.png"
import trust_img_3 from "../assets/Trust-badges/trust3.png"
import trust_img_4 from "../assets/Trust-badges/trust4.png"
import hero_img_1 from "../assets/Components-image/Hero1.png"
// import hero_img_2 from "../assets/Components-image/Hero2.png"
import hero_img_3 from "../assets/Components-image/Hero3.png"
import Featured from "../Components/Featured"
// import hero_img_4 from "../assets/Components-image/Hero4.png"
import Feature_image_1 from "../assets/Components-image/Feature1.png"
// import Feature_image_2 from "../assets/Components-image/Feature2.png"
// import Feature_image_3 from "../assets/Components-image/Feature3.png"
// import Feature_image_4 from "../assets/Components-image/Feature4.png"

const FeaturedData = [
  {
    image: Feature_image_1,
    title: "BEST CHRONOGRAPH WATCHES",
    text: "Swiss chronograph ."
  },
  {
    image: Feature_image_1,
    title: "BEST CHRONOGRAPH WATCHES",
    text: "Swiss chronograph watches  and craftsmanship."
  },
  {
    image: Feature_image_1,
    title: "BEST CHRONOGRAPH WATCHES",
    text: "Swiss chronograph watches are renowned for their precision and craftsmanship."
  }
]

const Home = () => {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % FeaturedData.length)
  };
  const prev = () => {
    setIndex((prev) => (prev - 1 + FeaturedData.length) % FeaturedData.length)
  };


  const heroImages: string[] = [
    hero_img_1,
    // hero_img_2,
    hero_img_3,
    // hero_img_4,
  ]

  const [randomImage] = useState(() =>
    heroImages[Math.floor(Math.random() * heroImages.length)]
  );

  return (
    <div>
      <div className="hero bg-black min-h-screen flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="w-full lg:w-[60%] h-[50vh] lg:h-screen">
          <img
            className="w-full h-full object-cover"
            src={randomImage}
            alt="Hero"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[40%] flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-8 lg:py-0 text-center">
          <h2 className="font-extrabold text-color text-base sm:text-lg lg:text-xl pb-3">
            THE ULTIMATE OFFER FOR WATCH ADDICTS
          </h2>

          <h1 className="font-extrabold cyan text-2xl sm:text-3xl lg:text-4xl mb-4">
            WATCHOHOLIC SALE
          </h1>

          <div className="mb-4">
            <p className="font-extrabold cyan text-lg sm:text-xl flex flex-wrap items-center justify-center gap-2">
              UPTO
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">40%</span>
              OFF
            </p>
          </div>

          <p className="text-color text-xs sm:text-sm lg:text-base leading-relaxed">
            AVAIL 0% EMI | EARN TATA NEU POINTS | FREE BATTERY REPLACEMENT
          </p>
        </div>
      </div>
      <div className="trust-bagers lato bg-white px-4 sm:px-8 md:px-12 lg:px-15 py-4">
        <div className="flex flex-wrap gap-6 items-center justify-center md:justify-between">

          <div className="flex flex-col md:flex-row text-center items-center gap-2 md:gap-4 text-sm sm:text-base">
            <img src={trust_img_1} alt="Trust Badge" className="w-12 h-12 md:w-10 md:h-10 object-contain" />
            <p className="font-medium whitespace-nowrap">BUY WITH TRUST</p>
          </div>

          <div className="flex flex-col md:flex-row text-center items-center gap-2 md:gap-4 text-sm sm:text-base">
            <img src={trust_img_3} alt="Trust Badge" className="w-12 h-12 md:w-10 md:h-10 object-contain" />
            <p className="font-medium whitespace-nowrap">FREE BATTERY REPLACEMENT</p>
          </div>

          <div className="hidden md:flex flex-row text-center items-center gap-4 text-base">
            <img src={trust_img_2} alt="Trust Badge" className="w-10 h-10 object-contain" />
            <p className="font-medium whitespace-nowrap">EARN NEU POINTS</p>
          </div>

          <div className="hidden sm:flex flex-col md:flex-row text-center items-center gap-2 md:gap-4 text-sm sm:text-base">
            <img src={trust_img_4} alt="Trust Badge" className="w-12 h-12 md:w-10 md:h-10 object-contain" />
            <p className="font-medium whitespace-nowrap">INTEREST FREE EMI</p>
          </div>

        </div>
      </div>
      <div className="features-section py-10 ">
        <div className="relative">
          <div className="flex gap-4 mt-4">
            <button className="pl-20" onClick={prev}>Prev</button>
            <Featured features={FeaturedData[index]} />
            <button className="pr-20" onClick={next}>Next</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home