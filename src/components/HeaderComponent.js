import styled from "styled-components";


export const Header = styled.div`
color:white;
background-color:black;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
font-size:25px;
font-weight:blod;
padding:15px;
box-shadow: 0 4px 8px 0 #555;

`;


export const AppNameComponent = styled.div`
   display:flex;
   align-items:center;

`;

export const Logo = styled.img`
    width: 45px;
    height: 45px;
    margin: 15px;
`;

export const SearchComponent = styled.div`
display:flex;
flex-direction:row;
background-color:white;
padding:10px;
border-radius:7px;
width:50%;
`;


export const SearchInput=styled.input`
border:none;
outline:none;
margin-left:16px;
font-size:17px;
font-weight:bold;
`;

 export const SearchIcon=styled.img`
    width: 36px;
    height: 36px;

 
 `;
