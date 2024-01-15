/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {

  const ALLOWED_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  const [pressed, setPressed] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (ALLOWED_KEYS.includes(key) && !pressed.includes(key)) {
        setPressed((prevPressed) => [...prevPressed, key]);
      }
    };

    const handleKeyUp = (event) => {
      const { key } = event;
      setPressed(pressed.filter((k) => k !== key));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <motion.div
      className="w-full h-full bg-radial bg-no-repeat bg-right"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <div className="flex items-center justify-center h-full max-w-7xl mx-auto">
        <div className="lg:w-1/2 w-full mx-10 lg:ml-10 flex flex-col justify-between h-[80%] lg:h-auto">
          <div className="mb-20">
            <p className="text-white text-lg">Hi all👋. I am</p>
            <h1 className="text-white lg:text-6xl md:text-5xl text-5xl">
              Renaldi Dwi
            </h1>

            <h2 className=" text-[#E99287] lg:text-3xl md:text-2xl text-xl flex items-center gap-3">
              <span className="animate-pulse">&#62;</span>
              <Typewriter
                options={{
                  loop: true,
                  wrapperClassName:
                    " text-[#E99287] lg:text-3xl md:text-2xl text-xl gap-3",
                  cursorClassName:
                    " text-[#E99287] lg:text-3xl md:text-2xl text-xl gap-3",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("data-scientist_")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("love-about-ai-&-ml_")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("esport-enthusiast_")
                    .pauseFor(0)
                    .start();
                }}
              />
            </h2>
          </div>

          <div className="flex flex-col gap-2.5">
          <ul>
            <motion.button
            className="bg-[#1b2b3a] text-white py-2.5 px-3.5 rounded-lg  w-max"
            whileHover={{ scale: 1.03, boxShadow: "0px 0px 8px rgba(255,255,255)", 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
           <a download="" href="https://drive.google.com/u/0/uc?id=1Vt3uH9-mxBQuxTBXFOJo4l8Osadyl2oA&export=download">view-resume</a> 
          </motion.button>
            </ul><br />
            <p className="text-[#607B96]">
              # you can also see it on my Github page
            </p>
            <p>
              {/* <span className="text-[#4D5BCE]">const</span>{" "} */}
              <span className="text-[#43D9AD]">githubLink: str </span>{" "}
              <span className="text-white">=</span>{" "}
              <a
                href="https://github.com/renal-d"
                className="text-[#E99287]"
                target="_blank"
                rel="noreferrer"
              >
                "https://github.com/renal-d"
              </a>
            </p>

          </div>
        </div>

        <div className="w-1/2 overflow-hidden max-h-[90%] hidden lg:block mr-5">
        <div className="w-3/4 flex flex-col items-center justify-center">
        <img src="https://res.cloudinary.com/dmmbiqyub/image/upload/v1701925071/livii_fwdeuh.webp" className="image w-3/4" alt="renal-d" />
        </div>
      </div>
      </div>


    </motion.div>
  );
}
