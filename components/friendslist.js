import React, {Component} from 'react'
import { Container, Header, Content, List, ListItem, 
    Text, Left, Body, Right, 
    CheckBox, Button, Segment  } from "native-base";

export default class FriendsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            seg: 1,
        }
    }
    render(){
        var items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];
        return(
        <Container>
            <Header style={{ backgroundColor: '#FFF' }}>
                <Segment style={{ backgroundColor: '#FFF' }}>
                    <Button
                            style={{
                                backgroundColor: this.state.seg === 1 ? "#3B5998" : undefined,
                                borderColor: "#3B5998",
                            }}
                            first
                            active={this.state.seg === 1 ? true : false}
                            onPress={() => this.setState({ seg: 1 })}
                        >
                            <Text style={{ color: this.state.seg === 1 ? "#FFF" : "#3B5998" }}>Facebook</Text>
                    </Button>
                    <Button 
                            last
                            style={{
                                backgroundColor: this.state.seg === 2 ? "#00aced" : undefined,
                                borderColor: "#00aced",
                            }}
                            active={this.state.seg === 2 ? true : false}
                            onPress={() => this.setState({ seg: 2 })}
                        ><Text style={{ color: this.state.seg === 2 ? "#FFF" : "#00aced" }}
                    >Twitter</Text></Button>
                </Segment>
            </Header>
            <Content>
                <List 
                    dataArray={items}
                    renderRow={(item) =>
                        <ListItem style={{ flexDirection: 'row' }}>
                            <Left><Text>{item}</Text></Left>
                            <Right>
                                <CheckBox checked={false} />
                            </Right>
                        </ListItem>
                    }>
                </List> 
            </Content>
        </Container>
        );
    }
}