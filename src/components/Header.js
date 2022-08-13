import styled from "styled-components";
import { AiFillDollarCircle } from "react-icons/ai";

export default function Header() {
    return(
        <HeaderCss>
            <Title>
                <DollarIcon />
                <AppName>Meu dinheirinho</AppName>
            </Title>
        
        </ HeaderCss>
    );
}

const HeaderCss = styled.header`
    background-color: #5429CC;
    width: 100%;
    height: 212px;
    display: flex;
    justify-content: center;
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
`;

const AppName = styled.p`
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 25px;
`;
