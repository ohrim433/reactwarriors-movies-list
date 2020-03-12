import React from "react";
import moviesData from "../moviesData"
import MovieItem from "./MovieItem";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: moviesData,
            moviesWillWatch: []
        }
    }

    removeMovie = movie => {
        const updateMovies = this.state.movies.filter((item) => {
            return item.id !== movie.id
        });
        this.setState({movies: updateMovies});
    };

    addMovieToWillWatch = movie => {
        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
        this.setState({moviesWillWatch: updateMoviesWillWatch});
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.movies.map((movie) => {
                                return (
                                    <div className="col-6 mb-4" key={movie.id}>
                                        <MovieItem
                                            removeMovie={this.removeMovie}
                                            addMovieToWillWatch={this.addMovieToWillWatch}
                                            movie={movie}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will Watch: {this.state.moviesWillWatch.length}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;