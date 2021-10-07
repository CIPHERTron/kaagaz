import React from 'react';
import Link from 'next/link';
import { Typography, Menu, MenuItem } from '@material-ui/core';

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography
        style={{ cursor: 'pointer' }}
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        About Us
      </Typography>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href='/team'>
            <a style={{ textDecoration: 'none' }}>Who we are?</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/about'>
            <a style={{ textDecoration: 'none' }}>What we do?</a>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
