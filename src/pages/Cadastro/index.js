import React, { Component } from 'react';


export default class Cadastro extends Component{
    render(){
        return (
          <view>
              <TextInput placeholder= 'Nome'/>
              <TextInput placeholder= 'Email'/>
              <TextInput placeholder= 'Rua'/>
              <TextInput placeholder= 'Num'/>
              <TextInput placeholder= 'Tel'/>
              <Button>
                  <text>Cadastrar-se</text>
              </Button>

          </view>  
        );
    }

}