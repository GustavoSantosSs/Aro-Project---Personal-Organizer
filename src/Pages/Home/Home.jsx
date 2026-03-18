import DailyTools from '../../Components/DailyTools/DailyTools.jsx'
import PainelNextTasks from '../../Components/PainelNextTasks/PainelNextTasks.jsx';
import './Home.css'

function Home() {
  return (
    <div id='Home' class="w-full">
    <DailyTools/>
    <PainelNextTasks/>
    </div>
  )
}

export default Home;
