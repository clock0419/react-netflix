import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css"

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate(); // 검색할 때마다, 위에 URL이 적용되어짐. 

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        })

        return  () => {
            window.removeEventListener('scroll', () => {});
        };
    }, []);
    
    const handleChange = (e) => {
        // state먼저 바꾸어주고 경로가 바뀜
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`)
    };

    return (
        // scrollがshowになれた場合、cssからの「nav__blackを呼び出す」
        <nav className= {`nav ${show && "nav__black"}`}> 
            <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                className="nav_logo"
                onClick={() => window.location.reload()}
            />

            <input
                value={searchValue}
                onChange={handleChange}
                className='nav__input'
                type='text'
                placeholder='映画を検索してください。'
            />

            <img
                alt="User logged"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                className="nav__avatar"
            />
        </nav>
    )
}
