import styled from "styled-components";
import BalanceCard from "./BalanceCard";

export default function Balances() {
    return(
        <BalanceContainer>
            <BalanceCard partialBalance={true} cardType="income"/>
            <BalanceCard partialBalance={true} cardType="outcome"/>
            <BalanceCard partialBalance={false} cardType="total"/>
        </ BalanceContainer>
    );
}

const BalanceContainer = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 0 11.11%;
    margin-top: 144px;

    @media (max-width: 650px) {
        padding: 0 24px;
    }
`;

