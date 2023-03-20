import styled from 'styled-components';
import frame from '../../img/avadecor.svg';

export const Wrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 178px;
  width: 380px;
  height: 80px;
  display: flex;
  align-items: center;
  background-image: url('${frame}');
`;

export const AvatarFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  overflow: hidden;
`;
