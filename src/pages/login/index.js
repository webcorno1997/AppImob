import React, { Component } from 'react';
import api from '../../services/api';
import {Container, Logo, Input, Button, ButtonText, CadButton, CadButtonTxt, } from './style';
import {StackActions, NavigationActions} from 'react-navigation';
import { AsyncStorage } from 'react-native';

export default class Login extends Component{

    handleEmailChange = (email) => { 
          this.setState({email})
    }
    handlePasswordChange = (password) => {
          this.setState({password})

    }
    handleCadastroPress = () => {
          this.props.navigation.navigate('Cadastro') 

    }
    handleLogInPress = () => {
      if(this.state.email.lenght === 0 || this.state.password.lenght === 0){
              this.setState({error: 'O usuário ou senha então incompetos, preencha os campos para continuar!'})
      }else{
            const response = api.post('sessions', { 
                  email: this.state.email,
                  password: this.state.password        
            })
            
            await AsyncStorage.setItem('@iMob:token', response.data.token)
            NavigationActions.navigate({routeName: 'Main' })


      }

    }
    render(){
        return ( 

          <Container>  
          <Logo source={require("../../imagens/logo.jpeg")} ></Logo>
            <Input 
                placeholder='Email'
                value={this.state.email}
                autoCapitalize='none' 
                autoCorrect={false} 
                onChangeText={this.handleEmailChange} 
            ></Input>

            <Input 
                placeholder='Senha'
                value={this.state.password}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handlePasswordChange} 
            ></Input>

            <Button
              onPress={this.handleLogInPress} > 
            <ButtonText>Entrar</ButtonText>
            </Button>

            <CadButton onPress={this.handleCadastroPress}>
                <CadButtonTxt>Registrar-se</CadButtonTxt>
            </CadButton>

               

          </Container>  
        );
    }

}
