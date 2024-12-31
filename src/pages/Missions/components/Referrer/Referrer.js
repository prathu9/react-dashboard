import MissionItem from "../MissionItem/MissionItem";
import "./Referrer.css";

const referrerData = [
    {
        id: 1,
        imageUrl: `${process.env.PUBLIC_URL}/duck.png`,
        title: "Invite 1 Friend",
        tonixAmount: "100",
        progress: "1%"
    },
    {
        id: 2,
        imageUrl: `${process.env.PUBLIC_URL}/duck.png`,
        title: "Invite 3 Friend",
        tonixAmount: "300",
        progress: "1%"
    },
    {
        id: 3,
        imageUrl: `${process.env.PUBLIC_URL}/duck.png`,
        title: "Invite 10 Friends",
        tonixAmount: "500",
        progress: "1%"
    },
    {
        id: 4,
        imageUrl: `${process.env.PUBLIC_URL}/duck.png`,
        title: "Invite 25 Friends",
        tonixAmount: "1000",
        progress: "1%"
    },
    {
        id: 5,
        imageUrl: `${process.env.PUBLIC_URL}/duck.png`,
        title: "Invite 50 Friends",
        tonixAmount: "2500",
        progress: "1%"
    },
    {
        id: 6,
        imageUrl: `${process.env.PUBLIC_URL}/duck.png`,
        title: "Invite 100 Friend",
        tonixAmount: "3000",
        gigahash: "10 GH/s",
        progress: "1%"
    },
]

const Referrer = () => {
    return(
        <div className="referrer-section">
            <div className="friends-referred">
                <span>Friends (Lv. 1)</span>
                <span>0</span>
            </div>
            {
                referrerData.map(({id,imageUrl, title, tonixAmount, gigahash, progress}) => (
                    <MissionItem
                        key={id}
                        imageUrl={imageUrl}
                        title={title}
                        tonixAmount={tonixAmount}
                        progress={progress}
                    />
                ))
            }
             <div className="spacer"></div>
        </div>
    )
}

export default Referrer;