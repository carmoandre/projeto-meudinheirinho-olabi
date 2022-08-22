import styled from "styled-components";
import { BsArrowDownCircle, BsArrowUpCircle, BsCurrencyDollar } from "react-icons/bs";

export default function BalanceCard(props){
    const { partialBalance, cardType, amount }  = props;
    let icon, title;
    if (cardType==="total") {
        title = "Total";
        icon = <TotalIcon />;
    } else if (cardType==="income") {
        title = "Entradas";
        icon = <IncomesIcon />;
    } 
    else {
        title = "Saídas";
        icon = <OutcomesIcon />;
    }

    const formattedAmount = (amount/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    return(
        <GeneralBalanceCard partialBalance={partialBalance} >
            <CardInformation>
                <CardTitle partialBalance={partialBalance}>{title}</CardTitle>
                <BalanceValue>{icon}</BalanceValue>
            </CardInformation>
            <BalanceValue partialBalance={partialBalance}>{formattedAmount}</BalanceValue>
        </GeneralBalanceCard>
    );
    
}

const GeneralBalanceCard = styled.div`
    width: 352px;
    height: 136px;
    border-radius: 5px;
    padding: 25px 23px 25px 32px;
    margin-right: ${({ partialBalance }) => (partialBalance ? "32px" : "0")};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ partialBalance }) => (partialBalance ? "#FFF" : "#33CC95")};
    
`;

const CardInformation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

const CardTitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: ${({ partialBalance }) => (partialBalance ? "#000" : "#FFF")};
`;


const BalanceValue = styled.p`
    font-weight: 400;
    font-size: 36px;
    font-family: 'Poppins', sans-serif;
    color: ${({ partialBalance }) => (partialBalance ? "#000" : "#FFF")};
`;

const IncomesIcon = styled(BsArrowUpCircle)`
    color: #33CC95;
    width: 27px;
    height: 27px;
`;

const OutcomesIcon = styled(BsArrowDownCircle)`
    color: #E52E4D;
    width: 27px;
    height: 27px;
`;

const TotalIcon = styled(BsCurrencyDollar)`
    color: #fff;
    width: 27px;
    height: 27px;
`;

