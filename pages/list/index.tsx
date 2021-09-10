/* eslint-disable @next/next/no-img-element */
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import api from '~/utils/api'
import { GetStaticProps } from 'next'
import React from 'react'
import Template from '~/template'

import Link from 'next/link'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import InfoIcon from '@material-ui/icons/Info'
import { ResponseDataList } from 'types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '2rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.primary.main,
    },
    imageList: {
      width: 600,
      height: '85vh',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    link: {
      color: 'silver',
      fontSize: '12px',
      '& svg': {
        fontSize: '30px',
      },
    },
  })
)

export default function TitlebarImageList({
  data,
}: ResponseDataList): JSX.Element {
  const classes = useStyles()
  return (
    <Template>
      <div className={classes.root}>
        <ImageList rowHeight={300} className={classes.imageList}>
          {data.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={item.name}
              />
              <ImageListItemBar
                title={item.name}
                actionIcon={
                  <Link
                    href={{
                      pathname: '/info/[id]',
                      query: { id: `${item.id}` },
                    }}
                    passHref
                  >
                    <a className={classes.link}>
                      <InfoIcon />
                    </a>
                  </Link>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </Template>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await api.get('/characters')
  const data = res.data.data.results

  return {
    props: {
      data,
    },
  }
}
