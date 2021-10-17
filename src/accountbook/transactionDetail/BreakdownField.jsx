import styled from '@emotion/styled';
import colors from '../../style/colors';
import mediaquery from '../../style/mediaquery';

const Container = styled.div(mediaquery({
  width: '100%',
  height: '98%',
  textAlign: 'center',

  // border: '1px solid black',
}));

const LabelBox = styled.div(mediaquery({
  float: 'left',
  width: ['25%', '25%', '25%', '30%', '20%'],
  height: '100%',
  padding: 0,
  '& label': {
    fontSize: ['0.6em', '0.6em', '0.7em', '0.8em', '1em'],
    letterSpacing: '0.3em',
  },

  // border: '1px solid black',
}));

const InputBox = styled.div(mediaquery({
  float: 'left',
  width: ['75%', '75%', '75%', '70%', '80%'],
  height: '100%',
  '& input': {
    width: ['90%', '90%', '90%', '100%', '100%'],
    height: ['95%', '95%', '95%', '95%', '80%'],
    margin: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto'],
    padding: '0.5em',
    border: 'none',
    borderRadius: '0.5em',
    color: `${colors.gray_text02}`,
    fontSize: ['0.5em', '0.6em', '0.7em', '0.8em', '.8em'],
    textAlign: 'right',
    outlineStyle: 'none',
  },

  // border: '1px solid black',
}));

export default function BreakdownField({
  label, placeholder, value, onChange,
}) {
  const id = 'input-breakdown';

  function handleChange(event) {
    const { target } = event;
    onChange({ value: target.value });
  }

  return (
    <Container>
      <LabelBox>
        <label htmlFor={id}>
          {label}
        </label>
      </LabelBox>
      <InputBox>
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </InputBox>
    </Container>
  );
}
