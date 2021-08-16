import { Typography } from '@material-ui/core'
import type { GetServerSideProps } from 'next'
// import { GetStaticProps } from 'next'
import type { AppProps } from 'next/app'
import TemaplateHome from '~/template/home'
import api from '~/utils/api'

interface ResponseData extends AppProps {
  data: {
    id: string
    name: string
    description: string
    thumbanail: {
      path: string
      extension: string
    }
  }
}

const List = ({ data }: ResponseData) => {
  console.log(data)
  return (
    <div>
      <TemaplateHome>
        <Typography variant="h3">Personagens</Typography>
      </TemaplateHome>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/characters')
  const data = res.data.data.results

  return {
    props: {
      data,
    },
  }
}

export default List
