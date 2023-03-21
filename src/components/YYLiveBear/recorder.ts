class Recorder {
  private record: any = null

  constructor() {
    if (this.record) return

    this.record = new window.webkitSpeechRecognition()

    this.record.continuous = false
  }

  start = () => {
    console.log(this.record)
  }

  async testResult(str: string) {
    this.handleAudio(str)
  }

  async handleAudio(str: string) {}
}

export const recorder = new Recorder()
