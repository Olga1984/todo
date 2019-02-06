import React from 'react';
import Progress from 'react-progressbar';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
`;
const ProgressDiv = styled.div`
  width: 100%;
  padding: 40px 0;
  margin: 0 auto;  
`;

export class TodoHeader extends React.Component {
  constructor(props){
    super(props);
    this.handleGhange = this.handleGhange.bind(this);
  }

  handleGhange(e){
    let check = e.target.value;
  }
  render() {
    return (
      <div>
      <HeaderWrapper>
          <h2>
            To-Do List
          </h2>
        <h3>{this.props.done}% done</h3>
        <div>
          <input id="done" type='checkbox' onChange={this.handleGhange} checked={true}/>
          <label htmlFor="done">Show done</label>
        </div>
        </HeaderWrapper>

        <ProgressDiv>
          <Progress completed={this.props.done} />
        </ProgressDiv>
      </div>
    );
  }
}

