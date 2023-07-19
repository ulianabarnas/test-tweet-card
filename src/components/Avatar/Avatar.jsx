import { AvatarFrame } from './Avatar.styled';

export default function Avatar({ avatar, user }) {
  return (
      <AvatarFrame>
        <img src={avatar} alt={`${user} avatar`} width="45" />
      </AvatarFrame>
  );
}
