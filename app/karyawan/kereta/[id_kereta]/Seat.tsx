import { SeatType } from "../../types"
import DropKursi from "./dropSeat"
import EditSeat from "./editSeat"
export const dynamic = "force-dynamic";

type props = {
    item: SeatType
} 
    
const Seat = (myProp: props) => {
    return(
        <div className="size-16 rounded-md flex items-center justify-center bg-sky-700 relative">
            <span className="text-white font-semibold m-12 mb-8">
                {myProp.item.seat_number}
            </span>

            <div className="rounded-md gap-3 flex flex-wrap justify-center items-center">
            <EditSeat item={myProp.item} />
            <DropKursi item={myProp.item} />
            </div>
        </div>
    )
}

export default Seat