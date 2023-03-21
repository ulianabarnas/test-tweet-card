import users from 'data/users.json';
import CardList from 'components/CardList/CardList';
import { AppBox } from './App.styled';

export const App = () => {
  return (
    <AppBox
      as="main"
      width={420}
      mx="auto"
      py={5}
      px={4}
    >
      <CardList usersInfo={users} />
    </AppBox>
  );
};