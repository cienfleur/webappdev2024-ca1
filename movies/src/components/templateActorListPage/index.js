import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid2";

function ActorListPageTemplate({ actors, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedActors = actors
    .filter((n) => {
      return n.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((n) => {
      return genreId > 0 ? n.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <ActorList action={action} actors={displayedActors}></ActorList>      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;
