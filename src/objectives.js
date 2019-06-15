import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Objectives extends Component {
  render(){
    return(
      <Container>
        <Header>
          <Body>
            <Title>M.Yasir shakeel</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                to get a job in software house
                                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button dark bordered style = {{alignSelf: 'center', margin: 30}}
            onPress= {() => {Actions.experience(); }}>
            <Text>Experience</Text>
          </Button>
         </Content>
      </Container>
    );
  }
}