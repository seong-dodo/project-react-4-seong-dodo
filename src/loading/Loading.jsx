import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import colors from '../style/colors';
import mediaquery from '../style/mediaquery';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div(mediaquery({
  width: '100%',
  margin: '0 auto',
}));

const LoadindSpinner = styled.div(mediaquery({
  display: 'block',
  margin: '0 auto',
  width: ['30px', '30px', '40px', '40px', '40px'],
  height: ['30px', '30px', '40px', '40px', '40px'],
  border: `7px solid ${colors.loading_01}`,
  borderRadius: '50%',
  borderTopColor: `${colors.loading_02}`,
  animation: `${spin} 1s linear infinite`,
}));

export default function Loading() {
  return (
    <Container>
      <LoadindSpinner />
    </Container>
  );
}
