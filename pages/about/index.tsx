import { Typography } from '@material-ui/core'
import { GetServerSideProps, NextPage } from 'next'
import Temaplate from '~/template'
import { useRouter } from 'next/router'

interface DataProps {
  data: string
}

const About: NextPage<DataProps> = ({ data }: DataProps) => {
  return (
    <Temaplate>
      <Typography variant="h3">{data}</Typography>
    </Temaplate>
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
