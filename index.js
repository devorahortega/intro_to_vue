var app = new Vue({
  el: "#app",
  import: axios from "axios",
  data: function () {
    message: "Hello from JavaScript!";
    movies: ["Gettysburg", "Beauty and the Beast", "Star Wars I", "Star Wars II"];
    newMovieParams: "";
  },
  methods: {
    createMovie: function () {
      axios
        .post("http://localhost:3000/movies", this.newMovieParams)
        .then((response) => {
          console.log("Successful addition!", response.data);
          this.movies.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
});
