import Box from './Box/Box';
import users from '../data/users.json'
import CardList from './CardList/CardList';

export const App = () => {

  return (
    <Box
      as="main"
      width="75%"
      mx="auto"
      py={5}
    >
      <CardList usersInfo={users}/>
    </Box>);
};
