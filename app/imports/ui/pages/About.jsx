import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h1">What is stuff?</Header>
        Here are some definitions of stuff:
        <List bulleted>
          <List.Item>
            matter, material, articles, or activities of a specified or indeterminate kind that are being
            referred to, indicated, or implied. &quot;she&apos;s good at the technical stuff&quot;
          </List.Item>
          <List.Item>
            a person&quot;s belongings, equipment, or baggage. &quot;he took his stuff and went&quot;
          </List.Item>
          <List.Item>
            worthless or foolish ideas, speech, or writing; rubbish. &quot;stuff and nonsense!&quot;
          </List.Item>
        </List>
      </Container>
    );
  }
}
