import React, {Component} from 'react';

class MovieItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            willWatch: false
        }
    }

    favBtnClick = () => {
        let newWillWatch = !this.state.willWatch;
        this.setState({
            willWatch: newWillWatch
        });
    };

    render() {
        const {movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch} = this.props;
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                            <button type="button" className={
                                this.state.willWatch ?
                                    "btn btn-success" :
                                    "btn btn-secondary"}
                                    onClick={() => {
                                        this.favBtnClick();
                                        this.state.willWatch ?
                                            removeMovieFromWillWatch(movie) :
                                            addMovieToWillWatch(movie)
                                    }}
                            >
                                {this.state.willWatch ? "Remove Will Watch" : "Will Watch"}
                            </button>
                    </div>
                    <button onClick={removeMovie.bind(null, movie)}>Delete movie</button>
                </div>
            </div>
        );
    }
}

// const MovieItem = (props) => {
//     const {movie, removeMovie, addMovieToWillWatch} = props;
//     return (
//         // <div style={{borderWidth: 1, borderStyle: "solid", borderColor: "black"}}>
//         // <div>
//         //     <p>{movie.title}</p>
//         //     <button onClick={removeMovie.bind(null, movie)}>Delete movie</button>
//         // </div>
//         <div className="card">
//             <img
//                 className="card-img-top"
//                 src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
//                 movie.poster_path}`}
//                 alt=""
//             />
//             <div className="card-body">
//                 <h6 className="card-title">{movie.title}</h6>
//                 <div className="d-flex justify-content-between align-items-center">
//                     <p className="mb-0">Rating: {movie.vote_average}</p>
//                     <button type="button" className="btn btn-secondary"
//                             onClick={addMovieToWillWatch.bind(null, movie)}>
//                         Will Watch
//                     </button>
//                 </div>
//                 <button onClick={removeMovie.bind(null, movie)}>Delete movie</button>
//             </div>
//         </div>
//     );
// };

export default MovieItem;