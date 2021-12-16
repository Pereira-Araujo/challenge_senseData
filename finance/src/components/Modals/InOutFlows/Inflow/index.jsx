import { useContext } from 'react';
import NumberFormat from 'react-number-format';
import GlobalStateContext from '../../../../global/GlobalStateContext';
import { Content, Total,InFlowText } from './styles'

export default function InFlow() {
    const { product } = useContext(GlobalStateContext);

    const inflows = product.filter((transaction) => {
        return transaction.category.toLowerCase() === 'entrada'
    })

    const amounts = inflows.map((transaction) => {
        return parseFloat(transaction.amount)
    }).reduce((x, y) => x + y)


    return (
        <section>
            <InFlowText>ENTRADAS</InFlowText>
            <Content>
                <h3>valor</h3><h3>titulo</h3><h3>data</h3>
            </Content>
            {inflows.map((transaction) => {
                return (
                    <Content>
                        <InFlowText><NumberFormat value={transaction.amount} displayType="text" thousandSeparator={true} prefix="R$" /></InFlowText>
                        <p>{transaction.title}</p>
                        <p>{transaction.date}</p>

                    </Content>)
            })}
            <Total>
                Total de Entradas : <InFlowText><NumberFormat value={amounts} displayType="text" thousandSeparator={true} prefix="R$" /></InFlowText>
            </Total>
        </section>
    );
}
