export default function BookingTable(){
    const date=new Date;

    const style={
        "flex-direction":"",
    }
    return(
        <div className="BookTable flex">
            <div className="Table"></div>
            <div className="Tableform">
                <form>
                    <fieldset>
                        <legend>Date-Time</legend>
                        <input type="date" ></input>
                        <input type="time"></input>
                    </fieldset>
                    <fieldset>
                        <legend>Table</legend>
                        
                    </fieldset>
                    <fieldset>
                        <legend>No of People</legend>
                        
                    </fieldset>         
                </form>
                
            </div>
            <div className="conform">mlkm</div>
        </div>
    );
}


// `${date.getDate}+${date.getMonth}+${date.getFullYear}`