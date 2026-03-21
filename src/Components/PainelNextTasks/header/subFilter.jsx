import { useState } from "react";

export function SubFilter() {
  const [isOpen, setIsOpen] = useState(false);

  function handleTopClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <section>
      <ul className="hidden flex-wrap gap-2 flex-col items-start absolute p-[10px] rounded-[10px]">
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
      <ul className="flex flex-wrap items-start absolute rounded-[10px] bg-linear-to-t from-[#a6a6a6] to-[#ffffff] p-2">
        <li
          onClick={handleTopClick}
          className="flex rounded-[10px]"
        >
          <h1 className="text-[#333] bg-[white] rounded-[10px] cursor-default text-[40px] font-bold px-2 cursor-pointer">
            AM
          </h1>
        </li>
          <li className="flex rounded-[10px]">
            <h1 className="text-[#707070] bg-[#333] rounded-[10px] cursor-default text-[40px] font-bold px-2 cursor-pointer">
              PM
            </h1>
          </li>
      </ul>
    </section>
  );
}
