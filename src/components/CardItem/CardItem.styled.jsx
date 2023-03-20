import styled from 'styled-components';
import Box from 'components/Box/Box';

export const Item = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.light};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  min-width: 196px;
  padding: 14px 28px;
  color: ${p => p.theme.colors.dark};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  font-size: 18px;
  line-height: 22px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  background: ${p => p.theme.colors.light}; ;
`;

export const ButtonActive = styled(Button)`
  background-color: ${p => p.theme.colors.active};
`