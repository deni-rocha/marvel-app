import Box from '@material-ui/core/Box'
import React, { ReactNode } from 'react'
import Nav from '~/organism/Nav'

interface Props {
  children: ReactNode
}
const TemaplateHome = ({ children }: Props): JSX.Element => {
  return (
    <Box bgcolor="primary.main" height="100vh">
      <Nav />
      {children}
    </Box>
  )
}

export default TemaplateHome
