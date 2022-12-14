import styled from "styled-components";
import MobileTableCard from "./MobileTableCard";


export default function MobileTable(data){

    return(
        <MobileTableContainer>
            <MobileTableHeader>
                <MobileTableTitle>Listagem</MobileTableTitle>
                <MobileTableAmmount>{data.data.length} itens</MobileTableAmmount>
            </MobileTableHeader>
            {data.data.map((transaction) => {
            return(<MobileTableData key={transaction.id} >
                <MobileTableCard
                    title={transaction.title}
                    type={transaction.type} 
                    amount={transaction.amount}
                    category={transaction.category} 
                    createdAt={transaction.createdAt} 
                />
            </MobileTableData>);
            })}
        </MobileTableContainer>
    );
}

const MobileTableContainer = styled.div`
    margin-top: 120px;
    font-family: 'Poppins', sans-serif;
    display: none;

    @media (max-width: 650px) {
        display: block;
    }
`;

const MobileTableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    margin-bottom: 16px;
`;

const MobileTableTitle = styled.p`
    font-size: 20px;
    color: #363f5f;
`;

const MobileTableAmmount = styled.p`
    font-size: 14px;
    color: #969cb2;
`;

const MobileTableData = styled.p``;