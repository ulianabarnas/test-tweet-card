import styled from 'styled-components';
import Box from 'components/Box/Box';
import imgPath from 'img/answer-question.png';
import logoPath from 'img/logotype.svg';

export const Item = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${logoPath}), url(${imgPath}),
    linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  background-repeat: no-repeat;
  background-position: top 20px left 20px, top 28px center, center;
  background-size: 76px, 308px, cover;

  &::before {
    content: '';
    position: absolute;
    top: 214px;
    left: 0;
    display: inline-block;
    width: 380px;
    height: 8px;
    background-color: ${p => p.theme.colors.light};
    box-shadow: 0px 3px 3px 0px #fbf8ff inset,
      0px 3px 3px 0px rgba(0, 0, 0, 0.1),
      0px -2px 3px 0px #ae7be3 inset;
  }
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.light};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  text-transform: uppercase;

  &:nth-child(3) {
    margin-bottom: ${p => p.theme.space[5]}px;;
  };

    &:nth-child(1) {
    font-weight: ${p => p.theme.fontWeights.semiBold};
  };
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
  cursor: pointer;
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
