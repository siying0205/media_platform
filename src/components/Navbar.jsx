import React from 'react'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" style={{ width: '50px', height: '50px' }} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
