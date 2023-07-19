import styled from 'styled-components';

export const AvatarFrame = styled.div`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  overflow: hidden;
  background-color: #EBD8FF;
  box-shadow: 
    0px 3px 3px 0px rgba(0, 0, 0, 0.1),
    0px -2px 3px 0px #AE7BE3 inset,
    0px 3px 3px 0px #FBF8FF inset;

  &::after{
    content: '';
    display: inline-block;
    position: absolute;
    top: center;
    left: center;
    z-index: -10;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: #5736A3;
    box-shadow: 
    0px 3px 3px 0px rgba(0, 0, 0, 0.1) inset,
    0px 3px 3px 0px #FBF8FF, 
    0px -2px 3px 0px #AE7BE3;
  }
`;