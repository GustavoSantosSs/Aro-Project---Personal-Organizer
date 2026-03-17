import NextTasksFilter from "./Filter/Filter";
import NextTasksHeaderTitle from "./Title/NextTasksHeaderTitle";

function NextTasksHeader () {
    return (
        <section id="NextTasksHeader-container" class="flex w-full p-[15px]">
            <NextTasksHeaderTitle />
            <NextTasksFilter />
        </section>
    )
}

export default NextTasksHeader;