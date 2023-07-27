import PropTypes from 'prop-types';
import CardItem from 'components/CardItem/CardItem';
import useLocalStorage from 'hooks/useLocalStorage';
import { Wrapper } from './CardList.styled';

export default function CardList({ usersInfo }) {
  const [cards, setCards] = useLocalStorage('cards', usersInfo);

  const handleClick = cardId => {
    setCards(prevCards =>
      prevCards.map(card => {
        const { id, followers, isFollow = false } = card;

        if (cardId === id) {
          return {
            ...card,
            isFollow: !isFollow,
            followers: isFollow ? followers - 1 : followers + 1,
          };
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
    })
  ),
};
