import React, { Component } from "react";
import { Container, Content, Header, Text, Form, Item, Label, Input, Button, Right, View } from "native-base";
import DatePicker from 'react-native-datepicker';
import Styles from "./styles/goal";
export default class Goal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container style={Styles.container}>
                <Content style={Styles.content}>
                    <Text style={Styles.gheader}>Define the goal you want to achieve !</Text>
                    <Form style={Styles.gform}>
                        <Item fixedLabel style={Styles.ginput}>
                            <Label>Title</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel style={Styles.ginput} >
                            <Label>Start date</Label>
                            <DatePicker/>
                        </Item>
                        <Item style={Styles.ginput} fixedLabel last>
                            <Label>End date</Label>
                            <DatePicker />
                        </Item>
                        <View style={Styles.gnext}>
                            <Button><Text>Next Step</Text></Button>
                        </View>

                    </Form>
                </Content>
            </Container>
        )
    }
}