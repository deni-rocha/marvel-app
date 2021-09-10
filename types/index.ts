interface ResponseDataInfo {
  get: {
    config: {}
    data: {
      code: Number
      data: {
        count: Number
        limit: Number
        offset: Number
        results: [
          {
            comics: {
              items: []
            }
            id: Number
            name: String
            series: {}
            stories: { items: [{ name: String; resourceURI: String }] }
          }
        ]
      }
      status: String
    }
    headers: {}
    request: {}
  }
}

interface ResponseDataList {
  data: [
    {
      id: string
      name: string
      description: string
      thumbnail: {
        path: string
        extension: string
      }
    }
  ]
}


export type { ResponseDataInfo, ResponseDataList }