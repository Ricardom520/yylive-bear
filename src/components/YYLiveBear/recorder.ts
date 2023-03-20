class Recorder {
  private record: any = null

  constructor() {
    console.log('~~~~', this.record)
    if (this.record) return

    this.record = new window.webkitSpeechRecognition()

    this.record.continuous = false
    console.log('??~~~')
    console.log(this.record)
  }

  start = () => {
    console.log(this.record)
  }
}

export const recorder = new Recorder()
