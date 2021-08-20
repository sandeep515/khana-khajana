import styled from "styled-components";

export const RecipeListContainer=styled.div`
display:flex;
flex-direction:row;
padding:35px;
justify-content:space-evenly;
gap:20px;
flex-wrap:wrap;
background-color:LightGray;
`;


export const RecipeContainer=styled.div`
display:flex;
flex-direction:column;
padding:13px;
box-shadow:0 4px 12px 0 #aaa;
width:300px;
background-color:white;

`;

export const CoverImg=styled.img`

height:200px;
`;


export const RecipeName=styled.span`
font-size: 18px;
font-weight: 600;
color: black;
margin: 10px 0;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

export const IngredientText=styled.span`
font-size:20px;
font-weight:bold;
border:solid 2px;
color:green;
margin-bottom:10px;
cursor:pointer;
padding:12px 17px;
border-radius:6px;
text-align:center;
`;

 export const FullText=styled(IngredientText)`
color:red;

`;

