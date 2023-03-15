import Box from 'components/Box/Box';

export default function CardList({ usersInfo }) {
  return (
    <Box
      as="ul"
      //   pt={5}
      //   maxWidth="300px"
      //       mx="auto"
    >
      {usersInfo.map(({ id, user, tweets, followers, avatar }) => {
        return (
          <Box
            as="li"
            waxWidth="380px"
            p={4} bg="red"
            height="400px"
            borderRadius={20}
            // boxShadow="normal"
          >

          </Box>
        );
      })}
    </Box>
  );
}
