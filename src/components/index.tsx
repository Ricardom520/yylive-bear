import ReactDOM from 'react-dom'
import YYLiveBear from './YYLiveBear'

export const initYYLiveBear = (id: string) => {
  const target = document.getElementById(id)

  if (!target) throw '目标ID不存在'

  ReactDOM.render(<YYLiveBear />, document.getElementById(id))
}
