import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
import TeamComponent from '../components/team-component/team-component';

const MainPage = () => {
    const data = useContext(DataContext)[0]
    return(
        <div>
            {data.teams.map((team, index) => <TeamComponent teamData = {team} key = {`team-${index}`}/>)}
        </div>
    )
}

export default MainPage;