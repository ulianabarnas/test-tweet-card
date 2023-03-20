import logo from '../../img/logo.svg';
import bgImg from '../../img/answer-question.png';
import { Button, ButtonActive, Item, Logo, Text } from './CardItem.styled';
import Avatar from 'components/Avatar/Avatar';
import { useState } from 'react';

export default function CardItem({ avatar, user, tweets, followers }) {

  const [state, setState] = useState(followers);
  const [isFollow, setIsFollow] = useState(false);
  console.log("state: ", state);
  console.log("isFollow: ", isFollow);
  

  const handleClick = () => {
    setIsFollow(!isFollow);

    if (isFollow) {
      setState(state - 1);
      return
    }
    setState(state + 1);
  }

  return (
    <Item
      as="li"
      position="relative"
      width={380}
      minHeight={500}
      pt={28}
      pb={36}
      px={36}
      borderRadius={20}
      textAlign="center"
      background="linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)"
      boxShadow="normal"
    >
      <Logo src={logo} alt="Logo" />
      <img src={bgImg} alt="Question and answer" />
      <Avatar avatar={avatar} user={user} />
      <div>
        <Text style={{ marginBottom: 16, fontWeight: 600 }}>{user}</Text>
        <Text style={{ marginBottom: 16 }}>{tweets.toLocaleString("en-US")} tweets</Text>
        <Text style={{ marginBottom: 26 }}>{state.toLocaleString("en-US")} followers</Text>
        {isFollow ? (
          <ButtonActive
            type="button"
            onClick={handleClick}>
            FOLLOWING
          </ButtonActive>
        ) : (
            <Button
              type="button"
              onClick={handleClick}>
            FOLLOW
          </Button>
        )}
      </div>
    </Item>
  );
}
