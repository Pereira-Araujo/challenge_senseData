import {Input} from './styles'

const InputComponent =({element,label,value,callFunction,type})=>{
    return(
        <Input
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id={element}
        label={label}
        name={element}
        autoComplete={element}
        value={value}
        onChange={callFunction}
        autoFocus
        type={type}
      />
    )
}

export default InputComponent