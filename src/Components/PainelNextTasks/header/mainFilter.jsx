import { useState } from "react"

export function MainFilter() {
  const [active, setActive] = useState("prioridade")
  const [open, setOpen] = useState(false)
  const [isTopActive, setIsTopActive] = useState(false)

  function handleTopClick() {
    setIsTopActive(prev => !prev)
    setOpen(prev => !prev)
    }

  function handleSelect(option) {
    setActive(option)
    setOpen(false)
    setIsTopActive(false)
  }

  const other = active === "prioridade" ? "hora" : "prioridade"

  return (
        <ul className="flex items-end flex-wrap absolute flex-col gap-2 p-[10px] rounded-[10px]">
        <li onClick={handleTopClick} id="p1Filter" className="flex items-center cursor-pointer">
                <div id="bg-mainfilter" className={`flex items-center px-[15px] rounded-[10px] ${
      isTopActive
        ? "bg-gradient-to-t from-[#333] to-[#4e4e4e]"
        : "bg-gradient-to-t from-[#a6a6a6] to-[#fff]"
    }`}>
                <div className="h-[40px] aspect-square mr-[5px] bg-[#333] rounded-[10px]"></div>
                <p className={`text-[40px] font-bold mx-[10px] ${
      isTopActive
        ? "text-[white]"
        : "text-[#333]"
    }`}>{active === "prioridade" ? "Prioridade" : "Hora"}</p>
            </div>
        </li>
        {open && (
        <li onClick={() => handleSelect(other)} id="p2Filter" className="flex items-center cursor-pointer">
            <div className="flex items-center px-[15px] rounded-[10px] bg-gradient-to-t from-[#a6a6a6] to-[#ffffff]">
                <div className="h-[40px] aspect-square mr-[5px] bg-[#333] rounded-[10px]"></div>
                <p className={`text-[40px] font-bold mx-[10px] ${
      isTopActive
        ? "text-[#333]"
        : "text-[#white]"
    }`}>{other === "prioridade" ? "Prioridade" : "Hora"}</p>
            </div>
        </li>
        )}
        </ul>
    )
}