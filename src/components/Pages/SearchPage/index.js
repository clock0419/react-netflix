import React,{ useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import "./SearchPage.css";
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {
    const navigate = useNavigate();
    // ここに映画のデータが保存される（？）
    const [searchResults, setSearchResults] = useState([]);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    
    let query = useQuery();
    const searchTerm = query.get('q');
    // 검색할 때, 1초 뒤에 자동 검색
    const debounceSearchTerm = useDebounce(searchTerm, 1000);

    useEffect(() => {
        if (debounceSearchTerm) {
            fetchSearchMovie(debounceSearchTerm);
        }
    }, [debounceSearchTerm])

    const fetchSearchMovie = async(searchTerm) =>{
        try {
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`)
            console.log(request);
            setSearchResults(request.data.results);
        } catch (error) {
            console.log('error : ',error);
        }
    };
    
    const renderSearchResults = () => {
        return searchResults.length > 0 ? (
            <section className='search-container'>
                {/*eslint-disable-next-line */}
                {searchResults.map((movie) => {
                    if (movie.backdrop_path !== null && movie.dedia_type !== 'person') {
                        const movieImageUrl =
                        "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                        return (
                            <div className='movie' key={movie.id}>
                                <div
                                    onClick={() => navigate(`/${movie.id}`)}
                                    className='movie__column-poster'
                                >
                                    <img  
                                    src = {movieImageUrl} alt="movie"
                                    className='movie__poster'
                                    />
                                </div>
                            </div>
                        )
                    }
                })}
            </section>
        ) : (
            <section className='no-results'>
                <div className='no-results__text'>
                    <p>
                        探す映画"{debounceSearchTerm}"が無いです。
                    </p>
                </div>
            </section>
        )
    }

    return renderSearchResults();
}
