import MainFilter from "./Main/MainFilter";
import SubFilter from "./Sub/SubFilter";

function NextTasksFilter() {
    return (
        <div class="w-[50%] relative flex">
        {/* Mudança com Click no botão de Filtro: mt-[10px] */}
        <ul class="flex w-full justify-evenly items-center flex-wrap absolute p-2">
        {/* Mudança com Click no botão de Filtro: border-2 border-white rounded-[10px] bg-[#9999992b] */}
            <MainFilter />
            <SubFilter />
        </ul>
        </div>
    )
}

export default NextTasksFilter;