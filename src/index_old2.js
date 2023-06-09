import React from 'react'
import ReactDOM from 'react-dom'


// EJERCICIO 1.4
const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => {
  const miArray = parts.map(value => <p> {value.name} {value.exercises}  </p>)
  return (
    <div>
      
      <p>{miArray}</p>
      
      <p>{parts[0].name} {parts[0].exercises} </p>
      <p>{parts[1].name} {parts[1].exercises} </p>
      <p>{parts[2].name} {parts[2].exercises} </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.numero}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />
      <Total numero={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))




// EJERCICIO 1.3
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <p>{props.part1.name} {props.part1.exercises}</p>
//       <p>{props.part2.name} {props.part2.exercises}</p>
//       <p>{props.part3.name} {props.part3.exercises}</p>
//     </div>
//   )
// }


// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.numero}</p>)
// }


// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} part2={part2} part3={part3} />
//       <Total numero={part1.exercises + part2.exercises + part3.exercises} />
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))


// EJERCICIOS 1.1 Y 1.2
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//      <Part part={props.part1} exercises={props.exercises1} />
//      <Part part={props.part2} exercises={props.exercises2} />
//      <Part part={props.part3} exercises={props.exercises3} />
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>{props.part} {props.exercises}</p>
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.numero}</p>
//   )
// }

// const App = () => {
//   // const-definitions
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/> 
//       <Total numero={exercises1 + exercises2 + exercises3} />

//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))



// APP INICIAL
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))