import React from 'react';
import styled from 'styled-components';
import { TaskList } from 'components/TaskList';
import { Input, Button } from 'components/TodoCategory';
export const Form = styled.div`    
    height: 40px;   
    border-radius: 3px;
    margin-bottom:40px;
    overflow: hidden;    
    `;
export const FormTaskWrapper = styled.div`   
    border: 1px solid rgb(137, 139, 143);    
    height: 40px;
    width: 200px;
    float:right;
    border-radius: 3px;
    margin-bottom:40px;    
     &:hover {
   color: green;
  } 
  &:active {
   color: red;
  } 
    `;
const TaskWrapper = styled.div` 
     width: 70%;
`;
const Scroll = styled.div`
      overflow-y: scroll;
      height: 600px;      
`;
export class TodoTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "",
      todos:
      [
      { title: 'aaa', isDone: false }, { title: 'bbb', isDone: false }, { title: 'ccc', isDone: false },{ title: 'ddd', isDone: false },{ title: 'eee', isDone: false },{ title: 'todo6', isDone: false }
      ]
    };

    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
  }
  handleDone(titleToBeMarkedAsDone) {
    let _tasks = this.state.todos;
    let todoTask = _tasks.filter((todo) => todo.title === titleToBeMarkedAsDone)[0];
    todoTask.isDone = !todoTask.isDone;
    this.setState({ todos: _tasks });
    //%
    let allTasks = this.state.todos.length;
    let allDoneTasks = this.state.todos.filter((task) => {return task.isDone}).length;
    let percentOfDoneTasks = Math.ceil(allDoneTasks*100/allTasks);

    //progress

    this.props.progressDoneTasks1(percentOfDoneTasks);

  }

  handleTaskSubmit(e) {
    e.preventDefault();
    let title = this.state.title;

    if( title !== ''){
    let newTodos = this.state.todos.concat({ title, isDone: false });
    this.setState({ title: '', todos: newTodos });
    }
  }
  handleInputValueChange(e) {
    let title = e.target.value;
    this.setState({
      title,
    });
  }

  render() {

    return (
      <TaskWrapper>
        <Form>
          <FormTaskWrapper>
            <form name="task" onSubmit={this.handleTaskSubmit}>
              <Input
                type="text"
                onChange={this.handleInputValueChange}
                value={this.state.title}
                placeholder="Enter task"
              />
              <Button>Add</Button>
            </form>
          </FormTaskWrapper>
        </Form>
        <Scroll>
          <TaskList
            handleDone={this.handleDone.bind(this)}
            tasks={this.state.todos}
          />
        </Scroll>
      </TaskWrapper>
    );
  }
}

