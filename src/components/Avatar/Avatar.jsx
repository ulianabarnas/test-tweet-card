import { AvatarFrame, Wrapper } from './Avatar.styled';

export default function Avatar({ avatar, user }) {
  return (
    <Wrapper>
      <AvatarFrame>
        <img src={avatar} alt={`${user} avatar`} width="45" />
      </AvatarFrame>
    </Wrapper>
  );
}
