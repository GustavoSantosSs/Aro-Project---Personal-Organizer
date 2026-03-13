import NextTasksFilter from "./Filter/Filter";
import NextTasksHeaderTitle from "./Title/NextTasksHeaderTitle";

function NextTasksHeader () {
    return (
        <section id="NextTasksTitle-container" class="flex w-full">
            <NextTasksHeaderTitle />
            <NextTasksFilter />
        </section>
    )
}

export default NextTasksHeader;