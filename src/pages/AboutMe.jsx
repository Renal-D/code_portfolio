import { Popover, Transition } from "@headlessui/react";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { GoTriangleDown } from "@react-icons/all-files/go/GoTriangleDown";
// import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
// import { RiFolder3Fill } from "@react-icons/all-files/ri/RiFolder3Fill";
import { SiMarkdown } from "@react-icons/all-files/si/SiMarkdown";
// import { VscCollapseAll } from "@react-icons/all-files/vsc/VscCollapseAll";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CopyBlock } from "react-code-blocks";
import gearData from "../data/GearData.json";
import { IoLogoPython } from "@react-icons/all-files/io5/IoLogoPython";
// import { IoImageSharp } from "@react-icons/all-files/io5/IoImageSharp";
const pinkMintTheme = {
  lineNumberColor: "#999",
  lineNumberBgColor: "#f0f0f0",
  backgroundColor: "000000", // black
  textColor: "#ffffff", // white
  substringColor: "#FD4454", // pink
  keywordColor: "#66d9ef", // blue
  attributeColor: "#e6db74", // kuning
  selectorAttributeColor: "#e6db74", // kuning
  docTagColor: "#e6db74", // kuning
  nameColor: "#f8f8f2", // white
  builtInColor: "#FD4454", // pink
  literalColor: "#ae81ff", // purple
  bulletColor: "#ae81ff", // purple
  codeColor: "#FD4454", // pink
  additionColor: "#e6db74", // kuning
  regexpColor: "#e6db74", // kuning
  symbolColor: "#e6db74", // kuning
  variableColor: "#FD4454", // pink
  templateVariableColor: "#e6db74", // kuning
  linkColor: "#ae81ff", // purple
  selectorClassColor: "#e6db74", // kuning
  typeColor: "#66d9ef", // blue
  stringColor: "#43D9AD", // hijau
  selectorIdColor: "#e6db74", // kuning
  quoteColor: "#ae81ff", // purple
  templateTagColor: "#43D9AD", // hijau
  deletionColor: "#e6db74", // kuning
  titleColor: "#66d9ef", // blue
  sectionColor: "#66d9ef", // blue
  commentColor: "#75715e", // gray
  metaKeywordColor: "#66d9ef", // blue
  metaColor: "#75715e", // gray
  functionColor: "#66d9ef", // blue
  numberColor: "#ae81ff", // purple
};

export default function AboutMe() {
  const [render, setRender] = useState("my-bio");

  function Render(value) {
    if (value === "/") {
      return <Root />;
    } else if (value === "my-bio") {
      return <MyBio closeBio={setRender} />;
    } else if (value === "skills") {
      return <Skills closeSkills={setRender} />;
    } else if (value === "gear") {
      return <Gear closeGear={setRender} />;
    } else if (value === "journey") {
      return <Journey closeJourney={setRender} />;
    }
  }

  return (
    <motion.div
      className="w-full h-full"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <div className="lg:grid grid-cols-12 h-full flex flex-col">
        <div className="col-span-2 grid lg:grid-cols-6">
          <div className="col-span-6 lg:border-r lg:border-b-0 border-b border-[#585858] text-white gap-2.5 relative overflow-hidden">
            <PersonalInfo setRender={setRender} render={render} />
          </div>
        </div>
        <AnimatePresence initial={false}>{Render(render)}</AnimatePresence>
      </div>
    </motion.div>
  );


function Root() {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center text-white col-span-10"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      Nothing here, click something
    </motion.div>
  );
}

