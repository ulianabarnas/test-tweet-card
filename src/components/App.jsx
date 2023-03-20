import Box from './Box/Box';
import users from '../data/users.json'
import CardList from './CardList/CardList';
// import useLocalStorage from 'hooks/useLocalStorage';
// import { useState } from 'react';

export const App = () => {

  return (
    <Box
      as="main"
      width="70%"
      mx="auto"
      py={5}
    >
      <CardList
        usersInfo={users}
        // onClick={handleClick}
      />
    </Box>);
};
