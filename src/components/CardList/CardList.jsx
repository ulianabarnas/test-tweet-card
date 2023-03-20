import PropTypes from 'prop-types';
import Box from 'components/Box/Box';
import CardItem from 'components/CardItem/CardItem';
import useLocalStorage from 'hooks/useLocalStorage';

export default function CardList({ usersInfo }) {
  const [cards, setCards] = useLocalStorage('cards', usersInfo);

  const handleClick = cardId => {
    setCards(
      cards.map(card => {
        const { id, isFollow, followers } = card;

        if (cardId === id) {

          if (isFollow) {
            return {
              ...card,
              isFollow: !isFollow,
              followers: followers - 1,
            };
          }

          return {
            ...card,
              isFollow: !isFollow,
              followers: followers + 1,
          }
        }

        return card;
      })
    );
  };

  return (
    <Box
      as="ul"
      width="70%"
      maxWidth="380px"
      mx="auto"
    >
      {cards.map(({ id, ...props }) => {
        return (
          <CardItem key={id} id={id} {...props} handleClick={handleClick} />
        );
      })}
    </Box>
  );
}

CardList.propTypes = {
  usersInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isFollow: PropTypes.bool.isRequired,
    })
  ),
};