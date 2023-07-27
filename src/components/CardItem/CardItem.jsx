import PropTypes from 'prop-types';
import Avatar from 'components/Avatar/Avatar';
import { Button, Item, Text } from './CardItem.styled';

export default function CardItem({
  id,
  avatar,
  user,
  tweets,
  followers,
  isFollow,
  handleClick,
}) {
  return (
    <Item
      as="li"
      position="relative"
      width={380}
      minHeight={500}
      pt={284}
      pb={36}
      px={36}
      borderRadius={20}
      textAlign="center"
      boxShadow="cardShadow"
    >
      <Avatar avatar={avatar} user={user} />
      <div>
        <Text>{user}</Text>
        <Text>{tweets.toLocaleString('en-US')} tweets</Text>
        <Text>{followers.toLocaleString('en-US')} followers</Text>
        <Button
          type="button"
          isFollow={isFollow}
          onClick={() => handleClick(id)}
        >
          {isFollow ? 'following' : 'follow'}
        </Button>
      </div>
    </Item>
  );
}

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  isFollow: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};
