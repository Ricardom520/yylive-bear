import React, { useEffect } from 'react'
import { TokenizerZh } from '@nlpjs/lang-zh'
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

  const testNlp = async () => {
    const tokenizer = new TokenizerZh()
    const input = '帮我发条弹幕666'
    const result = tokenizer.tokenize(input)

    const result1 = await window.nlpjs.process('zh', result.join(' '))

    console.log(result1)
  }

  useEffect(() => {
    init()
    testNlp()
  }, [])

  return (
    <div>
      <canvas id='yylive_bear' width='200' height='300' />
    </div>
  )
}

export default YYLiveBear
