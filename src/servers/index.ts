import request from '../utils/request'

type FetchSayWordsRequest = {
   text: string
}

type FetchSayWordsResponse = {
  data: {
    type: number
    value: string
  },
  code: number
}

export const fetchSayWords = (obj: FetchSayWordsRequest) => {
  return request.get<FetchSayWordsRequest, FetchSayWordsResponse>('http://127.0.0.1:8080/process', {
    params: obj
  }) 
}