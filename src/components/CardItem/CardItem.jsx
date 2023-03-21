import PropTypes from 'prop-types';
import Avatar from 'components/Avatar/Avatar';
import { Button, Item, Logo, Text } from './CardItem.styled';

import bgImg from '../../img/answer-question.png';
import logo from 'img/logotype.svg';

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
      maxWidth={380}
      minHeight={500}
      pt={28}
      pb={36}
      px={36}
      borderRadius={20}
      textAlign="center"
      background="linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)"
      boxShadow="cardShadow"
    >
      <Logo src={logo} alt="Logo" />
      <img src={bgImg} alt="Question and answer" />
      <Avatar avatar={avatar} user={user} />
      <div>
        <Text style={{ marginBottom: 16, fontWeight: 600 }}>{user}</Text>
        <Text style={{ marginBottom: 16 }}>
          {tweets.toLocaleString('en-US')} tweets
        </Text>
        <Text style={{ marginBottom: 26 }}>
          {followers.toLocaleString('en-US')} followers
        </Text>
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
  isFollow: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};