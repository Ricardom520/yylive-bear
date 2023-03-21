import React, { useEffect } from 'react'
import { recorder } from './recorder'
import Canvas from './canvas'

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
        recorder.testResult('打开大佛的直播间')
      }
    })

    window.addEventListener('keyup', async (e) => {
      if (start && e.keyCode === 32) {
        canvas.fillText('思考中...', 30, 160)
        // Recorder.stop()
        // const res: any = await Recorder.upload()
        // console.log('res:', res)
        // this.handleWord(res.result[0])
        start = false
      }
    })
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
