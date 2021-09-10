import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from 'next/link'
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
      opacity: '0.5',
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
        <li className={url === '/' ? classes.linkActive : classes.link}>
          <Link href="/">
            <a>
              <HomeRoundedIcon className={classes.icon} />
              Início
            </a>
          </Link>
        </li>
        <li className={url === '/list' ? classes.linkActive : classes.link}>
          <Link href="/list">
            <a>
              <FormatListBulletedRoundedIcon className={classes.icon} />
              Personagens
            </a>
          </Link>
        </li>
        <li className={url === '/about' ? classes.linkActive : classes.link}>
          <Link href="/about">
            <a>
              <InfoRoundedIcon className={classes.icon} />
              Sobre
            </a>
          </Link>
        </li>
      </Breadcrumbs>
    </Box>
  )
}
