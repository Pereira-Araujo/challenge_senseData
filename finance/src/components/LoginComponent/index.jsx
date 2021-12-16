import { ContainerFlex, Wallpaper } from "./styles";
import SignInComponent from './SignInComponent';

const LoginComponent = () => {
  return (
    <ContainerFlex>
      <Wallpaper></Wallpaper>
      <SignInComponent
        labelFirst={"Email"}
        labelSecond={"Password"}
        buttonName={"Entrar"}
      />
    </ContainerFlex>
  );
};
export default LoginComponent;
