import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import { ResponseDataInfo } from 'types'
import api from '~/utils/api'

interface Props {
  name: String
  resourceURI: String
}

const Info = () => {
  const { id } = useRouter().query
  const [data, setData] = useState<[Props]>()

  useEffect(() => {
    const fecthData = async () => {
      const res: ResponseDataInfo = await api.get(`/characters/${id}`)
      const result = res.get.data.data.results[0].stories.items

      setData(result)
      console.log(result)
    }

    fecthData()
  }, [id, data])

  return (
    <div>
      {data?.map((item, index) => {
        return (
          <h3 key={index}>
            {item.name}, {item.resourceURI}
          </h3>
        )
      })}
    </div>
  )
}

export default Info
