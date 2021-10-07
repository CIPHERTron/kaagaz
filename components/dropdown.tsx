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
        Archive
      </Typography>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href='/stories'>
            <a style={{ textDecoration: 'none' }}>Stories</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/poems'>
            <a style={{ textDecoration: 'none' }}>Poems</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/miscellaneous'>
            <a style={{ textDecoration: 'none' }}>Miscellaneous</a>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
