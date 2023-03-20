import { AvatarFrame, Wrapper } from './Avatar.styled';

export default function Avatar({ avatar, user }) {
  return (
    <Wrapper>
      <AvatarFrame>
        <img src={avatar} alt={`avatar ${user}`} width="45" />
      </AvatarFrame>
    </Wrapper>
  );
}
