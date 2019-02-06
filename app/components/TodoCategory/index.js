import React from 'react';
import styled from 'styled-components';
import {CategoryList} from 'components/CategoryList';

export const FormWrapper = styled.div`   
    border: 1px solid rgb(137, 139, 143);    
    height: 40px;
    width: 70%;
    border-radius: 3px;
    margin-bottom:40px;
     &:hover {
   color: green;
  } 
  &:active {
   color: red;
  } 
    `;
export const Input = styled.input`
    height: 40px;
    width: 80%;
    outline: none;
    &:hover {
   color: green;   
   border: 1px inset green;
  } 
  &:active {
   color: red;   
   border: 1px inset red;
  }      
   `;
export const Button = styled.button`
  height: 40px;
  width: 20%;
  display: inline-block;  
  background: transparent;  
  border-left: 1px solid grey;  
  color: palevioletred;
  outline: none;
   &:hover {
   color: green;   
  } 
  &:active {
   color: red;  
  } 
`;
const CategoryWrapper = styled.div`
    width: 30%;   
`;
const Scroll = styled.div`   
    overflow-y: scroll;
    height: 600px;
`;
export class TodoCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '',
      categories: [
        {title: 'Category-1'}, { title: 'Category-2' }, { title: 'Category-3' },{ title: 'Category-4' },{ title: 'Category-5'},{ title: 'Category-6' }
      ]
    };

    this.handleCategorySubmit = this.handleCategorySubmit.bind(this);
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
  }

  handleCategoryDelete(categoryToBeDeleted){
    console.log(categoryToBeDeleted);

  let newData = this.state.categories.filter((_item) => {
    return _item !== categoryToBeDeleted;
  });
    this.setState({ categories: newData});
  }
  handleCategorySubmit(e){
    e.preventDefault();
    let title = this.state.title;
    if( title !== '') {
      let newCategories = this.state.categories.concat({ title, isDone: false });
      this.setState({title: '', categories: newCategories});
    }
  }
  handleInputValueChange(e){
    let title = e.target.value;
    this.setState({
      title: title
    });
  }
  render() {
    return (
      <CategoryWrapper>
        <FormWrapper>
          <form name="task" onSubmit={this.handleCategorySubmit}>
            <Input type="text" ref='category'
                   onChange={this.handleInputValueChange}
                   value={this.state.title}
                   placeholder="Enter category title"/>
            <Button>Add</Button>
          </form>
        </FormWrapper>
        <Scroll>
        <CategoryList
          handleCategoryDelete={this.handleCategoryDelete.bind(this)}
          categories={this.state.categories}
        />
        </Scroll>
      </CategoryWrapper>
    );
  }
}

