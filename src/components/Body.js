import styled from "styled-components";
import Table from "./tables/Table";
import MobileTable from "./tables/MobileTable";

export default function Body () {
    return(
        <ContainerBody>    
            <Table />
            <MobileTable />
        </ContainerBody>
    );

}

const ContainerBody = styled.body`
    padding: 0 11.11%;

    @media (max-width: 650px) {
        padding: 0 24px;
    }
`;