export function MainFilter() {
    return (
        <div className="w-[70%] justify-end flex">
        <ul id="MainFilterList" className="flex items-start flex-wrap absolute flex-col gap-2 p-[10px] rounded-[10px]">
        <li id="PrioridadeFilter" className="flex items-center cursor-pointer">
            <div className="flex items-center px-[15px] rounded-[10px] bg-linear-to-t from-[#333] to-[#6a6a6a]">
                <div className="h-[40px] aspect-square mr-[5px] bg-[#333] rounded-[10px]"></div>
                <p className="text-[40px] text-white font-bold mx-[10px]">Prioridade</p>
            </div>
        </li>
        <li id="HoraFilter" className="flex items-center cursor-pointer">
            <div className="flex items-center px-[15px] rounded-[10px] bg-linear-to-b from-[#a6a6a6] to-[#fff]">
                <div className="h-[40px] aspect-square mr-[5px] bg-[#333] rounded-[10px]"></div>
                <p className="text-[40px] text-[#333]] font-bold mx-[10px]">Hora</p>
            </div>
        </li>
        </ul>
        </div>
    )
}