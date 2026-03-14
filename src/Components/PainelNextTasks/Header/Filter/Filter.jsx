import MainFilter from "./Main/MainFilter";
import SubFilter from "./Sub/SubFilter";

function NextTasksFilter() {
    return (
        <section id="NextTasksFilter-container"class="w-[65%] flex gap-5 mt-[10px]">
        {/* Mudança com Click no botão de Filtro: border-2 border-white rounded-[10px] bg-[#9999992b] */}
            <section id="MainFilter-container" class="w-[70%] justify-end flex">
                <MainFilter />
            </section>
            <section id="SubFilter-container" class="w-[30%]">
                <SubFilter />
            </section>
        </section>
    )
}

export default NextTasksFilter;