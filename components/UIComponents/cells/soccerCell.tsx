import SoccerCellOnline from "./soccerCellOnline";
import SoccerCellSingle from "./soccerCellSingle";

interface SoccerCellProps {
    cellId: number;
    openModal: any;
    isOnlineGame?: boolean;
  }

const SoccerCell: React.FC<SoccerCellProps> = ({cellId, openModal,isOnlineGame}) => {
  
    if(isOnlineGame==true)
    return (
        <SoccerCellOnline cellId={cellId} openModal={openModal}/>
    )
    else
    return (
        <SoccerCellSingle cellId={cellId} openModal={openModal}/>
    )
}

export default SoccerCell;