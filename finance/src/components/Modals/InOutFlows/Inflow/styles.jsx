import styled from 'styled-components'
import { inflow } from '../../../../styles/colors'

export const Content = styled.div`
display:flex;
justify-content:space-between;
overflow:auto;
margin-top:0.5rem;

`
export const InFlowText = styled.p`
    color:${inflow};
    font-weight:bold;
`

export const Total = styled.div`
display:flex;
padding-top:2rem;
font-weight:600;
`