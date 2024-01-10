import React, {useEffect, useState} from 'react'
import axios from '../api/axios';
import "./Row.css"
import "./Nav.css"
import MovieModal from './MovieModal/index';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Row({ title, fetchUrl, isLargeRow, id}) {

    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        fetchMovieData();
        // ★↓「eslint-disable-next-line」がwarring 消す
        //eslint-disable-next-line
      }, []);

    const fetchMovieData = async() => {
        const request = await axios.get(fetchUrl);
        console.log('request', request);
        setMovies(request.data.results);
    };

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    };

    return <section className='row'>
        <h2>{title}</h2>

        <Swiper 
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true} // loop 기능을 사용할 것인지
        breakpoints={{
          1378: {
            slidesPerView: 6, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 6, // 몇개씩 슬라이드 할지
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        navigation  // arrow 버튼 사용 유무 
        pagination={{ clickable: true }} // 페이지 버튼 보이게 할지 
      >

            <div id={id} className="row__posters">
                {movies ? movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <img
                        key={movie.id}
                        style={{ padding: "25px 0" }}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original/${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        } `}
                        alt={movie.name}
                        onClick={ () => handleClick(movie)}
                        />
                    </SwiperSlide>
                ))
            : null}
            </div>

        </Swiper>
                {
                    modalOpen && (
                        <MovieModal {...movieSelected} setModalOpen={setModalOpen}/>
                    )
                }

    </section>
}
