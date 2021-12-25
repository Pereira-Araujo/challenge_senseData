import { useContext } from 'react';
import NumberFormat from 'react-number-format';
import GlobalStateContext from '../../../../global/GlobalStateContext';
import { Content, Total,OutFlowText } from './styles'
export default function OutFlow() {
    const { product } = useContext(GlobalStateContext);

    const outflows = product.filter((transaction) => {
        return transaction.category.toLowerCase() === 'saida'
    })

    const amounts = outflows.length > 0  ? outflows.map((transaction) => {
        return parseFloat(transaction.amount)
    }).reduce((x, y) => x + y) : '0.00'



    return (
        <section>
            <OutFlowText>SAÍDAS</OutFlowText>
            <Content>
                <h3>valor</h3><h3>titulo</h3><h3>data</h3>
            </Content>
            {outflows.map((transaction) => {
                return (
                    <Content>
                        <OutFlowText><NumberFormat value={transaction.amount} displayType="text" thousandSeparator={true} prefix="R$" /></OutFlowText>
                        <p>{transaction.title}</p>
                        <p>{transaction.date}</p>

                    </Content>)
            })}
            <Total>
                Total de Saídas : <OutFlowText><NumberFormat value={amounts} displayType="text" thousandSeparator={true} prefix="R$" /></OutFlowText>
            </Total>
        </section>
    );
}
