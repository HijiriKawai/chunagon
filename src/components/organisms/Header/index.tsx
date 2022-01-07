import styled from '@emotion/styled';
import { Link as MuiLink, Stack } from '@mui/material';
import { VFC } from 'react';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: white;
`;

const UnderLine = styled.div`
  position: relative;
  border-top: 1px solid black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  :active {
    color: #26a69a;
  }
  :hover {
    color: #26a69a;
  }
`;

export const Header: VFC = () => {
  return (
    <>
      <StyledHeader>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            paddingLeft: 4,
            paddingRight: 4,
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <MuiLink
              variant="h3"
              underline="none"
              href="/"
              sx={{
                color: '#000',
              }}
            >
              chunagon
            </MuiLink>
            <StyledLink to="/home">home</StyledLink>
          </Stack>
        </Stack>
      </StyledHeader>
      <UnderLine />
    </>
  );
};
