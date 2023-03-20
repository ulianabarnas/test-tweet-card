import Box from 'components/Box/Box';
// import PropTypes from 'prop-types';
import CardItem from 'components/CardItem/CardItem';
import useLocalStorage from 'hooks/useLocalStorage';
// import { useState } from 'react';

export default function CardList({ usersInfo }) {

  const [cards, setCards] = useLocalStorage('cards', usersInfo);




  return (
    <Box
      as="ul"
      maxWidth="380px"
      mx="auto"
    >
      {cards.map(({ id, ...props }) => {
        return <CardItem key={id} id={id} {...props} setCards={setCards} />
      })}
    </Box>
  );
}


// !!!!
// CardList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };