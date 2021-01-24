import React from 'react';

export class Content extends React.Component {
    constructor () {
        super();
            this.state = {
            recipe: " ",
            url: "",
            ingredients: [],
            portions: []
        }
    }    

   componentDidMount () {
       const url = "https://www.themealdb.com/api/json/v1/1/random.php";

        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            this.setState({recipe: data.meals[0]});
            console.log(this.state.recipe);
            this.replaceUrl();
            this.getIngredients();
            this.getPortions();
        })
    }

    replaceUrl () {
        let url = this.state.recipe.strYoutube;
        let newUrl = url.replace("watch?v=", "embed/");
        console.log(newUrl)
        this.setState({url: newUrl})
    }

    getIngredients() {
       let ingredientsList = [];
       let pairs = Object.entries(this.state.recipe);
       
        pairs.forEach(pair => {
            if (pair[0].includes("strIngredient") && pair[1] !== "" &&pair[1] !== null) {
                ingredientsList.push(pair[1])
            }
        })
        console.log(ingredientsList);
        this.setState({ingredients: ingredientsList})
    }

    getPortions() {
        let portionsList = [];
        let pairs = Object.entries(this.state.recipe);
       
        pairs.forEach(pair => {
            if (pair[0].includes("strMeasure") && pair[1] !== "") {
                portionsList.push(pair[1])
            }
        })
        console.log(portionsList);
        this.setState({portions: portionsList})
    }

    render() {
        const recipeIngredients = [];
           this.state.ingredients.forEach((ingredient, i) => {
               let ingredientCount = (`ingredient ingredient${i + 1}`)
                    recipeIngredients.push(<li className={ingredientCount} key={(i+1).toString()}>{ingredient} -  {this.state.portions[i]}</li>)
        });
    
        return <div className="page__content"> 
        <div className="content__side-block"> 
                <img src={this.state.recipe.strMealThumb} width="200px" className="content__main-block__img" alt="meal"></img>
                <div className="content__side-block__general-info">
                <h3><span>Category: </span>{this.state.recipe.strCategory}</h3>
                <h3><span>Area: </span>{this.state.recipe.strArea}</h3>
                <h3><span>Tags: </span>{this.state.recipe.strTags}</h3>
                </div>
                <div className="content__side-block__additional-info">
                <h2 className="side-block__title">Ingredients:</h2>
                <ul className="content__ingredients-list">
                      {recipeIngredients}
                </ul>
                </div>
           </div>
            <div className="content__main-block">
                 <h2 className="content__main-block__title">{this.state.recipe.strMeal}</h2>
                 <h3 className="content__main-block__description">  <p>{this.state.recipe.strInstructions}</p></h3>
            </div>
           <div className="content__media-block">
                <h2 className="content__media__title">Video Recipe</h2>
               <iframe title="myFrame" className="content__media-item_video" width="800px" height="450px" src={this.state.url}>
               </iframe>
           </div>
        </div>
    }
}