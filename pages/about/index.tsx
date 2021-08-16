import { Box, Typography } from '@material-ui/core'
import { GetServerSideProps, NextPage } from 'next'
import Nav from '~/organism/Nav'

interface DataProps {
  data: string
}

const About: NextPage<DataProps> = ({ data }: DataProps) => {
  return (
    <Box>
      <Box>
        <Nav />
      </Box>
      <Box>
        <Typography variant="h3">{data}</Typography>
      </Box>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      data: 'about page',
    },
  }
}

export default About
