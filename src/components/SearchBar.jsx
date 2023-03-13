import React from 'react'
/* import { useState } from 'react'
import { useNavigate } from 'react-router-dom' */
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: '20px',
        border: '1px solid #000',
        pl: '10px',
        pr: '10px',
        boxShadow: 'none',
        mr: { sm: '10px', md: '20px' },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: '10px' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
