# Assignment 1 - ReactJS app.

Student ID: 20102083

## Overview

A web app developed using React and the TMDB API to implement a local web server that can display movies and movie details, as well as allow the user to view curate a list of favorites and movies that they plan to watch, akin to Letterboxd or IMDB.

## Features
Features that were added on top of the original react-movies-lab app:
- Search bar, allowing you to search for movies according to a specific query
- Light/dark mode switch toggle available throughout the web app
- Added popular actors page, actor details view
- Able to filter actors by country and search up by name
### To-do
- [x] Two additional static endpoints (top movies + popular actors)
- [x] Parameterized endpoints (search function + actor details page)
- [x] Caching with react-query on all endpoints
- [x] Implementation of filtering, sorting/searching features (search feature implemented for movies)
- [x] Implement responsive UI layout
- [x] Develop README.md further 

## Setup requirements

A TMDB API key must be obtained in order for this program to run properly, which can be obtained at: https://www.themoviedb.org/settings/api

Once an API key is generated, create a .env file in the `movies` folder with the following parameters:
```
REACT_APP_TMDB_KEY=... your API key value ...
FAST_REFRESH=false
```

## API endpoints
API endpoints that were added on top of the original react-movies-lab app:

- movies/top_rated - returns a list of the highest rated movies on TMDB
- person/popular - returns a list of people on TMDB with the highest popularity rating

## Routing
Routes that were added on top of the original react-movies-lab app:

- /movies/popular - static endpoint, lists top rated movies (slight misnomer)
- /actors - static endpoint, lists popular actors
- /actors/:id - parameterized endpoint, shows details about a specific actor
- /movies/:id/recommendations - parameterized endpoint, lists recommended movies using a movie id as a parameter

## Independent learning
Technologies that were utilized in this project that were outside the topics covered in course material:

### Theme changing

Resources used to research this feature:
https://semaphoreci.com/blog/dark-mode-reactjs-material-ui

### Responsive UI

Resource for researching responsive UI using MUI:
https://mui.com/material-ui/
