import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { Link } from '~/molecules/Link'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import InfoRoundedIcon from '@material-ui/icons/InfoRounded'
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded'
import React from 'react'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'red',
    },
    link: {
      color: 'white',
      display: 'flex',
    },
    icon: {
      color: 'white',
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  })
)

export default function IconBreadcrumbs() {
  const classes = useStyles()

  return (
    <Box
      bgcolor="secondary.main"
      height="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={classes.root}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" className={classes.link}>
          <HomeRoundedIcon className={classes.icon} />
          Início
        </Link>
        <Link href="/list" className={classes.link}>
          <FormatListBulletedRoundedIcon className={classes.icon} />
          Personagens
        </Link>
        <Link href="/about" className={classes.link}>
          <InfoRoundedIcon className={classes.icon} />
          Sobre
        </Link>
      </Breadcrumbs>
    </Box>
  )
}
