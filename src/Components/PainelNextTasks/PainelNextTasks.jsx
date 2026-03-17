import NextTasksHeader from "./Header/Header";
import NextTasksBlock from "./NextTasksBlock/NextTasksBlock";

function PainelNextTasks() {
    return (
        <section class="w-1/2 p-5 flex flex-wrap" id="PainelNextTasks-container">
            <NextTasksHeader />
            <NextTasksBlock />
        </section>
    )
}

export default PainelNextTasks;