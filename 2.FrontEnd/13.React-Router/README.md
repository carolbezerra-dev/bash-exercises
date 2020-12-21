# Welcome to the CRUD Movie Card project repository!

---

The acronym ** CRUD ** stands for, _Create, Read, Update and Delete_, so it should be possible to perform the following operations on this project:

   - Add a new movie to the list - ** CREATE **;
   - List all registered films, with a summary information page about each film and a detailed information page for a selected film - ** READ **;
   - Edit a movie in the list - ** UPDATE **;
   - And delete a movie from the list - ** DELETE **;

This app will have 4 routes:

1. The root route (index), in the `/` path. This route will display a list of all registered films. This list contains summary information about each film.

2. A route to create new movies, on the `/ movies / new` path. This route will render a form for adding a new movie.

3. A route to show detailed information about a movie, in the `/ movies /: id` path. Where the `: id` is the URL parameter that represents the _id_ of the displayed movie. For example, when entering the `/ movies / 5` path, information about the movie with _id_` 5` will be displayed.

4. A route to edit a movie, in the `/ movies /: id / edit` path. As in route 3, `: id` is the _id_ of the movie to be edited. This route will render a form identical to that of route 2. In this case, however, the form will be filled with information from the film to be edited. When submitting the form, instead of creating a new film, the film in question will have its data updated.

The data will come from an API (simulated) and not more than one static file. Soon, you will have to deal with asynchronous requests and _promises_. You should also use _lifecycle methods_ and states to control what is rendered by your components depending on when the requests are.

---

## Project requirements

### 1 - Routes: The `App` component should render` BrowserRouter`

### 2 - Movie list: When assembled, `MovieList` must make a request to get the list of films to be rendered

Use the function `getMovies` from `movieAPI`, it returns a _promise_. 

Once the request returns, the result must be rendered. For each movie, render a `MovieCard` component, as shown below.

![image](index.png)

### 3 - `MovieCard`: it must have a link to a movie details page

### 4 - `MovieDetails`: you must make a request to get the movie to be rendered

After finishing the API request, you must render a card with more details about the film, containing:

   - An `<img>` with the movie image and `alt = 'Movie Cover'`;
   - Title;
   - Subtitle;
   - Synopsis;
   - Genre;
   - Evaluation;
   - a link with the text "EDIT" pointing to the route `/ movies /: id / edit` and a link pointing to the root route (` / `) with the text" BACK ".

The fields must exist on the card as shown in the image below.

![image](card-details.png)

### 5 - `EditMovie`: you must make a request to find the movie to be edited.

### 6 - `NewMovie`: On the home page, there should be a link to create new cards.

The link must contain the text "ADD CARD" and point to the `/ movies / new` route, containing a form to create new cards.

### 7 - Add proptypes to all components

### Bonus: Add a link to delete a card in `MovieDetails`.

---

#VQV 🚀
