import React from 'react';
import styled from 'styled-components';
import {TodoHeader} from 'components/TodoHeader';
import {TodoCategory} from 'components/TodoCategory';
import {TodoTask} from 'components/TodoTask';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

const Root = styled.section`
  display: flex;
  background: transparent;
  flex-direction: column;
  min-height: 100vh;
  width: 1024px;
  border: 1px solid grey;
  border-radius: 3px;
  margin: 0 auto;
  padding: 2%;
  position:relative;  
`;
const Content = styled.section`
  display: flex;
  background: transparent;
  flex-direction: row; 
`;

export default class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {done: 0};
    this.progressDoneTasks = this.progressDoneTasks.bind(this);

  }
  progressDoneTasks(percent){
    this.setState({
      done: percent
    });
  }

  render() {
    return (
      <Root>
        <TodoHeader done={this.state.done} />
        <Content>
              <TodoCategory />
              <TodoTask progressDoneTasks1={this.progressDoneTasks} />
        </Content>
      </Root>
    );
  }
}
