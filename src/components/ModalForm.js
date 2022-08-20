import styled from "styled-components";
import CurrencyInput from "react-currency-masked-input";
import { useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";


export default function ModalForm(){
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    function submitTransaction(event) {
        event.preventDefault();
        console.log(value);
        
    }

    return(
        <FormContainer>

            <Title>Cadastrar transação</Title>
            <Form onSubmit={submitTransaction}>
                <GenericInput
                    type="text"
                    placeholder="Nome"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength="20"
                />
                <FormatedValueInput
                    type="number"
                    placeholder="Preço"
                    required
                    onChange={(e) => setValue(e.target.value)}
                ></FormatedValueInput>
                <IncomeOutcomeChoice>
                    <ChoiceButton>
                        <IncomesIcon />
                        Entrada
                    </ChoiceButton>
                    <ButtonsGap />
                    <ChoiceButton>
                        <OutcomesIcon />
                        Saída
                    </ChoiceButton>
                </IncomeOutcomeChoice>
                <GenericInput
                    type="text"
                    placeholder="Categoria"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    maxLength="20"
                />
                <GenericButton type="submit" >
                    Cadastrar
                </GenericButton>
            </Form>
            
        </FormContainer>
    );
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-family: 'Poppins', sans-serif;
`;


const Title = styled.p`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 40px;
    color: #363F5F;
    line-height: 31px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 16px;
`;

const GenericInput = styled.input`
    padding: 0 15px;
    width: 100%;
    height: 64px;
    border-radius: 5px;
    border: 1px solid #D7D7D7;
    margin-bottom: 13px;
    color: #969CB3;
    outline: none;
    background-color: #E7E9EE;
    &::placeholder {
        color: #969CB3;
    }
`;

const FormatedValueInput = styled(CurrencyInput)`
    padding: 0 15px;
    width: 100%;
    height: 64px;
    border-radius: 5px;
    border: 1px solid #D7D7D7;
    margin-bottom: 13px;
    color: #969CB3;
    outline: none;
    background-color: #E7E9EE;

    &::placeholder {
        color: #969CB3;
    }
`;

const IncomeOutcomeChoice = styled.div`
    display: flex;
    width: 100%;
    height: 64px;
    margin-bottom: 13px;
    justify-content: space-between;

`;

const IncomesIcon = styled(BsArrowUpCircle)`
    color: #33CC95;
    width: 20px;
    height: 20px;
    margin-right: 18px;
`;

const OutcomesIcon = styled(BsArrowDownCircle)`
    color: #E52E4D;
    width: 20px;
    height: 20px;
    margin-right: 18px;
`;

const ButtonsGap = styled.div`
    width: 8px;
`;

const ChoiceButton = styled.button`
    width: 100%;
    height: 64px;;
    background-color: #FFF;
    color: #363F5F;
    border: 1.5px solid #D7D7D7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF; //ternário trocar cor de fundo quando selecionado

    &:hover {
        background-color: #F0F2F5;
        cursor: pointer;
    }
`;


const GenericButton = styled.button`
    width: 100%;
    height: 46px;
    background-color: #33CC95;
    color: #fff;
    font-weight: 700;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: #05BB95;
        cursor: pointer;
    }
`;
