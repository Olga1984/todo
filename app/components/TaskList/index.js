import React from 'react';
import styled from 'styled-components';
import {SearchButton} from 'components/TodoSwgButtons';
import {TaskListItem} from 'components/TaskListItem';
import { Form, FormTaskWrapper } from 'components/TodoTask';

const TasksListDiv = styled.div`   
`;
const UL = styled.ul`
   list-style-type: none;  
`;
const Input = styled.input`
    height: 40px;
    width: 80%;     
   `;

export class TaskList extends React.Component {
  constructor(){
    super();
    this.state = { search: '' };
  }
  updateSearch(event){
    this.setState({ search: event.target.value.substr(0, 20)});
    console.log(this.state.search);
  }
  render() {
    let filteredTodos = this.props.tasks.filter(
      (t) => {
        return t.title.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
        //console.log(t.title);
      }
    );
    return (<TasksListDiv>
      <Form>
        <FormTaskWrapper>
        <Input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          placeholder="search"
        />
        <SearchButton/>
      </FormTaskWrapper>
      </Form>
    <UL>
      {filteredTodos.map((task, i) => {
      return <TaskListItem
        handleDone1={this.props.handleDone.bind(this)}
        key={task+i}
        task={task}
      />})
      }
    </UL>
    </TasksListDiv>);
  }
}
