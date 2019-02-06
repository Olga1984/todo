import React from 'react';
import styled from 'styled-components';
import {CategoryListItem} from "../CategoryListItem/index";
import {RecyclebinButton, EditPencilButton, PlusButton} from 'components/TodoSwgButtons';

const UL = styled.div`
   list-style-type: none;
`;

export class CategoryList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return <UL>
      {this.props.categories.map((category, i) => {
        return <CategoryListItem
          key={category+i}
          category={category}
          handleCategoryDelete1={this.props.handleCategoryDelete.bind(this, category)}
        />})
      }
    </UL>;
          }
}
