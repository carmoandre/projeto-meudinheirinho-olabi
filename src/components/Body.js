import styled from "styled-components";
import Table from "./tables/Table";

export default function Body () {
    return(
        <ContainerBody>    
            <Table />
        </ContainerBody>
    );

}

const ContainerBody = styled.body`
    padding: 0 11.11%;
    height: 100%;

    @media (max-width: 650px) {
        padding: 0 24px;
    }
`;