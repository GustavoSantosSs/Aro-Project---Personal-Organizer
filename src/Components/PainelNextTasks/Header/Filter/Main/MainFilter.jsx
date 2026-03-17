function MainFilter() {
    function handleClick() {
        document.getElementById("HoraFilter").classList.toggle("hidden");
        const list = document.getElementById("MainFilterList");
        list.classList.toggle("border-[3px]");
        list.classList.toggle("border-white");
        list.classList.toggle("bg-[#ffffff42]");
        {/* Alterar para o metodo UseState*/}
    }
    return (
        <ul id="MainFilterList" class="flex items-start flex-wrap absolute flex-col gap-2 p-[10px] rounded-[10px]">
        <li id="PrioridadeFilter" class="flex items-center cursor-pointer" onClick={handleClick}>
            <div class="flex items-center px-[15px] rounded-[10px] bg-linear-to-t from-[#333] to-[#6a6a6a]">
                <div class="h-[40px] aspect-square mr-[5px] bg-[#333] rounded-[10px]"></div>
                <p class="text-[40px] text-white font-bold mx-[10px]">Prioridade</p>
            </div>
        </li>
        <li id="HoraFilter" class="hidden flex items-center cursor-pointer">
            <div class="flex items-center px-[15px] rounded-[10px] bg-linear-to-b from-[#a6a6a6] to-[#fff]">
                <div class="h-[40px] aspect-square mr-[5px] bg-[#333] rounded-[10px]"></div>
                <p class="text-[40px] text-[#333]] font-bold mx-[10px]">Hora</p>
            </div>
        </li>
        </ul>
    )
}

export default MainFilter;