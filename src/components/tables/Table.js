import styled from "styled-components"
import TableCard from "./TableCard"


export default function Table() {
    
    return(
        <FinancesTable>
          <TableRow>
            <TableHeader>Título</TableHeader>
            <TableHeader>Preço</TableHeader>
            <TableHeader>Categoria</TableHeader>
            <TableHeader>Data</TableHeader>
          </TableRow>
          <TableRow>
            <TableCard />
          </TableRow>
          <TableRow>
            <TableCard />
          </TableRow>
        </FinancesTable>
    );
    
}

const FinancesTable = styled.table`
    margin-top: 120px;
    border-spacing: 0 0.5rem;
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    border-collapse: separate; 
    border-spacing: 0 8px; 

    @media (max-width: 650px) {
        display: none;
    }
`;

const TableHeader = styled.th`
    padding: 20px 37px 20px 32px;
    text-align: left;
    color: #969cb3;
`;

const TableRow = styled.tr`
`;


