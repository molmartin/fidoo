import { Box, Container, Typography } from '@mui/material'
import { version } from '../../package.json'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>

      <Box component="footer" paddingY={2}>
        <Typography variant="body2" color="textSecondary" align="center">
          Version: {version}
        </Typography>
      </Box>
    </Container>
  )
}

export default Layout
