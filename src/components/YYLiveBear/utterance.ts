class Utterance {
  private utterance: any

  constructor() {
    if (this.utterance) return

    this.utterance = new window.SpeechSynthesisUtterance()
    this.utterance.lang = 'zh-cn'
    this.utterance.volume = 1
    this.utterance.rate = 1
    this.utterance.pitch = 2
    this.utterance.voiceURI = 'Microsoft Kangkang - Chinese (Simplified, PRC)'
  }

  say(text: string) {
    if (!text) return

    this.utterance.text = text
    console.log(this.utterance)
    this.utterance.onstart = (e: any) => {
      console.log('开始讲话', e)
    }

    window.speechSynthesis.speak(this.utterance)
  }
}

export const utterance = new Utterance()
