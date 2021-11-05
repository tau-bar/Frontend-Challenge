import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
import TeamComponent from '../components/team-component/team-component';
import './MainPage.styles.scss'

const MainPage = () => {
    const data = useContext(DataContext)[0]
    return(
        <div>
            <h1 className="opening-challenge-title">Opening Challenge</h1>
            <div className="main-page-body">
                {data.teams.map((team, index) => <TeamComponent teamData = {team} key = {`team-${index}`}/>)}
            </div>
        </div>
    )
}

export default MainPage;