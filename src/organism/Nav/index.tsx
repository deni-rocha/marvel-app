import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { Link } from '~/molecules/Link'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import InfoRoundedIcon from '@material-ui/icons/InfoRounded'
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded'
import { Box } from '@material-ui/core'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'red',
    },
    link: {
      opacity: '0.7',
      color: 'white',
      display: 'flex',
      textDecoration: 'none',
    },
    linkActive: {
      opacity: '1',
      color: 'white',
      display: 'flex',
      textDecoration: 'none',
    },
    icon: {
      color: 'white',
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  })
)

export default function Nav() {
  const classes = useStyles()
  const url = useRouter().pathname

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
        <Link
          href="/"
          className={url === '/' ? classes.linkActive : classes.link}
        >
          <HomeRoundedIcon className={classes.icon} />
          Início
        </Link>
        <Link
          href="/list"
          className={url === '/list' ? classes.linkActive : classes.link}
        >
          <FormatListBulletedRoundedIcon className={classes.icon} />
          Personagens
        </Link>
        <Link
          href="/about"
          className={url === '/about' ? classes.linkActive : classes.link}
        >
          <InfoRoundedIcon className={classes.icon} />
          Sobre
        </Link>
      </Breadcrumbs>
    </Box>
  )
}
