# Assignment 1 - ReactJS app.

Student ID: 20102083

## Overview

A web app developed using React and the TMDB API to implement a local web server that can display movies and movie details, as well as allow the user to view curate a list of favorites and movies that they plan to watch, akin to Letterboxd or IMDB.

## Features (WIP)
Features that were added on top of the original react-movies-lab app:
- Search bar, allowing you to search for movies according to a specific query
- Additional sorting filters added to movie list views
- Pagination of movie search view page, allowing you to browse through multiple pages of results
- Movie details page lists cast
- Added actor page, includes movies they've acted in which allows for linking between movies and actors
### To-do
- [x] Two additional static endpoints (top movies + popular actors)
- [ ] Parameterized endpoints
- [x] Caching with react-query on all endpoints
- [ ] Implementation of filtering, sorting/searching features
- [ ] Implement responsive UI layout
- [ ] Third-party authentication with Firebase
- [x] Develop README.md further 

## Setup requirements
In order to host clone and use this repository for yourself:

## API endpoints
API endpoints that were added on top of the original react-movies-lab app:

## Routing
Routes that were added on top of the original react-movies-lab app:

- /movies/popular - static endpoint, lists top rated movies (slight misnomer)
- /actors - static endpoint, lists popular actors
- /actors/:id - parameterized endpoint, shows details about a specific actor
- /movies/:id/recommendations - parameterized endpoint, lists recommended movies using a movie id as a parameter

## Independent learning
Technologies that were utilized in this project that were outside the topics covered in course material:

### Pagination 

### Firebase