function MyBio({ closeBio }) {
  return (
    <motion.div
      className="col-span-10 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#585858]">
          <div className="lg:col-span-2 md:col-span-6 col-span-12  text-white border-r border-[#585858] py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={() => {
                closeBio("/");
              }}
            >
              <AiOutlineClose />
            </button>
            <p className="pr-5 truncate">personal.py</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-thin h-full">
        <CopyBlock
          language={`python`}
          text=
          {`name: str = "Renaldi Dwi"
location: str = "Sidoarjo, Indonesia"

hobbies: list = [
  "Coding",
  "Data-analysis",  
  "Basketball", 
  "Music", 
  "Esport",
  "More Gaming...", 
]
          `}
          showLineNumbers={true}
          theme={pinkMintTheme}
          codeBlock
        />
      </div>
    </motion.div>
  );
}
function Skills({ closeSkills }) {
  return (
    <motion.div
      className="col-span-10 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#585858]">
          <div className="lg:col-span-2 md:col-span-6 col-span-12  text-white border-r border-[#585858] py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4 "
              onClick={() => {
                closeSkills("/");
              }}
            >
              <AiOutlineClose />
            </button>
            <p className="pr-5 truncate">skills.py</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-thin h-full">
        <CopyBlock
          language={`python`}
          text={`# Most important skills
  programming_and_data-analysis: dict = {
    "SQL" : "beginner",
    "Python" : "beginner",
    "Excel" : "intermediate",
    "Tableau" : "intermediate",
    "PowerBI" : "beginner",
    "PowerPoint" : "intermediate",
  }
  editing: dict = {
    "Photoshop" : "intermediate",
    "Premiere Pro" : "beginner",
    "CorelDraw" : "beginner", 
    "Capcut" : "intermediate", 

  favorite_libs: list = [
    "Matplotlib",
    "Seaborn",  
    "Scikit-Learn", 
]

# am still learning this...
    ]
`}
          showLineNumbers={true}
          theme={pinkMintTheme}
          codeBlock
        />
      </div>
    </motion.div>
  );
}

function Journey({ closeJourney }) {
  return (
    <motion.div
      className="col-span-10 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#585858]">
          <div className="lg:col-span-2 md:col-span-6 col-span-12 text-white border-r border-[#585858] py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={() => {
                closeJourney("/");
              }}
            >
              <AiOutlineClose />
            </button>
            <p className="pr-5 truncate">journey.py</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-thin h-full">
        <CopyBlock
          language={`python`}
          text={`# Learning Information
  school: dict = {
    "SMAN 1 Kawedanan" : "IPA",
    "Universitas Negeri Malang" : "Physics",
  }
  course: dict = {
    "RevoU" : "Mini-Course Data Analytics",
    "Binar Academy x Digitalent Kominfo" : "Data Science",
  }

# Organization Information
  organization: dict = {
    "SMAN 1 Kawedanan" : "Pramuka",
    "SMAN 1 Kawedanan" : "Basketball",
    "Universitas Negeri Malang" : "Komite Olahraga FMIPA",
  }

# Work Information
  profession: str = "Job Seeker",
  employer: str = "",
`}
          showLineNumbers={true}
          theme={pinkMintTheme}
          codeBlock
        />
      </div>
    </motion.div>
  );
}

