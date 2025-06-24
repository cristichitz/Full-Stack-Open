import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const DisplayH = ({text}) => <h1>{text}</h1>
const MaxVotes = ({anecdote, votes}) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNext = () => {
    const randomInt = () => Math.floor(Math.random() * anecdotes.length)
    setSelected(randomInt)
  }

  const handleVote = () => {
    const votesCopy = [...votes];
    // Increment the vote count for the selected anecdote
    votesCopy[selected] += 1;
    // Update the votes state
    setVotes(votesCopy);
  };

  const maxVotes = Math.max(...votes)
  const indexOfMax = votes.indexOf(maxVotes);
  console.log(votes.max)
  return (
    <div>
      <DisplayH text='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <Button onClick={handleNext} text='next anecdote' />
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVote} text='vote' />
      <DisplayH text='Anecdote with most votes' />
      <MaxVotes anecdote={anecdotes[indexOfMax]} votes={maxVotes} />
    </div>
  )
}

export default App