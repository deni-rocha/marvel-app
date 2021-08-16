import type { GetStaticProps, NextPage } from 'next'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Temaplate from '~/template'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: '#ffeb3b',
      textShadow: '2px 3px 2px #009688',
    },
  })
)

const Home: NextPage = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Temaplate>
      <Typography variant="h3" className={classes.title}>
        Marvel Comics
      </Typography>
    </Temaplate>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Home
