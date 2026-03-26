import { useTasks } from "../../hooks/hooks";

{  /* CSS */}
import "../Home/home.css";

{  /* Components */}
import { BtnDailyTools } from "../../components/dailyTools/btn/btn";
import { TaskCard } from "../../components/painelNextTasks/nextTasksBlock/taskCard";
import { DailyClock } from "../../components/dailyTools/clockEvents/clockEvents";
import { MainFilter } from "../../components/painelNextTasks/header/mainFilter";

export function Homee() {
  const { tasks } = useTasks();

  return (
    <div id="Home" className="w-full">
      <section id="DailyTools" className="flex w-1/2 p-5">
        <DailyClock />
        <section id="CurrentData" className="w-[20%] flex flex-col justify-center items-center p-3 cursor-default">
          <p className="h-[60%] flex justify-center items-center text-[#333333] font-bold text-[60px] bg-linear-to-t from-[#797979] to-[#cfcfcf] rounded-[10px] aspect-square">{new Date().getDate()}</p>
          <p className="w-full flex justify-center text-white font-bold text-[40px]">
            {(new Date().getMonth() + 1).toString().padStart(2, "0")}/
            {new Date().getFullYear().toString().slice(-2)}
          </p>
        </section>
        <BtnDailyTools />
      </section>
      <section id="PainelNextTasks" className="w-1/2 p-5 grid">
        <section className="flex p-[15px]">
          <h1 className="flex w-[20%] justify-center items-center text-white font-bold text-[50px]">Hoje</h1>
          <MainFilter />
        </section>
          <section className="flex py-[10px] px-[20px] flex-wrap gap-5">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </section>
      </section>
    </div>
  );
}
