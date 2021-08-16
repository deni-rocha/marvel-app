import type { GetStaticProps, NextPage } from 'next'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import TemaplateHome from '~/template/home'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    div: {},
  })
)
const Home: NextPage = (): JSX.Element => {
  const classes = useStyles()

  return (
    <TemaplateHome>
      <Typography variant="h3">Home page</Typography>
    </TemaplateHome>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Home
