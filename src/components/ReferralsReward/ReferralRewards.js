import {ReactComponent as TONIXIcon} from "../../assets/icons/TONIX.svg"; 
import bolt from "../../assets/bolt.gif.png";
import "./ReferralRewards.css";
import CustomButton from "../CustomButton/CustomButton";

const data = [
    {
        id: 1,
        level: 1,
        tonixAmount: 100,
        mhs: 30
    },
    {
        id: 2,
        level: 2,
        tonixAmount: 50,
        mhs: 15
    },
    {
        id: 3,
        level: 3,
        tonixAmount: 15,
        mhs: 1
    }
]

const ReferralRewards = () => {
    return(
        <div className="referral-rewards">
            <h2 className="title">Referral Rewards</h2>
            <div className="rewards-list">
                {
                    data.map(({id, level, tonixAmount, mhs}) => (
                        <ReferralRewardsItem key={id} level={level} tonixAmount={tonixAmount} mhs={mhs} />
                    ))
                }
            </div>
            <CustomButton className="learn-more-btn">
                Learn more
            </CustomButton>
        </div>
    )
}

const ReferralRewardsItem = ({level, tonixAmount, mhs}) => {
    return(
        <div className="referral-rewards-item">
            <span className="level">
                <span className="text">Level</span>
                <span className="value">{level}</span>
            </span>
            <span className="amount-wrapper">
                <span className="amount">
                    <span className="value">{tonixAmount}</span>
                    <span className="unit">TONIX</span>
                </span>
                <TONIXIcon/>
            </span>
            <span className="mhs">
                <span>
                    <span className="value">{mhs}</span>
                    <span className="unit">MH/s</span>
                </span>
                <img src={bolt} alt="bolt"/>
            </span>
        </div>
    )
}

export default ReferralRewards;