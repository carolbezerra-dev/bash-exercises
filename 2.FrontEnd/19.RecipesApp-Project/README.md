# Welcome to the Recipe project repository!

# Skills

In this project, you will be able to:

   - Use Redux to manage state
   - Using the React-Redux library

---
## What should be developed

You will develop a recipe app using Redux!

It will be possible to see, search, filter, favor and follow the process of preparing recipes and drinks!

The database will be 2 different APIs, one for food and one for drinks.

The layout is focused on mobile devices, so all prototypes will be developed on smaller screens.

## APIs

### TheMealDB API

[TheMealDB] (https://www.themealdb.com/) is an open database, maintained by the community, with recipes and ingredients from around the world.

The response model for a meal is as follows:
   <details>
     <summary> See response template for a meal </summary>

  ```json
    {
      "meals":[
          {
            "idMeal":"52882",
            "strMeal":"Three Fish Pie",
            "strDrinkAlternate":null,
            "strCategory":"Seafood",
            "strArea":"British",
            "strInstructions":"Preheat the oven to 200C\/400F\/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.",
            "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg",
            "strTags":"Fish,Seafood,Dairy,Pie",
            "strYoutube":"https:\/\/www.youtube.com\/watch?v=Ds1Jb8H5Sg8",
            "strIngredient1":"Potatoes",
            "strIngredient2":"Butter",
            "strIngredient3":"Milk",
            "strIngredient4":"Gruy\u00e8re",
            "strIngredient5":"Butter",
            "strIngredient6":"Leek",
            "strIngredient7":"Plain Flour",
            "strIngredient8":"White Wine",
            "strIngredient9":"Milk",
            "strIngredient10":"Parsley",
            "strIngredient11":"Salmon",
            "strIngredient12":"Haddock",
            "strIngredient13":"Smoked Haddock",
            "strIngredient14":"Eggs",
            "strIngredient15":"",
            "strIngredient16":"",
            "strIngredient17":"",
            "strIngredient18":"",
            "strIngredient19":"",
            "strIngredient20":"",
            "strMeasure1":"1kg",
            "strMeasure2":"Knob",
            "strMeasure3":"Dash",
            "strMeasure4":"50g",
            "strMeasure5":"75g",
            "strMeasure6":"2 sliced",
            "strMeasure7":"75g",
            "strMeasure8":"150ml",
            "strMeasure9":"568ml",
            "strMeasure10":"2 tbs chopped",
            "strMeasure11":"250g",
            "strMeasure12":"250g",
            "strMeasure13":"250g",
            "strMeasure14":"6",
            "strMeasure15":"",
            "strMeasure16":"",
            "strMeasure17":"",
            "strMeasure18":"",
            "strMeasure19":"",
            "strMeasure20":"",
            "strSource":"https:\/\/www.bbc.co.uk\/food\/recipes\/three_fish_pie_58875",
            "dateModified":null
          }
      ]
    }
  ```
  </details>

### The CockTailDB API

TheMealDB API is focused on drinks.

The answers follow the same structure, with some particularities related to drinks (such as being alcoholic or not, for example)

   <details>
     <summary> See response template for drinks </summary>

  ```json
    {
      "drinks":[
          {
            "idDrink":"17256",
            "strDrink":"Martinez 2",
            "strDrinkAlternate":null,
            "strDrinkES":null,
            "strDrinkDE":null,
            "strDrinkFR":null,
            "strDrinkZH-HANS":null,
            "strDrinkZH-HANT":null,
            "strTags":null,
            "strVideo":null,
            "strCategory":"Cocktail",
            "strIBA":null,
            "strAlcoholic":"Alcoholic",
            "strGlass":"Cocktail glass",
            "strInstructions":"Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
            "strInstructionsES":null,
            "strInstructionsDE":"Alle Zutaten in ein Mischglas geben und mit Eis f\u00fcllen. Bis zum Abk\u00fchlen umr\u00fchren und in ein gek\u00fchltes Coup\u00e9glas abseihen.",
            "strInstructionsFR":null,
            "strInstructionsZH-HANS":null,
            "strInstructionsZH-HANT":null,
            "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg",
            "strIngredient1":"Gin",
            "strIngredient2":"Sweet Vermouth",
            "strIngredient3":"Maraschino Liqueur",
            "strIngredient4":"Angostura Bitters",
            "strIngredient5":null,
            "strIngredient6":null,
            "strIngredient7":null,
            "strIngredient8":null,
            "strIngredient9":null,
            "strIngredient10":null,
            "strIngredient11":null,
            "strIngredient12":null,
            "strIngredient13":null,
            "strIngredient14":null,
            "strIngredient15":null,
            "strMeasure1":"1 1\/2 oz",
            "strMeasure2":"1 1\/2 oz",
            "strMeasure3":"1 tsp",
            "strMeasure4":"2 dashes",
            "strMeasure5":null,
            "strMeasure6":null,
            "strMeasure7":null,
            "strMeasure8":null,
            "strMeasure9":null,
            "strMeasure10":null,
            "strMeasure11":null,
            "strMeasure12":null,
            "strMeasure13":null,
            "strMeasure14":null,
            "strMeasure15":null,
            "strCreativeCommonsConfirmed":"No",
            "dateModified":"2017-12-19 18:34:15"
          }
      ]
    }
  ```
  </details>

---
# Project requirements

In this project, the person using the app can search for a specific recipe, explore recipes based on different criteria, bookmark and make recipes among other features.

The screens vary depending on the type of recipe (whether it is food or drink, in this case).

## Login screen

### 1 - Create all the elements that must respect the attributes described in the prototype for the login screen

### 2 - The person must be able to write their email in the email input

### 3 - The person must be able to write their password in the password input

### 4 - The form should only be valid after a valid email and a password of more than 6 characters are filled

### 5 - Save 2 tokens at localStorage after submission, identified by the keys mealsToken and cocktailsToken

### 6 - Save the user's email address in localStorage in the user key after submission

### 7 - Redirect the user to the main food recipe screen after successfully submitting and validating the login

## Header

### 8 - Implement the header elements in the main recipe screen, respecting the attributes described in the prototype

### 9 - Implement an icon for the profile screen, a title and an icon for the search, if one exists in the prototype

### 10 - Redirect the user to the profile screen by clicking on the profile button

### 11 - Develop the search button that, when clicked, the search bar should appear. The same goes for hiding it

## Search bar - Header

### 12 - Implement the elements of the search bar respecting the attributes described in the prototype

### 13 - Position the bar just below the header and implement 3 radio buttons: Ingredient, Name and First letter

### 14 - Search in the food API if the person is on the food page and on the drinks page if he is on the drinks page

### 15 - Redirect to the recipe details screen if only one recipe is found, with its ID in the URL

### 16 - Show recipes on cards if more than one recipe is found

### 17 - Display an `alert` if no recipe is found

## Menu inferior

### 18 - Implement the elements of the lower menu respecting the attributes described in the prototype

### 19 - Position the bottom menu in a fixed way and present 3 icons: one for food, one for drinks and one for exploration

### 20 - Display the bottom menu only on the screens indicated by the prototype

### 21 - Redirect the user to a cocktail list by clicking on the drinks icon

### 22 - Redirect the user to the explore screen by clicking on the explore icon

### 23 - Redirect the user to a list of foods by clicking on the food icon

## Main recipe screen

### 24 - Implement the elements of the main recipe screen respecting the attributes described in the prototype

### 25 - Load the first 12 food or drink recipes, one on each card

### 26 - Implement the category buttons to be used as a filter

### 27 - Implement the recipe filter through the API by clicking on the category filter

### 28 - Implement the filter as a toggle, that if it is selected again, the app should return the recipes without any filter

### 29 - Implement the category filter so that only one is selected at a time

### 30 - Develop the category filter with the option to filter by all categories

### 31 - Redirect the user, by clicking on the card, to the details screen, which must change the route and contain the recipe id in the URL

## Recipe details screen

### 32 - Implement the elements of a recipe detail screen respecting the attributes described in the prototype

### 33 - Make a request to the API by passing the `id` of the recipe that should be available in the URL parameters

### 34 - Develop the screen so that it contains an image of the recipe, the title, the category (or whether or not it is alcoholic), a list of ingredients followed by the quantities, instructions, a "bored" youtube video and recommendations

### 35 - Implement the recommendations, for food recipes, the recommendation should be drunk and vice versa

### 36 - Implement the recommendation cards, where there will be 6 cards, but showing only 2 and the scroll is horizontal, similar to a `carousel`

### 37 - Develop a button called "Start Recipe" that should be fixed at the bottom of the screen at all times

### 38 - Implement the solution so that if the recipe has already been made, the "Start Recipe" button should disappear

### 39 - Redirect the user if the "Start Recipe" button is clicked, the route must change to the recipe in process screen

### 40 - Implement a share button and a favorite button for the recipe

### 41 - Implement the solution so that, when you click the share button, the recipe link within the app should be copied to the clipboard and a message saying that the link has been copied should appear

### 42 - Implement the heart icon (favorite) so that it must be filled in if the recipe is favored and "unfilled" otherwise

### 43 - Implement the logic in the favorite button, if it is clicked, the heart icon should change its current state, if it is filled it should change to "unfilled" and vice versa

### 44 - Save your favorite recipes to `localStorage` under the key` favoriteRecipes`

## Recipe in progress screen

### 45 - Develop the screen so that it contains an image of the recipe, its title, its category (or if the drink is alcoholic or not) a list of ingredients with their respective quantity and instructions

### 46 - Develop a checkbox for each item on the ingredient list

### 47 - Implement a logic that, when clicking on an ingredient's checkbox, its name must be "crossed out" from the list

### 48 - Develop the logic of favoring and sharing, the logic of the detail screen of a recipe applies here

### 49 - Develop the canvas in such a way that, if the card's recipe is a food, it must have: the photo of the recipe, the name, the category, the area, a share button and a "disfavor" button

### 50 - Develop the screen in such a way that, if the card's recipe is a drink, it must have: the recipe photo, the name, whether it is alcoholic or not, a share button and a "disfavor" button

### 51 - Develop the solution so that the share button should copy the URL from the recipe details screen to the clipboard

## Explore screen

### 52 - Implement the elements of the explore screen respecting the attributes described in the prototype

### 53 - Develop the screen so that it has 2 buttons: one for exploring food and the other for exploring drinks

### 54 - Redirect the user by clicking on one of the buttons, the route must switch to the explore food or explore drinks page

## Screen to explore drinks or food

### 55 - Implement the elements of the screen to explore drinks or foods respecting the attributes described in the prototype

### 56 - Develop 3 buttons: one to explore by ingredient, one to explore by location of origin and one to take a random recipe

### 57 - Redirect the user by clicking on "By Ingredients", to the explore by ingredients screen

### 58 - Redirect the user by clicking on "By Place of Origin", the route should change to the Explore by Place of Origin screen

### 59 - Redirect the user by clicking on "Surprise Me!", The route must change to the details screen of a recipe, which must be chosen at random through the API

## Screen to explore ingredients

### 60 - Implement the elements of the explore ingredients screen respecting the attributes described in the prototype

### 61 - Develop cards for the first 12 ingredients, so that each card contains the name of the ingredient and a photo

## Explore screen by location/area

### 62 - Implement the elements of the explore screen by location of origin respecting the attributes described in the prototype

### 63 - Develop the same specifications as the main recipe screen, with the difference that category filters are replaced by a dropdown

### 64 - Implement the dropdown so that all areas returned from the API must be available, including the "All" option, which returns recipes without any filter

### 65 - Implement the route that should only be `/explore/food/area`

## Profile screen

### 66 - Implement the elements of the profile screen respecting the attributes described in the prototype

### 67 - Implement the solution so that the user's email must be visible

### 68 - Implement 3 buttons: one named "Recipes Made", one named "Favorite Recipes" and one named "Exit"

### 69 - Redirect the user who, when clicking on the "Favorite Recipes" button, the route should switch to the favorite recipes screen

### 70 - Redirect the user who, when clicking on the "Recipes Made" button, the route should switch to the Recipes made screen

### 71 - Redirect the user who, when clicking on the "Exit" button, the `localStorage` must be cleared and the route must switch to the login screen

---

#VQV
