import PropTypes from 'prop-types';
import CardItem from 'components/CardItem/CardItem';
import useLocalStorage from 'hooks/useLocalStorage';
import { Wrapper } from './CardList.styled';

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
    <Wrapper>
      {cards.map(({ id, ...props }) => {
        return (
          <CardItem key={id} id={id} {...props} handleClick={handleClick} />
        );
      })}
    </Wrapper>
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