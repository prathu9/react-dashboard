import MissionItem from "../MissionItem/MissionItem";
import "./Special.css";

const specialData = [
    {
      id: 1,
      imageUrl: `${process.env.PUBLIC_URL}/spinner.png`,
      title: "Welcome Bonus",
      tonixAmount: "500"
    },
    {
      id: 2,
      imageUrl: `${process.env.PUBLIC_URL}/bolt.png`,
      title: "Boost Mining Power",
      tonixAmount: "10000"
    },
    {
      id: 3,
      imageUrl: `${process.env.PUBLIC_URL}/xcom.png`,
      title: "Follow TONIX on X",
      tonixAmount: "500",
    },
    {
      id: 4,
      imageUrl: `${process.env.PUBLIC_URL}/beavers.png`,
      title: "Start 🦫Beavers App",
      tonixAmount: "1500",
    },
    {
      id: 5,
      imageUrl: `${process.env.PUBLIC_URL}/tonza.png`,
      title: "Join Tonza News channel",
      tonixAmount: "2000",
    },
    {
      id: 6,
      imageUrl: `${process.env.PUBLIC_URL}/instagram.png`,
      title: "Follow TONIX on Instagram",
      tonixAmount: "1200"
    },
    {
      id: 7,
      imageUrl: `${process.env.PUBLIC_URL}/tonly.png`,
      title: "Join Tonly channel",
      tonixAmount: "1000"
    },
    {
      id: 8,
      imageUrl: `${process.env.PUBLIC_URL}/cryptyx.png`,
      title: "Join Cryptyx channel",
      tonixAmount: "1000"
    },
    {
      id: 9,
      imageUrl: `${process.env.PUBLIC_URL}/xcom.png`,
      title: "Follow Cryptyx on X",
      tonixAmount: "1000"
    },
    {
        id: 10,
        imageUrl: `${process.env.PUBLIC_URL}/spinner2.png`,
        title: "Start TONIFY Mine-To-Earn Bot",
        tonixAmount: "1500"
      },
      {
        id: 11,
        imageUrl: `${process.env.PUBLIC_URL}/spinner3.png`,
        title: "Start TETHERIX Mine-To-Earn USDT App!",
        tonixAmount: "3500"
      },
      {
        id: 12,
        imageUrl: `${process.env.PUBLIC_URL}/tonly.png`,
        title: "Stake on TONLY",
        tonixAmount: "10000"
      },
      {
        id: 13,
        imageUrl: `${process.env.PUBLIC_URL}/tonly.png`,
        title: "Start TONLY Staking",
        tonixAmount: "10000"
      },
  ];

const Special = () => {
    return(<div className="special-section">
        {specialData.map(({ imageUrl, title, tonixAmount, gigahash }) => (
        <MissionItem
          imageUrl={imageUrl}
          title={title}
          tonixAmount={tonixAmount}
          gigahash={gigahash}
        />
      ))}
      <div className="spacer"></div>
    </div>)
}

export default Special;
