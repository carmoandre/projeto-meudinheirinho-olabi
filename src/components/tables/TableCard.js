import styled from "styled-components"


export default function Table() {
    
    return(
        <>
          
            <TableCell>Salário</TableCell>
            <TableCell>$30000</TableCell>
            <TableCell>Trabalho</TableCell>
            <TableCell>31/07</TableCell>
          
        </>
    );
    
}

const TableCell = styled.td`
    padding: 20px 37px 20px 32px;
    background-color: #fff;
    color: #363f5f;

    &:first-child {
        border-left-style: solid;
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
    }

    &:nth-child(2){
        color: #33cc95;
        //Add red color for negative values #E52E4D
    }
    &:nth-child(3) {
        color: #969CB2;
    }

    &:last-child {
        border-right-style: solid;
        border-bottom-right-radius: 10px; 
        border-top-right-radius: 10px; 
        color: #969CB2;
    }
`;