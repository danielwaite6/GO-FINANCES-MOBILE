import React from 'react';
import { HighLighterCard } from '../../components/HighLighterCard';
import { TransactionCard } from '../../components/TransactionCard';

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
} from './styles';

interface Props {
    title: string;
}

export function Dashboard({ title }: Props) {

    const data = {
        title: "Desenvolvimento de Site",
        amount: "R$ 12.000,00",
        category: {
            name: "Vendas",
            icon: "dollar-sign",
        },
        date: "13/05/2020",
    };

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
                <TransactionCard data={data} />
            </Transactions>

        </Container>
    );
}