
const Header = ({ course }) => {
  return (
        <h1>{course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.e}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} e={props.e1} />
      <Part part={props.part2} e={props.e2} />
      <Part part={props.part3} e={props.e3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content
        part1={part1} e1={exercises1}
        part2={part2} e2={exercises2}
        part3={part3} e3={exercises3}
      />
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}

export default App