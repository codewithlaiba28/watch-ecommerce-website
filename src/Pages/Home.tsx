import { useState } from "react"
import "../style.css"
import hero_img_1 from "../assets/Components-image/Hero1.png"
// import hero_img_2 from "../assets/Components-image/Hero2.png"
import hero_img_3 from "../assets/Components-image/Hero3.png"
// import hero_img_4 from "../assets/Components-image/Hero4.png"

const Home = () => {
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

    </div>
  )
}

export default Home