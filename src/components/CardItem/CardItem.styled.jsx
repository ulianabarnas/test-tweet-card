import styled from 'styled-components';
import Box from 'components/Box/Box';

export const Item = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.light};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  text-transform: uppercase;
`;

export const Button = styled.button`
  min-width: 196px;
  padding: 14px 28px;
  color: ${p => p.theme.colors.dark};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  text-transform: uppercase;
  box-shadow: ${p => p.theme.shadows.buttonShadow};
  background-color: ${p => {
    return p.isFollow ? p.theme.colors.active : p.theme.colors.light;
  }};
  transition: all 300ms;

  &:hover {
    background-color: ${p => {
      return p.isFollow
        ? p.theme.colors.activeHovering
        : p.theme.colors.lightHovering;
    }};
  }
`;
