import React from 'react';
import { HighLighterCard } from '../../components/HighLighterCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighLighterCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {

    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de Site",
            amount: "R$ 12.000,00",
            category: {
                name: "Vendas",
                icon: "dollar-sign",
            },
            date: "13/05/2020",
        },
        {
            id: '2',
            type: 'negative',
            title: "Pizza",
            amount: "R$ 59,00",
            category: {
                name: "Alimentação",
                icon: "coffee",
            },
            date: "13/05/2020",
        },
        {
            id: '3',
            type: 'negative',
            title: "Aluguel de casa",
            amount: "R$ 1.200,00",
            category: {
                name: "Casa",
                icon: "shopping-bag",
            },
            date: "13/05/2020",
        },
    ];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/6205322?v=4' }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Daniel Waite </UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighLighterCards>
                <HighLighterCard type="up" title="Entradas" amount="R$ 17.000,00" lastTransaction="Última Entrada dia 13 de Abril" />
                <HighLighterCard type="down" title="Saídas" amount="R$ 3.000,00" lastTransaction="Última Entrada dia 13 de Abril" />
                <HighLighterCard type="total" title="Total" amount="R$ 14.000,00" lastTransaction="Última Entrada dia 13 de Abril" />
            </HighLighterCards>


            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    keyExtractor={(item) => String(item.id)}
                    data={data}
                    renderItem={({ item }) => (
                        <TransactionCard data={item} />
                    )}
                />


            </Transactions>

        </Container>
    );
}