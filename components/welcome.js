import React, { Component } from 'react';
import { Image, View, Navigator } from 'react-native';
import {Container, Header, Content, Footer, Title, Button, Card, CardItem, Left, Body, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class WelcomeScreen extends Component {

    constructor(props) {
        super(props); 
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
    }

    loginWithFacebook(){
        this.props.navigator.push({
            name: 'Profile'
        });
    }


    render() {
    return (
        <Container navigator={this.props.navigator}>
        <Content>
            <Card>
                <CardItem bordered>
                    <Left>
                        <Body>
                            <Text/>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Image style={{ resizeMode: 'cover' }} source={require('./img/wishlist-member-small.png')} />
                        <Text>
                            {"\n"}
                            Create, Maintain and Share your wishlist with your friends. 
                            {"\n"}
                            Simply login with your facebook account in order to start using the Wishlist. 
                        </Text>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
                                Login with Facebook
                            </Icon.Button>
                        </Button>
                    </Body>
                </CardItem>
            </Card>
        </Content>
    </Container>
    );
  }
}


export default WelcomeScreen;