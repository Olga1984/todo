import React from 'react';
import styled from 'styled-components';
import {CategoryListItemChange} from "components/CategoryListItemChange";


const UL = styled.div`
   list-style-type: none;
`;

export class CategoryListChange extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return <UL>
      {this.props.categories.map((category, i) => {
        return <CategoryListItemChange
          key={category+i}
          category={category}
          handleCategoryDelete1={this.props.handleCategoryDelete.bind(this, category)}
        />})
      }
    </UL>;
          }
}
