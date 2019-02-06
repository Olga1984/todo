import React from 'react';
import styled from 'styled-components';
import {CategoryListChange} from 'components/CategoryListChange';

const Heading = styled.h1`    
    width:100%;
    height:100px;
`;
const CategoryWrapper = styled.div`
    width: 30%;   
`;
const Scroll = styled.div`   
    overflow-y: scroll;
    height: 600px;
`;
export class TodoCategoryChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '',
      categories: [
        {title: 'Category-1'}, { title: 'Category-2' }, { title: 'Category-3' },{ title: 'Category-4' },{ title: 'Category-5'},{ title: 'Category-6' }
      ]
    };

  }
  handleCategoryDelete(categoryToBeDeleted){
    console.log(categoryToBeDeleted);

  let newData = this.state.categories.filter((_item) => {
    return _item !== categoryToBeDeleted;
  });
    this.setState({ categories: newData});
  }

  render() {
    return (
      <CategoryWrapper>
        <Heading>
          {this.props.value}
        </Heading>
        <Scroll>
        <CategoryListChange
          handleCategoryDelete={this.handleCategoryDelete.bind(this)}
          categories={this.state.categories}
        />
        </Scroll>
      </CategoryWrapper>

    );
  }
}

