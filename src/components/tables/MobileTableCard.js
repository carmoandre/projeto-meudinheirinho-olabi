import styled from "styled-components";

export default function MobileTableCard(props){

    const {title, amount, type, category, createdAt} = props;

    const formattedAmount = (amount/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return(
        <>    
            <TransactionsCard>
                <CardTitle>{title}</CardTitle>
                <CardValue type = {type}>{type==="income" ? "" : "-"} {formattedAmount}</CardValue>
                <CardInformation>
                    <TransactionCategory>{category}</TransactionCategory>
                    <TransactionDate>{createdAt}</TransactionDate>
                </CardInformation>
            </TransactionsCard>
        </>
    );
}

const TransactionsCard = styled.div`
    width: 100%;
    height: 128px;
    border-radius: 5px;
    background-color: #FFF;
    padding: 17px 28px 18px 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    margin-bottom: 8px;

    
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
    color: ${({type})=> type==="income" ? "#33cc95" : "#E52E4D"};
    font-size: 20px;
    margin-bottom: 25px;
`;

const TransactionCategory = styled.p`

`;

const TransactionDate = styled.p`

`;