import styled from "styled-components"


export default function Table(props) {
    const {title, amount, type, category, createdAt} = props;

    const formattedAmount = (amount/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    return(
        <>
            <TableCell>{title}</TableCell>
            <TableCell type={type}>
                {type==="income" ? "" : "-"} {formattedAmount}
            </TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>{createdAt}</TableCell>
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
        color: ${({type})=> type==="income" ? "#33cc95" : "#E52E4D"};
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