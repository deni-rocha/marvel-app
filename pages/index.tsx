import type { GetStaticProps, NextPage } from 'next'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Template from '~/template'
import { Box, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: '#FEFEFE',
      textShadow: '2px 3px 2px #EC1D24',
      textTransform: 'uppercase',
    },
  })
)

const Home: NextPage = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Template>
      <Box
        display="flex"
        alignItems="center"
        height="calc(100vh - 40px)"
        width="inherit"
        justifyContent="center"
      >
        <Typography variant="h3" className={classes.title}>
          Marvel Comics
        </Typography>
      </Box>
    </Template>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Home
