function TaskCard() {
    return (
        <div class="flex p-[15px] gap-5 items-center bg-linear-to-r from-[#9c9c9c] to-[#fb4f4d] rounded-[30px] w-full">
        {/* Fazer a funcao JS para puxar o horário no banco */}
            <h1 class="text-[50px] text-black font-bold px-[10px]">10:00</h1>
            <div class="flex bg-[#333] rounded-[30px] grid grid-cols-[5fr_1fr]">
                <h1 class="flex items-center text-[50px] text-white font-bold truncate my-[15px] ml-[15px]">Entregar o Trabalho de Biologia</h1>
                <button class="flex justify-center items-center my-[15px] mr-[15px] cursor-pointer">
                    <p class="text-[40px] text-center text-black font-bold bg-linear-to-l from-[#797979] to-[#cfcfcf] p-[3px] rounded-[10px] aspect-square h-full">+</p>
                </button>        
            </div>
        </div>
    )
}

export default TaskCard;