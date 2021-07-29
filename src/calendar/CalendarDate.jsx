import React, { useState } from 'react';

import styled from '@emotion/styled';
import colors from '../style/colors';

const DateBox = styled.div({
  width: '20em',
  height: '12em',
  padding: '.4em',
  borderBottom: `${colors.gray_backgroud} solid .1em`,
  fontSize: '.3em',
  lineHeight: '5em',
  cursor: 'pointer',
});

const TodayColor = {
  color: `${colors.teal_text}`,
  fontWeight: '600',
};

const OtherColor = {
  color: `${colors.gray_text04}`,
};

const BasicColor = {
  color: `${colors.gray_text}`,
};

const SaturdayColor = {
  color: `${colors.blue_text}`,
};

const SundayColor = {
  color: `${colors.red_text}`,
};

export default function CalendarDate({
  currentMonth, year, month, date, day, onClick,
}) {
  const [today] = useState(new Date());

  const dateColorStyle = () => {
    if (day === 6 && currentMonth === month) {
      return SaturdayColor;
    }
    if (day === 0 && currentMonth === month) {
      return SundayColor;
    }
    if (year === today.getFullYear()
    && month === today.getMonth() + 1
    && date === today.getDate()) {
      return TodayColor;
    }
    if (currentMonth !== month) {
      return OtherColor;
    }
    return BasicColor;
  };

  return (
    <DateBox
      style={dateColorStyle()}
    >
      <div
        onClick={() => onClick(date, day)}
        role="presentation"
      >
        {date}
      </div>
    </DateBox>
  );
}
