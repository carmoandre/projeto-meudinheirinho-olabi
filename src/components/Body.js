import styled from "styled-components";
import MobileTable from "./tables/MobileTable";
import Table from "./tables/Table";

export default function Body ({data}) {
    return(
        <ContainerBody>    
            <Table data={data}/>
            <MobileTable data={data}/>
        </ContainerBody>
    );

}

const ContainerBody = styled.body`
    padding: 0 11.11%;
    //height: 100%;

    @media (max-width: 650px) {
        padding: 0 24px;
    }
`;