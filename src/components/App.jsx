import Box from './Box/Box';
import users from '../data/users.json'
import CardList from './CardList/CardList';

export const App = () => {
  return (
    <Box
      width="70%"
      mx="auto"
      py={5}
      // color='black'
      as="main"
    >
      <CardList usersInfo={users} />
    </Box>);
};
