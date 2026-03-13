import BTNsDailyTools from "./BTNs/BTNs";
import DailyClock from "./Clock/Clock";
import CurrentDate from "./CurrentDate/CurrentDate";

function DailyTools() {
    return (
        <section class="w-1/2 p-5 flex" id="DailyTools-container">
            <DailyClock/>
            <CurrentDate/>
            <BTNsDailyTools/>
        </section>
    )
}

export default DailyTools;