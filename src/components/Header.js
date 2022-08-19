import styled from "styled-components";
import { AiFillDollarCircle } from "react-icons/ai";

export default function Header(props) {
    const  { setIsModalOpen } = props;
    function handleClick(){
        setIsModalOpen(true);
    }

    return(
        <HeaderCss>
            <ElementsContainer>
                <Title>
                    <DollarIcon />
                    <AppName>Meu dinheirinho</AppName>
                </Title>
                <WebTransactionButton onClick={() => handleClick()} >Nova Transação</WebTransactionButton>
                <MobileTransactionButton>+</MobileTransactionButton>
            </ElementsContainer>
        </ HeaderCss>
    );
}

const HeaderCss = styled.header`
    background-color: #5429CC;
    width: 100%;
    height: 212px;
    display: flex;
    padding: 0 11.11% 90px 11.11%;

    @media (max-width: 650px) {
        padding: 0 24px 90px 24px;
    }
`;

const ElementsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    font-weight: 700;

    @media (max-width: 650px) {
        font-size: 19px;
    }
`;

const NewTransactionButton = styled.button`    
    border-radius: 5px;
    background-color: #6933FF;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
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


