import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const preventDefault = (e) => e.preventDefault();

export default function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    console.log(e.target.id);
    if (e.target.id === 'about' || e.target.id === 'home') {
      // implement redirect with e.target.id
      setAnchorEl(null);
    } else {
      // implement some search
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Search for: ${search}`)
  };

  const [search, setSearch] = useState('');
    console.log(search)

  return (
    <Box
      class='flex justify-center space-x-20 font-bold text-lg'
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundcolor: 'primary.main',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      {!matches ? (
        <>
          <Button
            id='navbar-btn'
            aria-controls={open ? 'navbar-open' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            id='navbar-open'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'navbar-btn',
            }}
          >
            <MenuItem id='home' onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem id='about' onClick={handleClose}>
              About
            </MenuItem>
            <MenuItem id='search' onClick={handleClose}>
              <input
                className='text-center text-black bg-slate-100'
                placeholder='Search Bar'
                type='text'
              />
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <Link
            sx={{
              '&:hover': {
                backgroundColor: 'text.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            href='#'
          >
            Home
          </Link>
          <Link
            sx={{
              '&:hover': {
                backgroundColor: 'text.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            href='/about'
          >
            About
          </Link>
          <Box>
            <form onSubmit={handleSubmit}>
              <input
                onChange={(event) => setSearch(event.target.value)}
                class='text-center text-black bg-slate-100'
                placeholder='Search Bar'
                type='text'
                value={search}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Box>
        </>
      )}
    </Box>
  );
}
