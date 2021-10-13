import { useState } from 'react';

import {
  Link,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';
import colors from '../style/colors';
import mediaquery from '../style/mediaquery';

import Loading from '../loading/Loading';

import {
  clearLoginField,
  logout,
} from '../reducers/user';

import {
  clearMonthlyTransaction,
} from '../reducers/accountbook';

const List = styled.ul(mediaquery({
  width: '90%',
  margin: '0 auto',
  padding: ['0 2.5em', '0', '0 2.5em', '0 2.5em', '0 2.5em'],
  textAlign: 'right',
}));

const Item = styled.li(mediaquery({
  height: ['2em', '2em', '2.5em', '2.5em', '2.5em'],
  margin: ['0', '0', '0 .5em', '0 .5em', '0 .5em'],
  padding: ['0', '0', '0 .5em', '0 .5em', '0 .5em'],
  fontSize: ['0.7em', '0.8em', '.8em', '.9em', '.9em'],
  lineHeight: ['2em', '2em', '2.5em', '2.5em', '2.5em'],
  '& a': {
    color: `${colors.black}`,
    '&:hover': {
      color: `${colors.gray_text03}`,
      fontWeight: '700',
    },
  },
}));

export default function Navbar() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const { accessToken } = useSelector((state) => ({
    accessToken: state.user.accessToken,
  }));

  const handleClickLogout = async () => {
    setIsLoading(true);
    await dispatch(logout());
    await dispatch(clearLoginField());
    await dispatch(clearMonthlyTransaction());
    setIsLoading(false);
  };

  return (
    <List>
      {
        accessToken
          ? (
            <>
              {
                isLoading
                  ? <Loading />
                  : (
                    <Item>
                      <button
                        type="button"
                        onClick={handleClickLogout}
                      >
                        Log out
                      </button>
                    </Item>
                  )
              }
            </>
          )
          : (
            <Item>
              <Link to="/login"> Log in</Link>
            </Item>
          )
      }
    </List>
  );
}
