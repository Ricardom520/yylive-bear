import { fetchSayWords } from '../../servers'

class Recorder {
  private record: any = null

  constructor() {
    if (this.record) return

    this.record = new window.webkitSpeechRecognition()

    this.record.continuous = false
  }

  start = () => {
    console.log(this.record)
    this.record.start()
  }

  stop = () => {
    console.log('stop')
    this.record.stop()

    
  }

  upload = () => {
    return new Promise((resolve) => {
      this.record.onresult = async (e: {
        results: SpeechRecognitionResult[]
      }) => {
        const results = e.results
        console.log('results:', results)
        if (results && results[0] && results[0][0]) {
          resolve(await this.handleAudio(results[0][0].transcript))
        }
      }
    })
  }

  async handleAudio(str: string) {
    console.log(str)
    const res: any = await fetchSayWords({
      text: str
    })

    if (res.code === 0) {
      const userInfo = res.data.response[1].docs[0]

      console.log('userInfo:', userInfo)
      return {
        type: res.type,
        userInfo
      }
    }
    console.log(res)

    return null
  }
}

export const recorder = new Recorder()
