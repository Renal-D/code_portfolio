import emailjs from "@emailjs/browser";
import { Popover, Transition } from "@headlessui/react";
// import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { GoTriangleDown } from "@react-icons/all-files/go/GoTriangleDown";
import { BsWhatsapp, BsInstagram, BsLinkedin, BsTiktok } from 'react-icons/bs'
import { ImSteam } from "@react-icons/all-files/im/ImSteam";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { CopyBlock } from "react-code-blocks";
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

export default function ContactMe() {
  const d = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formRef = useRef();
  const [loader, setLoader] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [formData, setFormData] = useState({
    form_name: "",
    message: "",
    email: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .send(
        "service_w6leo9k",
        "template_c7c9aci",
        {
          form_name: formData.form_name,
          message: formData.message,
          email: formData.email,
        },
        "nnUZlvUCom-XAZ9LR"
      )
      .then(() => {
        setLoader(false);
        setShowNotif(true);
        setTimeout(() => setShowNotif(false), 3000);
        formRef.current.reset();
      });
  };

  return (
    <motion.div
      className="w-full h-full"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <div className="grid grid-cols-12 md:h-full">
        <div className="lg:col-span-2 md:col-span-4 col-span-full">
          <div className="border-r  border-[#585858] text-white gap-2.5 relative overflow-hidden h-full">
            <Contacts />
          </div>
        </div>
        <div className="lg:col-span-10 md:col-span-8 col-span-full ">
          <div className="w-full h-[95%]">
            {/* <div className="grid grid-cols-12 border-b border-t md:border-t-0 border-[#585858]">
              <div className="lg:col-span-2 md:col-span-4 col-span-5 text-white border-r border-[#585858] py-2.5 relative px-4">
                <button className="absolute top-1/2 -translate-y-1/2 right-4">
                  <AiOutlineClose />
                </button>
                <p className="truncate pr-5">contact-me</p>
              </div>
            </div> */}

            <div className="flex items-center justify-items-center overflow-hidden h-full">
              <div className="lg:w-1/2 w-full flex items-center justify-center lg:border-r border-[#585858] overflow-y-auto scrollbar-thin h-full">
                <form
                  onSubmit={sendEmail}
                  ref={formRef}
                  className="text-[#607B96] md:w-[80%] w-[90%] flex flex-col gap-6 relative"
                >
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="form_name">_name:</label>
                    <input
                      name="form_name"
                      type="text"
                      placeholder="Your Name"
                      className="bg-[#011221]/60 rounded-lg border-[#585858] focus:ring-[#607B96] focus:border-[#607B96]/30 text-white placeholder:text-[#465E77] p-1.5"
                      autoComplete="off"
                      required
                      onChange={(e) => {
                        setFormData({ ...formData, form_name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">_email:</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your_email@gmail.com"
                      className=" bg-[#011221]/60  rounded-lg border-[#585858] focus:ring-[#607B96] focus:border-[#607B96]/30 text-white placeholder:text-[#465E77] p-1.5"
                      autoComplete="off"
                      required
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message">_message:</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="bg-[#011221]/60  rounded-lg border-[#585858]  focus:ring-[#607B96] focus:border-[#607B96]/30 text-white placeholder:text-[#465E77]"
                      placeholder="Hey! Hire Me Please!"
                      autoComplete="off"
                      required
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                      }}
                    />
                  </div>
                  <motion.button
                    className={`text-white py-[10px] px-[14px] rounded-lg bg-[#1C2B3A] w-max  hover:shadow-sm hover:shadow-[#607B96] transition-all flex items-end gap-2`}
                    type="submit"
                    value="send"
                    whileHover={{scale: "1.01", boxShadow: "0px 0px 8px rgba(255,255,255)"}}
                    transition={{type: "spring", stiffness:"300"}}
                  >
                    <span>submit-message</span>
                    <div
                      className={`flex gap-1 mb-1 ${
                        loader ? "block" : "hidden"
                      }`}
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-white animate-bounce"></span>
                      <span className="w-[5px] h-[5px] rounded-full bg-white animate-bounce"></span>
                      <span className="w-[5px] h-[5px] rounded-full bg-white animate-bounce"></span>
                    </div>
                  </motion.button>
                  {showNotif ? (
                    <p className="animate-pulse absolute -bottom-10 toast">
                      _your email have been sent!
                    </p>
                  ) : null}
                </form>
              </div>
              <div className="hidden lg:block w-1/2 h-full">
                <div className="flex items-center justify-start overflow-hidden h-full">
                  <CopyBlock
                    language={`python`}
                    text={`def send_message() -> None:
  message: list = [
    name: str = "Renaldi Dwi",
    email: str = "renaldi31saputra@gmail.com",
    message: "Hey!",
    date: "${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}"
    ] 

send_message();
`}
                    showLineNumbers={true}
                    theme={pinkMintTheme}
                    wrapLines={true}
                    codeBlock
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Contacts() {
  const [isOpen, setIsOpen] = useState(true);
  function openPopover() {
    setIsOpen(!isOpen);
  }

  return (
    <Popover>
      <>
        <Popover.Button
          className={`
                ${isOpen ? "text-white " : "text-white/50 border-b-0"}
               flex items-center gap-2.5  border-b border-[#585858] py-2.5 px-4 w-full`}
          onClick={openPopover}
        >
          <GoTriangleDown
            className={`${isOpen ? "" : "-rotate-90"} transition-all`}
          />
          <span>contacts</span>
        </Popover.Button>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-linear duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel className="py-4 w-full flex flex-col">
            <a
              href="mailto:renaldi31saputra@gmail.com"
              className="text-[#607B96] hover:text-white hover:bg-[#f5f5f5]/20 inline-flex px-7 py-1 items-center gap-2.5 transition-colors"
            >
              <FaRegEnvelope />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/renaldidwi/"
              className="text-[#607B96] hover:text-white hover:bg-[#f5f5f5]/20 inline-flex px-7 py-0.5 items-center gap-2.5 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/renaldii06/"
              className="text-[#607B96] hover:text-white hover:bg-[#f5f5f5]/20 inline-flex px-7 py-0.5 items-center gap-2.5 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/6289619568656"
              className="text-[#607B96] hover:text-white hover:bg-[#f5f5f5]/20 inline-flex px-7 py-0.5 items-center gap-2.5 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp />
              <span>Whatsapp</span>
            </a>
            <a
              href="https://steamcommunity.com/id/renal-d/"
              className="text-[#607B96] hover:text-white hover:bg-[#f5f5f5]/20 inline-flex px-7 py-0.5 items-center gap-2.5 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <ImSteam />
              <span>Steam</span>
            </a>
            <a
              href="https://www.tiktok.com/@renmaruuqt"
              className="text-[#607B96] hover:text-white hover:bg-[#f5f5f5]/20 inline-flex px-7 py-0.5 items-center gap-2.5 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <BsTiktok />
              <span>Tiktok</span>
            </a>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}