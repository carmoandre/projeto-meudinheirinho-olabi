import styled from "styled-components";

export default function MobileTableCard(){

    return(
        <TransactionsCard>
            <CardTitle>Salário</CardTitle>
            <CardValue>$30000</CardValue>
            <CardInformation>
                <TransactionCategory>Trabalho</TransactionCategory>
                <TransactionDate>31/07</TransactionDate>
            </CardInformation>
        </TransactionsCard>
    );
}

const TransactionsCard = styled.div`
    width: 100%;
    height: 128px;
    border-radius: 5px;
    background-color: #FFF;
    padding: 17px 28px 18px 24px;
    font-family: 'Poppins', sans-serif;
    display: none;
    font-weight: 400;
    margin-bottom: 8px;

    @media (max-width: 650px) {
        display: block;
    }
`;

const CardInformation = styled.div`
    font-size: 14px;
    color:#969CB2;
    display: flex;
    justify-content: space-between;
`;

const CardTitle = styled.p`
    color:#363F5F;
    font-size: 14px;
    margin-bottom: 13px;

`;

const CardValue = styled.p`
    color: #33cc95; //Color will be choosen according to income or outcome #E52E4D
    font-size: 20px;
    margin-bottom: 25px;
`;

const TransactionCategory = styled.p`

`;

const TransactionDate = styled.p`

`;