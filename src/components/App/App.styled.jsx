import styled from 'styled-components';
import Box from '../Box/Box';

export const AppBox = styled(Box)`
  @media screen and (min-width: 420px) {
    width: 420px;
  }

  @media screen and (min-width: 820px) {
    width: 820px;
  }

  @media screen and (min-width: 1220px) {
    width: 1220px;
  }
`;