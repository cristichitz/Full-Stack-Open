import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const DisplayHeader = ({header}) => <h1>{header}</h1>

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={`${positive} %`} />
      </tbody>
    </table>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment_good = () => setGood(good + 1)
  const increment_neutral = () => setNeutral(neutral + 1)
  const increment_bad = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = all > 0 ? (good - bad) / all : 0
  const positive = all > 0 ? good / all : 0

  return (
    <div>
      <DisplayHeader header='give feedback' />
      <Button onClick={increment_good} text='good' />
      <Button onClick={increment_neutral} text='neutral' />
      <Button onClick={increment_bad} text='bad' />
      {all > 0 
       ? <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}  />
       : <p>No feedback given</p>}
    </div>
  )
}

export default App