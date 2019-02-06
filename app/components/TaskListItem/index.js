import React from 'react';
import styled from 'styled-components';
import {RecyclebinButton, EditPencilButton, PlusButton} from 'components/TodoSwgButtons';
import {TodoCategoryChange} from 'components/TodoCategoryChange';

const LI = styled.li`    
    border: 1px solid rgb(137, 139, 143);    
    height: 40px; 
    border-radius: 3px;
    padding:4px;      
    `;
const Div = styled.div`
    width: 90%;
    padding-left:10px;
    float:left;
    overflow:hidden;    
`;
const Span = styled.span`
    display:inline-block;     
`;
const Wrapper = styled.div`
position:absolute;
height:100%;
bottom:0;
right:0;
background:white;
    width: 100%;
    padding-left:10px;    
    overflow:hidden;    
`;
const ContentChangeTask = styled.section`
  display: flex;  
  flex-direction: row; 
`;
const Description = styled.section`
  width:70%;
  position:absolute;
  top: 200px;
  left: 340px;
  
`;
const Textarea = styled.textarea`
  border: 1px solid rgb(137, 139, 143);    
    height: 395px; 
    border-radius: 3px;
    padding:4px;     
`;
const Button = styled.button`
  border: 1px solid rgb(137, 139, 143);    
    height: 40px; 
    border-radius: 3px;
    padding:4px;
    margin:30px 5px;
    float: right;
    
      
`;
export class TaskListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {editing : false };
  }
  componentDidMount(){

    this.setState({ changedInputTitle: this.props.task.title});
  }
  handleEditingDone(e){
   //finish
      this.setState({ editing: false});
  }
  handleEditingCancel(){
    this.setState({ editing: false, changedInputTitle: this.props.task.title});
  }
  handleEditing(){
    this.setState({ editing: true, changedInputTitle: this.props.task.title });
  }
  handleEditingChange(e){
    let _changedInputTitle = e.target.value;
    this.setState({ changedInputTitle: _changedInputTitle });
  }
   render() {
    let task = this.props.task;

    let viewStyle = {};
     let editStyle = {};
     if(this.state.editing){
       viewStyle.display = 'none';
     }else {
       editStyle.display = 'none';
     }
     return<LI>

       <div style={viewStyle}>
              <Div>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={this.props.handleDone1.bind(null, task.title)} />
                <Span>
                  {this.state.changedInputTitle}
                </Span>
              </Div>

           <div onClick={this.handleEditing.bind(this)}>
             <EditPencilButton />
           </div>
       </div>

       <div style={editStyle}  >
         <Wrapper>
           <ContentChangeTask>
             <TodoCategoryChange value={this.state.changedInputTitle} />
           </ContentChangeTask>
           <Description>
             <Div>
               <Button onClick={this.handleEditingCancel.bind(this)}>Cancel</Button>
               <Button onClick={this.handleEditingDone.bind(this)}>Save changes</Button>
             </Div>

             <div>
             <input
                style={{ border: '1px solid blue'}}
                type="text"
                value={this.state.changedInputTitle}
                onChange={this.handleEditingChange.bind(this)}
              />
             </div>
             <Div>

               <input
                 type="checkbox"
                 checked={task.isDone}
                 onChange={this.props.handleDone1.bind(null, task.title)} />

               <Span>
                  Done
                </Span>
               <div>
               <Textarea name="" id="" rows="300" cols="85"  placeholder="Description"></Textarea>
               </div>
             </Div>
           </Description>
         </Wrapper>
       </div>
       </LI>

  }
}
