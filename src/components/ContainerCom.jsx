import { PlayersData } from '../shared/PlayersData';
import Players from './Players.jsx';
import PlayersOfPSG from './PlayersOfPSG.jsx';
export default function ContainerCom() {
    const PlayersPSG = PlayersData.filter((p) => p.club === 'PSG');
  return (
    <>
    <Players playDataFromContainer={PlayersData}/>
    <PlayersOfPSG playerDataPSG={PlayersPSG}/>

    </>
  )
}
