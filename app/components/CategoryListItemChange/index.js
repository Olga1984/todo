import React from 'react';
import styled from 'styled-components';
import {ArrowButton} from 'components/TodoSwgButtons';

const LI = styled.li`    
    border: 1px solid rgb(137, 139, 143);    
    height: 40px; 
    border-radius: 3px;
    padding:4px;   
    `;
const Div = styled.div`
    width: 75%;
    padding-left:10px;
    float:left;
    overflow:hidden;    
`;
const Span = styled.span`
    display:inline-block;     
`;

export class CategoryListItemChange extends React.Component {
  constructor(props){
    super(props);
    this.state = {editing : false };
  }
  componentDidMount(){

    this.setState({ changedInputTitle: this.props.category.title});
  }
  handleEditingDone(e){
    if(e.keyCode === 13){//finish
      this.setState({ editing: false });
    }
  }
  handleEditing(){
    this.setState({ editing: true, changedInputTitle: this.props.category.title });
  }
  handleEditingChange(e){
    let _changedInputTitle = e.target.value;
    this.setState({ changedInputTitle: _changedInputTitle });
  }

    render() {

    let category = this.props.category;

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
           <Span>
           {this.state.changedInputTitle}
            </Span>
          <span>

          </span>
        </Div>
       <a href="#" onClick={this.props.handleCategoryDelete1}><ArrowButton  /></a>
        <span>

        </span>
      </div>

    </LI>
  }
}

