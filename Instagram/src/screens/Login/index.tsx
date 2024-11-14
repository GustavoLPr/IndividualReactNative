import { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  ImageComponent,
  Keyboard,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./style";
import { TextInputField } from "../../components/TextInput";
import { ButtonTypes } from "../../components/ButtonTypes";
import Fundo from "../../assets/gradient (3).png";
import Logo from "../../assets/logo.png";
import Meta from "../../assets/meta.png";
import Sair from "../../assets/X.png";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
  };

  const handleSenha = () => {
    Alert.alert("Caso tenha esquecido a senha");
  };

  const handleCriar = () =>{
    Alert.alert("Para criar uma nova conta");
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          resizeMode="cover"
          source={Fundo}
        >

          <TouchableOpacity onPress={() => Alert.alert("Fechar")} style={styles.closeButton}>
            <Image source={Sair} style={styles.sairImage}/>
          </TouchableOpacity>
          <Text style={styles.linguagem}>Português (Brasil)</Text>

          <Image
            style={styles.logoImage}
            source={Logo}
            alt="Imagem Instagram"
          />
          <View style={styles.boxForms}>
            <View style={{ marginTop: 50 }} />
            <TextInputField
              placeHolder="Nome de usuário, email ou número de celular"
              valueInput={email}
              hadleFunctionInput={handleEmail}
            />
            <TextInputField
              placeHolder="Senha"
              valueInput={password}
              hadleFunctionInput={handlePassword}
              typeInput={true}
            />
            <ButtonTypes
              title="Entrar"
              handleFunction={handleLogin}
              propsBackgroundColor="#0064E0"
            />
            <ButtonTypes
              title="Esqueceu a senha?"
              handleFunction={handleSenha}
              propsBackgroundColor="transparent"
            />
          </View>
          <TouchableOpacity onPress={() => Alert.alert("Criar uma conta nova")} style={styles.botao}>
            <Text  style ={styles.text} >Criar nova conta</Text>
          </TouchableOpacity>
          <Image style={styles.metaImage} source={Meta} alt="Imagem Meta" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
