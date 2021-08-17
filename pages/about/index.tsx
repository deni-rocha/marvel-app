import { Box, Typography } from '@material-ui/core'
import { GetServerSideProps, NextPage } from 'next'
import Template from '~/template'

const About: NextPage = () => {
  return (
    <Template>
      <Box
        display="flex"
        alignItems="center"
        height="calc(100vh - 40px)"
        width="inherit"
        justifyContent="center"
        color="white"
      >
        <Typography variant="h4">Pedido Pago Challenge</Typography>
      </Box>
    </Template>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default About
