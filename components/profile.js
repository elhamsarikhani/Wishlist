import React, { Component } from 'react';
import { Image, View, Navigator, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Left, Header, Button, Body, Title, Right, Picker, Toast, Thumbnail, ListItem,
        Card, CardItem, Text, H3, Segment } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {

    constructor(props) {
        super(props); 

        this.editProfile = this.editProfile.bind(this);
        this.showWishlist = this.showWishlist.bind(this);
        this.addWishlist = this.addWishlist.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.navigator.pop();
    }

    editProfile() {
        this.props.navigator.push({
            name: 'EditProfile'
        });
    }

    showWishlist() {
        this.props.navigator.push({
            name: 'Wishlist'
        });
    }

    addWishlist() {
        this.props.navigator.push({
            name: 'AddWishlist'
        });
    }


    render() {
    return (
        <Container navigator={this.props.navigator}>
            <Header>
                <Body>
                    <Title>Profile</Title>
                </Body>
                <Right>
                    <Icon name='user' size={30} color='#fff' />
                </Right>
            </Header>

            <Content>
                <Form>
                    <ListItem >
                        <Left>
                            <Thumbnail style={{ width: 100, height: 100, borderRadius: 40 }} source={require('./img/me.jpg')} />
                            <Text>Elham Sarikhani</Text>
                        </Left>
                        <Right>
                            <Icon name='pencil' size={25} color='gray' onPress={this.editProfile} />
                        </Right>
                    </ListItem>

                    <Card>
                        <CardItem header>
                            <Text>Wishlists</Text>
                        </CardItem>

                        <CardItem onPress={this.showWishlist}>
                            <Icon name='birthday-cake' size={20} color='pink' />
                            <Text> My birthday</Text>
                            <Right>
                                <Icon name='chevron-right' size={20} color='blue' />
                            </Right>
                        </CardItem>
                        <CardItem onPress={this.showWishlist}>
                            <Icon name='calendar' size={20} color='lightgreen' />
                            <Text> Bachelorette party</Text>
                            <Right>
                                <Icon name='chevron-right' size={20} color='blue' />
                            </Right>
                        </CardItem>
                        <CardItem footer>
                            <Icon name='plus' size={25} color='blue' onPress={this.addWishlist} />
                        </CardItem>
                    </Card>
                </Form>
            </Content>
        </Container>
    );
  }
}


export default Profile;