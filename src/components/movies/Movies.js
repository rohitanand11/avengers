import React from 'react';
import Classes from './Movies.module.css';

const Movies = ({ movies_list }) => {

    const renderTable = () => {

        return (
            <React.Fragment>
                <tr>
                    {movies_list.coloumn_names.map((elem) => {
                       return <th key={elem}>{elem}</th>
                    })}
                </tr>

                {movies_list.movies.map((elem,index) => {
                    return (
                        <tr key = {`${index}`}>
                            <td>{elem.movie_name}</td>
                            <td>{elem.year}</td>
                            <td>{elem.main_character}</td>
                        </tr>
                    );
                })}

            </React.Fragment>

        );
    }

    return (
        <div className={Classes.Movies}>
            <table>
                {renderTable()}
            </table>
        </div>
    )
}

export default Movies;