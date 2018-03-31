import React, { Component } from "react";
import { Container, Content, Header, Text, Button, Icon, View } from "native-base";
import Styles from "./styles/connect";
export default class Connect extends Component {
    render(){
        return (
            <Container>
                <Button iconLeft block style={Styles.fbutton}>
                    <Icon name='logo-facebook' />
                    <Text>Facebook</Text>
                </Button>

                <Button iconLeft block style={Styles.tbutton}>
                    <Icon name='logo-twitter' />
                    <Text>Twitter</Text>
                </Button>
            </Container>
        );
    }
}