import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import '../heroBanner/style.scss';
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentsWrapper/ContentsWrapper';

const HeroBanner = () => {
  const [background, setBackround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackround(bg);
  }, [data]);

  const searchQueryHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchQueryHandler();
    }
  };

  return (
    <div className='heroBanner'>
      {!loading && <div className='backdrop-img'>
        <Img src={background} />
      </div>}
      <div className='opacity-layer'></div>
      <ContentWrapper>
        <div className='heroBannerContent'>
          <span className='title'>Welcome</span>
          <span className='subTitle'>Millions of movies, TV shows and people to discover. Explore now.</span>
          <div className='searchInput'>
            <input
              type='text'
              placeholder='Search for a movie or TV show...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={searchQueryHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
