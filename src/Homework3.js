import React from 'react'
// import ReactDOM from 'react-dom'

// ЗАДАНИЕ 1
// class MinMax extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       curCount: props.min,
//       minCount: props.min,
//       maxCount: props.max,
//     }
//   }

//   plus = () => {
//     this.setState((prevState) => ({ curCount: prevState.curCount + 1 }))
//   }

//   minus = () => {
//     this.setState((prevState) => ({ curCount: prevState.curCount - 1 }))
//   }

//   render() {
//     const currentCount = this.state.curCount
//     return (
//       <div>
//         <button
//           type="button"
//           disabled={currentCount === this.state.minCount}
//           onClick={this.minus}
//         >
//           {' '}
//           уменьшить{' '}
//         </button>
//         <span> {this.state.curCount} </span>
//         <button
//           type="button"
//           disabled={currentCount === this.state.maxCount}
//           onClick={this.plus}
//         >
//           {' '}
//           увеличить{' '}
//         </button>
//       </div>
//     )
//   }
// }

// export default MinMax

// ЗАДАНИЕ 2
class MinMax extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curCount: {},
      minCount: props.min,
      maxCount: props.max,
    }
  }

  handleChange(event) {
    this.setState({ curCount: event.target.value })
  }

  plus = () => {
    this.setState((prevState) => ({ curCount: prevState.curCount + 1 }))
  }

  minus = () => {
    this.setState((prevState) => ({ curCount: prevState.curCount - 1 }))
  }

  render() {
    return (
      <div>
        <button
          type="button"
          disabled={this.state.curCount <= this.state.minCount}
          onClick={this.minus}
        >
          {' '}
          уменьшить{' '}
        </button>
        <input
          type="number"
          value={this.state.curCount}
          onChange={this.handleChange.bind(this)}
        />
        <button
          type="button"
          disabled={this.state.curCount >= this.state.maxCount}
          onClick={this.plus}
        >
          {' '}
          увеличить{' '}
        </button>
      </div>
    )
  }
}

export default MinMax
