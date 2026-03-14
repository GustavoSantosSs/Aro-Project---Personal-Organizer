function MainFilter() {
    return (
        <ul class="flex items-start flex-wrap absolute flex-col gap-2">
        <li class="flex items-center cursor-default">
            <div class="flex items-center px-[15px] rounded-[10px] bg-linear-to-t from-[#333] to-[#6a6a6a]">
                <div class="h-[40px] aspect-square mr-[5px] bg-[#333] rounded-[10px]"></div>
                <p class="text-[40px] text-white font-bold">Prioridade</p>
            </div>
        </li>
        <li class="flex items-center cursor-default">
            <div class="flex items-center px-[15px] rounded-[10px] bg-linear-to-t from-[#333] to-[#6a6a6a]">
                <div class="h-[40px] aspect-square mr-[5px] bg-[#333] rounded-[10px]"></div>
                <p class="text-[40px] text-white font-bold">Hora</p>
            </div>
        </li>
        </ul>
    )
}

export default MainFilter;