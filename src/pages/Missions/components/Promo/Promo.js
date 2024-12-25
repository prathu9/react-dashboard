import "./Promo.css";
import MissionItem from "../MissionItem/MissionItem";

const promoData = [
  {
    id: 1,
    imageUrl: `${process.env.PUBLIC_URL}/tonza.png`,
    title: "Start 🎰 Tonza App",
    tonixAmount: "7777",
  },
  {
    id: 2,
    imageUrl: `${process.env.PUBLIC_URL}/tonza.png`,
    title: "Make your first deposit and play any game!",
    tonixAmount: "77777",
    gigahash: "77 GH/s",
  },
  {
    id: 3,
    imageUrl: `${process.env.PUBLIC_URL}/tonza.png`,
    title: "Join Tonza Withdrawals",
    tonixAmount: "1111",
  },
  {
    id: 4,
    imageUrl: `${process.env.PUBLIC_URL}/instagram.png`,
    title: "Follow Tonza Instagram",
    tonixAmount: "1111",
  },
  {
    id: 5,
    imageUrl: `${process.env.PUBLIC_URL}/xcom.png`,
    title: "Follow Tonza on X",
    tonixAmount: "1111",
  },
  {
    id: 6,
    imageUrl: `${process.env.PUBLIC_URL}/tonza.png`,
    title: "Make a deposit from 30 TON and play Tonza Games!",
    tonixAmount: "777777",
    gigahash: "770",
  },
  {
    id: 7,
    imageUrl: `${process.env.PUBLIC_URL}/tonza.png`,
    title: "Make a deposit from 100 TON and play Tonza Games!",
    tonixAmount: "7777777",
    gigahash: "7770",
  },
  {
    id: 8,
    imageUrl: `${process.env.PUBLIC_URL}/tonza.png`,
    title: "Make a deposit from 100 TON and play Tonza Games!",
    tonixAmount: "7777777",
    gigahash: "7770",
  },
  {
    id: 9,
    imageUrl: `${process.env.PUBLIC_URL}/tonza.png`,
    title: "Make a deposit from 100 TON and play Tonza Games!",
    tonixAmount: "7777777",
    gigahash: "7770",
  },
];

const Promo = () => {
  return (
    <div className="promo-section">
      {promoData.map(({ imageUrl, title, tonixAmount, gigahash }) => (
        <MissionItem
          imageUrl={imageUrl}
          title={title}
          tonixAmount={tonixAmount}
          gigahash={gigahash}
        />
      ))}
      <div className="spacer"></div>
    </div>
  );
};

export default Promo;
