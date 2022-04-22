import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Header2 from '../Header2';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import styled from 'styled-components';
import YoutuberCard from './YoutuberCard';
import { getCardInfos, getCreators } from '../../commons/firestore2';

const CardContainer = styled.div`
  display: grid;
  background-color: white;
  margin-left: 30px;
  margin-right: 30px;
  grid-template-columns: repeat(auto-fill, minmax(18%, auto));
  grid-row-gap: 3%;
  grid-column-gap: 1%;
  margin-bottom: 7%;
`;

function MainPage() {
  const [page, setPage] = useState(1);
  const [Youtubers, setYoutubers] = useState([]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    console.log("scrolltop : ", scrollTop);
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  const getQuery = () => {
    return new URLSearchParams(window.location.search);
  };

  useEffect(() => {
    const loadYoutuber = async () => {
      let newYoutubers = await getCardInfos();

      const keyword = getQuery().get('search');
      if (keyword && keyword.length > 0) {
        newYoutubers = newYoutubers.filter((youtuber) => {
          return youtuber.name.includes(keyword);
        });
      }

      setYoutubers(newYoutubers);
    };
    
    loadYoutuber();
  }, [page]);

  return (
    <div>
      <Header2 />
      <CardContainer onScroll={handleScroll}>
        {Youtubers &&
          Youtubers.map((cardinfo) => <YoutuberCard cardinfo={cardinfo} />)}
      </CardContainer>
    </div>
  );
}

export default MainPage;
