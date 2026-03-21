import { useState } from "react";

export function SubFilter({active}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(true);


  function handleTopClick() {
    setIsOpen((prev) => !prev);
  }

  function handleSelect() {
    setActive((prev) => !prev);
  }

  return (
    <section>
    {active === "prioridade" && (
      <ul className="flex flex-wrap gap-2 flex-col items-start absolute p-[10px] rounded-[10px]">
        <li
          onClick={handleTopClick}
          className="flex bg-gradient-to-r from-[#f77] to-[#f93636] p-2 rounded-[10px]"
        >
          <h1 className="text-white bg-[#333] rounded-[10px] cursor-default text-[40px] font-bold px-2 cursor-pointer">
            G1
          </h1>
        </li>
        {isOpen && (
          <li className="flex bg-gradient-to-r from-[#fdd488] to-[#f99e36] p-2 rounded-[10px]">
            <h1 className="text-white bg-[#333] rounded-[10px] cursor-default text-[40px] font-bold px-2 cursor-pointer">
              G2
            </h1>
          </li>
        )}
      </ul> 
    )}
    {active === "hora" && (
      <ul className="flex flex-wrap items-start absolute rounded-[10px] bg-linear-to-t from-[#a6a6a6] to-[#ffffff] p-2">
        <li onClick={handleSelect} className="flex rounded-[10px]">
          <h1
            className={`text-[40px] font-bold px-2 cursor-pointer rounded-[10px] ${
              isActive ? "text-[#333] bg-[white]" : "text-[#707070] bg-[#333]"
            }`}
          >
            AM
          </h1>
        </li>
        <li onClick={handleSelect}
         className="flex rounded-[10px]">
          <h1
            className={`text-[40px] font-bold px-2 cursor-pointer rounded-[10px] bg-[#333] ${
              isActive ? "text-[#707070] bg-[#333]" : "text-[#333] bg-[white]"
            }`}
          > PM
          </h1>
        </li>
      </ul> 
    )}
    </section>
    )
}
