import styled from '@emotion/styled';
import colors from '../../style/colors';
import mediaquery from '../../style/mediaquery';

import BreakdownContainer from './BreakdownContainer';
import TypeContainer from './TypeContainer';
import CategoryContainer from './CategoryContainer';
import InputFieldsContainer from './InputFieldsContainer';
import SubmitContainer from './SubmitContainer';

const Container = styled.div(mediaquery({
  width: '100%',
  height: '100%',
  padding: '.5em',
  borderTop: [
    `${colors.gray_backgroud} solid 1px`,
    `${colors.gray_backgroud} solid 1px`,
    `${colors.gray_backgroud} solid 1px`,
    'none',
    'none',
  ],
  borderLeft: [
    'none',
    'none',
    'none',
    `${colors.gray_backgroud} solid 1px`,
    `${colors.gray_backgroud} solid 1px`,
  ],
  overflow: 'auto',
}));

const Box = styled.div(mediaquery({
  width: '95%',
  height: '100%',
  color: `${colors.gray_test02}`,
  margin: '0 auto',
}));

export default function TransactionDetailModal() {
  return (
    <Container>
      <Box>
        <BreakdownContainer />
        <TypeContainer />
        <CategoryContainer />
        <InputFieldsContainer />
        <SubmitContainer />
      </Box>
    </Container>
  );
}