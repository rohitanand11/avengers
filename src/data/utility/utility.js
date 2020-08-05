import Data from '../dataObj/dataObj';

const corousalImage = () => {

    const image_corousal = [...Data.corousal];
    return image_corousal;
}

const movie_list  = () => {
    const movies = {...Data.movie_list};
    return movies;
}

const stats  = () => {
    const stats = {...Data.stats};
    return stats;
}

export {corousalImage,movie_list,stats};