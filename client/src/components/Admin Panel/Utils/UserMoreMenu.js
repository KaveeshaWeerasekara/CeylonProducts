import { useRef, useState } from 'react'

import { Link as RouterLink } from 'react-router-dom'

//Icons
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

// material
import { Menu, MenuItem, IconButton, ListItemText } from '@mui/material'
import axios from 'axios'

//Export More Menu (Tabale Row End)
export default function UserMoreMenu({ post, fetchPosts }) {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const deleteUser = async () => {
    console.log(post)
    await axios
      .delete(`/api/users/deleteuser/${post._id}`)
      .then((user) => {
        console.log(user)
        fetchPosts()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <MoreVertIcon></MoreVertIcon>
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          component={RouterLink}
          to='/profile'
          sx={{ color: 'text.secondary' }}
        >
          <EditIcon></EditIcon>
          <ListItemText
            primary='Edit'
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>

        <MenuItem
          sx={{ color: 'text.secondary' }}
          onClick={() => {
            deleteUser()
          }}
        >
          <DeleteIcon></DeleteIcon>
          <ListItemText
            primary='Delete'
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>
      </Menu>
    </>
  )
}
