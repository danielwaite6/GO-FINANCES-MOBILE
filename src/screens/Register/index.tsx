import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';

import { Input } from '../../components/Forms/Input'
import { InputForm } from '../../components/Forms/InputForm'
import { Button } from '../../components/Forms/Button'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton'
import { CategorySelect } from '../CategorySelect'

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './styles';

export function Register() {

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });

    const { control, handleSubmit, } = useForm();

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    };

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }


    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleRegister(form) {
        /*const data = {
            transactionType,
            category: category.key,
        }*/
        console.log('Form:', form);

    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <InputForm
                        name="name"
                        control={control}
                        placeholder="Nome"
                    />
                    <InputForm
                        name="amount"
                        control={control}
                        placeholder="Preço"
                    />

                    <TransactionTypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type="down"
                            title="outcome"
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>
                    <CategorySelectButton
                        title={category.name}
                        onPress={handleOpenSelectCategoryModal}
                    />
                </Fields>
                <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>

        </Container>
    );
}