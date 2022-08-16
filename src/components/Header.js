import styled from "styled-components";
import { AiFillDollarCircle } from "react-icons/ai";

export default function Header() {
    return(
        <HeaderCss>
            <Title>
                <DollarIcon />
                <AppName>Meu dinheirinho</AppName>
            </Title>
            <WebTransactionButton>Nova Transação</WebTransactionButton>
            <MobileTransactionButton>+</MobileTransactionButton>
        </ HeaderCss>
    );
}

const HeaderCss = styled.header`
    background-color: #5429CC;
    width: 100%;
    height: 212px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11.11%;

    @media (max-width: 650px) {
        padding: 0 24px;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DollarIcon = styled(AiFillDollarCircle)`
    color: #33cc95;
    width: 40px;
    height: 40px;
    margin-right: 16.79px;

    @media (max-width: 650px) {
        width: 31.21px;
        height: 31.21px;
        margin-right: 13.27px;
    }
`;

const AppName = styled.p`
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 25px;

    @media (max-width: 650px) {
        font-size: 19px;
    }
`;

const NewTransactionButton = styled.button`    
    border-radius: 5px;
    background-color: #6933FF;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #6950FF;
        cursor: pointer;
    }
`;



const WebTransactionButton = styled(NewTransactionButton)`
    width: 195px;
    height: 48px;

    @media (max-width: 650px) {
        display: none;
    }
`;

const MobileTransactionButton = styled(NewTransactionButton)`
    width: 40px;
    height: 40px;
    font-size: 30px;
    display: none;
 
    @media (max-width: 650px) {
        display: flex;
    }
`;


