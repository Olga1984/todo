import React from 'react';
import styled from 'styled-components';

const Button = styled.button`  
  background: transparent;  
  border: 1px solid grey;
  border-radius: 3px;
  height: 30px;
  margin-left: 2px;
  color: palevioletred;  
  outline: none;
   &:hover {
   color: green;
   border-color: green;
  } 
  &:active {
   color: red;
   border-color: red;
  } 
`;

export class RecyclebinButton extends React.Component {
  render() {
    const recyclebin = <svg height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>;
    return (
      <Button>
        {recyclebin}
      </Button>
    );
  }
}
export class EditPencilButton extends React.Component {
  render() {
    const editPencil = <svg  height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>;
    return (
      <Button>
        {editPencil}
      </Button>
    );
  }
}
export class PlusButton extends React.Component {
  render() {
    const editPencil = <svg  height="15" version="1.1" viewBox="0 0 5 5" width="15">
      <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" />
    </svg>;
    return (
      <Button>
        {editPencil}
      </Button>
    );
  }
}

export class SearchButton extends React.Component {
  render() {
    const search = <svg  height="20" version="1.1" viewBox="0 0 24 24" width="20"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>;
    return (
      <Button>
        {search}
      </Button>
    );
  }
}
export class ArrowButton extends React.Component {
  render() {
    const search = <svg height="20" version="1.1" viewBox="0 0 60 60" width="20">
      <defs>
        <linearGradient id="c">
          <stop stop-color="#00bf00" offset="0"/>
          <stop stop-color="#ff0" stop-opacity=".996" offset="1"/>
        </linearGradient>
        <linearGradient id="d">
          <stop stop-color="#ff0" offset="0"/>
          <stop stop-color="#00bf00" stop-opacity=".996" offset="1"/>
        </linearGradient>
      </defs>
      <path d="m55.159 51.251c-13.689-30.028-36.872-22.962-37.093-22.962v9.9356l-13.358-16.007 13.468-13.468v10.046s32.125-7.5069 36.983 32.456z" fill="url(#d)" fill-rule="evenodd" stroke="url(#c)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.801"/>
    </svg>;
    return (
      <Button>
        {search}
      </Button>
    );
  }
}
