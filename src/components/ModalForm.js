import styled from "styled-components";
import CurrencyInput from "react-currency-masked-input";
import { useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";


export default function ModalForm({ data, setData, setIsModalOpen }){
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState(""); 

    function getDate(){
        const newDate = new Date();

        const day = parseInt(newDate.getDate());
        const month = parseInt(newDate.getMonth()) + 1;
        const year = parseInt(newDate.getFullYear());

        return `
            ${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}
        `;
    }

    function handleToggleChoice(chosen){
        setType(chosen);
    }


    function submitTransaction(event) {
        event.preventDefault();

        const createdAt = getDate();

        const newTransaction = {
            id: ((data[data.length-1].id) + 1),
            title,
            amount: parseInt(amount * 1000),
            type,
            category,
            createdAt
        }

        const newData = [...data];
        newData.push(newTransaction);

        setData(newData);
        setIsModalOpen(false);
        setType("");
        
    }

    return(
        <FormContainer>
            <ModalHeader>
                <Title>Cadastrar transação</Title>
                <CloseModal type="button" onClick={()=>setIsModalOpen(false)}>x</CloseModal>
            </ModalHeader>
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
                    onChange={(e) => setAmount(e.target.value)}
                ></FormatedValueInput>
                <IncomeOutcomeChoice>
                    <IncomeButton 
                        type="button"
                        onClick={()=>handleToggleChoice("income")}
                        isIncome={(type)}
                    >
                        <IncomesIcon />
                        Entrada
                    </IncomeButton>
                    <ButtonsGap />
                    <OutcomeButton 
                        type="button"
                        onClick={()=>handleToggleChoice("outcome")}
                        isIncome={(type)}
                    >
                        <OutcomesIcon />
                        Saída
                    </OutcomeButton>
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

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
    

const CloseModal = styled.button`
    background-color: #FFF;
    font-weight: 700;
    font-size: 24px;
    color: #363F5F;

    &:hover {
        background-color: #F0F2F5;
        cursor: pointer;
    }
`;

const Title = styled.p`
    margin-bottom: 40px;
    line-height: 31px;
    font-weight: 700;
    font-size: 24px;
    color: #363F5F;
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

    &:hover {
        background-color: #F0F2F5;
        cursor: pointer;
    }
`;

const IncomeButton = styled(ChoiceButton)`
    background-color: ${({isIncome}) => isIncome==="income" ? "#F0F2F5" : "#FFF"}; 
`;

const OutcomeButton = styled(ChoiceButton)`
    background-color: ${({isIncome}) => isIncome==="outcome" ? "#F0F2F5" : "#FFF"}; 
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
