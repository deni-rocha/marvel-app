import { Typography } from '@material-ui/core'
import type { GetServerSideProps } from 'next'
// import { GetStaticProps } from 'next'
import type { AppProps } from 'next/app'
import Temaplate from '~/template'
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
  return (
    <div>
      <Temaplate>
        <Typography variant="h3">Personagens</Typography>
      </Temaplate>
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
