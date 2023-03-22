import React, { useEffect } from 'react'
import { recorder } from './recorder'
import Canvas from './canvas'
import { playVoice } from '~/utils/func'

const YYLiveBear: React.FC = () => {
  let canvas: Canvas
  const init = () => {
    canvas = new Canvas()
    canvas.init()
    canvas.dbclick(() => getAudioRecorder())
  }

  const getAudioRecorder = () => {
    let start = false
    window.addEventListener('keydown', (e) => {
      if (!start && e.keyCode === 32) {
        canvas.fillText('说话中...', 30, 160)
        start = true
        // Recorder.start()
        recorder.start()
      }
    })

    window.addEventListener('keyup', async (e) => {
      if (start && e.keyCode === 32) {
        canvas.fillText('思考中...', 30, 160)
        recorder.stop()
        // Recorder.stop()
        const res: any = await recorder.upload()
        
        handleResult(res)
        start = false
      }
    })
  }

  const handleResult = (res: {
    type: number
    userInfo: any
  }) => {
    console.log('res:', res)
    switch(res.type) {
      case 2:
        sayOk(() => window.location.href = `https://www.yy.com/${res.userInfo.sid}/${res.userInfo.ssid}?tempId=16777217`)
        break
      case 1:
        sayOk(() => window.location.href = `https://www.yy.com/u/${res.userInfo.yyid}`)
        break
    }
  }

  const sayOk = async (fn?: () => void) => {
    await playVoice('https://web.yystatic.com/project/nearlive-static/mobile/voices/voice_01.mp3')

    fn && fn()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div>
      <canvas id='yylive_bear' width='200' height='300' />
    </div>
  )
}

export default YYLiveBear
