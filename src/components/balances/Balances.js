import styled from "styled-components";
import BalanceCard from "./BalanceCard";

export default function Balances() {
    return(
        <BalanceContainer>
            <CarouserContainerInner>
                <BalanceCard partialBalance={true} cardType="income" />
                <BalanceCard partialBalance={true} cardType="outcome" />
                <BalanceCard partialBalance={false} cardType="total" />
            </CarouserContainerInner>
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

export const CarouserContainerInner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 1035px) {
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        -ms-overflow-style: none;
        scrollbar-width: none;
    
        &::-webkit-scrollbar {
            display: none;
        }
    
        & > * {
            scroll-snap-align: center;
        }
    }

`;

