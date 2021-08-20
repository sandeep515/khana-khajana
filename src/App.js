 
import styled from "styled-components";
import React, { useState } from 'react';
import Axios from "axios";
import { Header,AppNameComponent,SearchIcon,Logo,SearchInput,SearchComponent } from "./components/HeaderComponent";
import { RecipeListContainer,RecipeContainer,CoverImg,RecipeName,IngredientText,FullText } from "./components/RecipeComponent"; 
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";




// API ID and KEY 
const API_ID="e357ffdb";

const API_KEY="69b2804a273272b7de92b41152656047";

const Container = styled.div`
display:flex;
flex-direction:column;
`;

const PlaceHolder=styled.img`
height:250px;
width:250px;
margin:180px;
opacity:50%;
`;

const RecipeComponent=(props)=>{
  const {recipeObj}=props;
const [show,setShow]=React.useState(false);
return (
      

<>
   <Dialog open={show}>
   <DialogTitle id="alert-dialog-slide-title">INGREDINTS</DialogTitle>
   <DialogContent>
          
   <table>
            <thead>
              <th>Ingredient</th>
              <th>Weight</th>
            </thead>
            <tbody>
               {recipeObj.ingredients.map((ingredientobj)=>(

                <tr>
                  <td>{ingredientobj.text}</td>
                  <td>{ingredientobj.weight}</td>
                </tr>
                 
               ))}
              
            </tbody>
          </table>
          
        </DialogContent>
        <DialogActions>
          <IngredientText onClick={() => window.open(recipeObj.url)}>See More</IngredientText>
          <FullText onClick={() => setShow("")}>Close</FullText>
        </DialogActions>

</Dialog>  
  <RecipeContainer>
         <CoverImg src={recipeObj.image}/>
         <RecipeName>{recipeObj.label}</RecipeName>
         <IngredientText onClick={()=>setShow(true)}>Ingredients</IngredientText>
         <FullText onClick={()=>window.open(recipeObj.url)}>See Complete Recipe</FullText>

       </RecipeContainer>
       </>
);
};





function App() {
   const [timeoutId,updateTimeoutId]=useState();
   const [recipeList,updateRecipeList]=useState([]);

   const fetchRecipe=async(searchString)=>{

   const response= await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}`)
   
   updateRecipeList(response.data.hits);
   };

    const onTextChange= (event) => {
    clearTimeout(timeoutId);
    const timeout=setTimeout(()=>fetchRecipe(event.target.value),500);
    updateTimeoutId(timeout);
 };

    return (

        <Container >

        <Header>
        <AppNameComponent > <Logo src = "hamburger.svg" / > Khana Khajana </AppNameComponent> 

        <SearchComponent>
          <SearchIcon src = "/search-icon.svg" / >
            <SearchInput placeholder="Search Recipe"  onChange={onTextChange} />
            
            </SearchComponent >

        </Header>  
        <RecipeListContainer>
         {recipeList.length ? recipeList.map((recipeObj)=>(<RecipeComponent recipeObj={recipeObj.recipe}/>)):<PlaceHolder src="hamburger.svg"/>}
        </RecipeListContainer>

        </Container >
    );
}

export default App;