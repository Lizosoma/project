import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StandCard from '../../components/stand-card/StandCard';
import Back from '../../components/Back';

const Favorites = () => {
  const [favoriteStands, setFavoriteStands] = useState([]);

  const storeData = useSelector((state) => state.favoriteReducer);
  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });

      setFavoriteStands(res);
    }
  }, []);

  return (
    <>
      <Back />
      {favoriteStands.length ? (
        <div className="cards">
          {favoriteStands.map((stand) => (
            <StandCard key={stand.id} stand={stand} isFavorite={true} />
          ))}
        </div>
      ) : (
        <p className="noMessage">No favorite stands yet</p>
      )}
    </>
  );
};

export default Favorites;
