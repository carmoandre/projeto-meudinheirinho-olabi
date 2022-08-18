import styled from "styled-components"


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
            <TableCell>Salário</TableCell>
            <TableCell>$30000</TableCell>
            <TableCell>Trabalho</TableCell>
            <TableCell>31/07</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Show Beyoncé</TableCell>
            <TableCell>-$700</TableCell>
            <TableCell>Ingresso</TableCell>
            <TableCell>05/08</TableCell>
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
`;

const TableHeader = styled.th`
    padding: 20px 37px 20px 32px;
    text-align: left;
    color: #969cb3;
`;

const TableRow = styled.tr`
    margin-bottom: 8px;
    border-radius: 5px;
`;

const TableCell = styled.td`
    padding: 20px 37px 20px 32px;
    background-color: #fff;
`;