function Gear({ closeGear }) {
  function Content({ title, list }) {
    return (
      <div className="mb-10">
        <h1 className="text-2xl font-medium text-white mb-5">{title}</h1>
        <div className="pl-10">
          <ul className="list-disc text-white/80">
            {list.map((data, index) => {
              return (
                <div key={index}>
                  <li className="font-medium text-lg text-white/90">
                    {data.item}
                  </li>
                  <p className="mb-2.5">{data.desc}</p>
                  <div className="flex gap-2.5 mb-5">
                    {data.type?.map((data, index) => {
                      return (
                        <div
                          className="text-xs bg-[#1b2b3a] py-1 px-2 rounded-full flex items-center gap-1.5 w-max "
                          key={index}
                        >
                          <div className="w-1 h-1 rounded-full bg-white" />
                          <span>{data}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  

  return (
    <motion.div
      className="col-span-10 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#585858]">
          <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white border-r border-[#585858] py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={() => closeGear("/")}
            >
              <AiOutlineClose />
            </button>
            <p>gear.md (preview)</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-thin h-full lg:p-16 md:p-8 p-4">
        {gearData.gearType.map((data, index) => {
          return <Content title={data.gear} key={index} list={data.gearList} />;
        })}
        <img src="setup.jpg" alt="My personal setup" />
      </div>
    </motion.div>
  );
}

function PersonalInfo({ setRender, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenBio] = useState(true);
  // const [isOpenImg, setIsOpenImg] = useState(true);

  function openPopover() {
    setIsOpen(!isOpen);
  }

  // function CollapseAll() {
  //   setIsOpenBio(false);
  //   setIsOpenImg(false);
  // }

  // function openPopoverBio() {
  //   setIsOpenBio(!isOpenBio);
  // }
  // function openPopoverImg() {
  //   setIsOpenImg(!isOpenImg);
  // }

  return (
    <Popover>
      <>
        <div className="relative">
          <Popover.Button
            className={`
                ${isOpen ? "text-white" : "text-white/50"}
               flex items-center gap-2.5 border-b border-[#585858] py-2.5 px-4 w-full`}
            onClick={openPopover}
          >
            <GoTriangleDown
              className={`${isOpen ? "" : "-rotate-90"} transition-all`}
            />
            <span className="text-left pr-5 truncate">personal info</span>
          </Popover.Button>
          {/* <button
            onClick={CollapseAll}
            className="absolute top-1/2 -translate-y-1/2 right-2"
          >
            <VscCollapseAll />
          </button> */}
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-in duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel className=" text-white py-4">
            <Popover.Group className={`flex flex-col gap-1.5`}>
              <Popover>
                <>
                  {/* <Popover.Button
                    className={`
                ${isOpenBio ? "text-white" : "text-white/50"}
               flex items-center gap-2.5  w-full transition-colors`}
                    onClick={openPopoverBio}
                  >
                    <HiChevronRight
                      className={`${
                        isOpenBio ? "rotate-90" : ""
                      } transition-all`}
                    />
                    <RiFolder3Fill
                      className={`${
                        isOpenBio ? "text-[#E99287]" : "text-[#b36d64]"
                      } transition-colors`}
                    />
                    <span className="pr-5 truncate">bio</span>
                  </Popover.Button> */}

                  <Transition
                    show={isOpenBio}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-linear duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                    className="flex flex-col"
                  >
                    <Popover.Panel
                      className={`px-7 py-1 inline-flex items-center gap-2.5 hover:text-white transition-colors ${
                        render === "my-bio" ? "text-white bg-[#f5f5f5]/20" : "text-[#607B96] hover:bg-[#f5f5f5]/20"
                      }`}
                      as="button"
                      onClick={() => setRender("my-bio")}
                    >
                      <IoLogoPython />
                      <span className="truncate">personal.py</span>
                    </Popover.Panel>
                    <Popover.Panel
                      className={`px-7 py-1 inline-flex items-center gap-2.5 hover:text-white transition-colors ${
                        render === "journey" ? "text-white bg-[#f5f5f5]/20" : "text-[#607B96] hover:bg-[#f5f5f5]/20"
                      }`}
                      as="button"
                      onClick={() => setRender("journey")}
                    >
                      <IoLogoPython />
                      <span className="truncate">journey.py</span>
                    </Popover.Panel>
                    <Popover.Panel
                      className={`px-7 py-1 inline-flex items-center gap-2.5 hover:text-white transition-colors ${
                        render === "skills" ? "text-white bg-[#f5f5f5]/20" : "text-[#607B96] hover:bg-[#f5f5f5]/20"
                      }`}
                      as="button"
                      onClick={() => setRender("skills")}
                    >
                      <IoLogoPython />
                      <span className="truncate">skills.py</span>
                    </Popover.Panel>
                    <Popover.Panel
                      className={`px-7 py-1 inline-flex items-center gap-2.5 hover:text-white transition-colors ${
                        render === "gear" ? "text-white bg-[#f5f5f5]/20" : "text-[#607B96] hover:bg-[#f5f5f5]/20"
                      }`}
                      as="button"
                      onClick={() => setRender("gear")}
                    >
                      <SiMarkdown />
                      <span className="truncate">gear.md</span>
                    </Popover.Panel>
                    </Transition>
                </>
              </Popover>
            </Popover.Group>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}}