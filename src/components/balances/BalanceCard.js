import styled from "styled-components";
import { BsArrowDownCircle, BsArrowUpCircle, BsCurrencyDollar } from "react-icons/bs";

export default function BalanceCard(props){
    const { partialBalance, cardType }  = props;
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
    
        

    return(
        <GeneralBalanceCard partialBalance={partialBalance}>
            <CardInformation>
                <CardTitle>{title}</CardTitle>
                <BalanceValue>{icon}</BalanceValue>
            </CardInformation>
            <BalanceValue>R$7.000,00</BalanceValue>
        </GeneralBalanceCard>
    );
    
}

const GeneralBalanceCard = styled.div`
    width: 352px;
    height: 136px;
    border-radius: 5px;
    padding: 25px 23px 25px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ partialBalance }) => (partialBalance ? "#FFF" : "#33CC95")};
    
`;

const CardInformation = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

const CardTitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
`;


const BalanceValue = styled.p`
    font-weight: 400;
    font-size: 36px;
    font-family: 'Poppins', sans-serif;
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
