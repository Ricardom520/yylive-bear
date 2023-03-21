import { TokenizerZh } from '../../utils/libs/langs/lang-zh'
import { LangZh } from '../../utils/libs/langs/lang-zh'
import materialJson from './material.json'
class Recorder {
  private record: any = null
  private tokenizer: any

  constructor() {
    if (this.record) return

    this.record = new window.webkitSpeechRecognition()

    this.record.continuous = false

    this.tokenizer = new TokenizerZh()
    console.log('tokenizer:', TokenizerZh)
    console.log(this.tokenizer)
  }

  start = () => {
    console.log(this.record)
  }

  async testResult(str: string) {
    this.handleAudio(str)
  }

  async handleAudio(str: string) {
    const { containerBootstrap, Nlp } = window.nlpjs

    const container = await containerBootstrap()
    container.use(Nlp)
    container.use(LangZh)
    const nlp = container.get('nlp')
    console.log('nlp:', nlp)
    nlp.import(materialJson)

    const response = await nlp.process('zh', this.tokenizer.tokenize(str).join(' '))
    console.log(response)
  }
}

export const recorder = new Recorder()
