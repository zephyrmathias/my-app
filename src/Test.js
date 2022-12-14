import { useParams } from 'react-router-dom'

const Test = () => {
  const params = useParams()

  const onClick = () => {
    throw new Error('error test page')
  }

  return (
    <div>
      test id: {params.id}
      <button onClick={() => onClick()}>onClick</button>
      <div>version = {process.env.REACT_APP_VERSION}</div>
    </div>
  )
}

export default Test
