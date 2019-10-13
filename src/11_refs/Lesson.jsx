import React, { Component } from 'react';

const POSITION = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    title: 'Front-end Developer',
  },
  {
    id: 'bd',
    value: 'Back-end Developer',
    title: 'Back-end Developer',
  },
];

class Form extends Component {
  state = {
    inputText: '',
    textareaText: '',
    selectText: POSITION[0].value,
    showData: {
      name: '',
      text: '',
      position: '',
    },
  }

  inputRef = React.createRef();
  textareaRef = React.createRef();
  selectRef = React.createRef();

  // handleInputChange = ({ target: { value } }) => {
  //   console.log(this.el.value);
  //   this.setState({
  //     inputText: value,
  //   })
  // }
  
  // handleTextareaChange = ({ target: { value } }) => {
  //   this.setState({
  //     textareaText: value,
  //   })
  // }

  // handleSelectChange = ({ target: { value } }) => {
  //   this.setState({
  //     selectText: value,
  //   })
  // }

  UNSAFE_componentWillMount() {
    console.log('cwm ', this.inputRef);
  }

  componentDidMount() {
    console.log('cdm ', this.inputRef);
  }

  // handleChange = () => {
  //   this.setState({
  //     inputText: this.inputRef.current.value,
  //     textareaText: this.textareaRef.current.value,
  //     selectText: this.selectRef.current.value,
  //   });
  // }

  handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleShow = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: '',
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText ? selectText: POSITION[0].value,
      },
    })
  }

  //getRef = (node) => { this.el = node };

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;
    return (
      <>
        <form>
          {/* Input */}
          <label>
            Name:
            {/* <input ref={this.getRef} type="text" name="name" value={inputText} onChange={this.handleInputChange} /> */}
            <input ref={this.inputRef} type="text" name="inputText" value={inputText} onChange={this.handleChange} />
          </label>
          <br />
          {/* Textarea */}
          <label htmlFor="text">Next:</label>
          <textarea ref={this.textareaRef} id="text" name="textareaText" value={textareaText} onChange={this.handleChange} />
          <br />
          {/* Select */}
          <select ref={this.selectRef} name="selectText" value={selectText} onChange={this.handleChange}>
            {POSITION.map(({ id, value, title }) => (
              <option key={id} value={value}>{title}</option>
            ))}
            {/* <option value="Front-end developer">Front-end developer</option>
            <option value="Back-end developer">Back-end developer</option> */}
          </select>
          <br />
          {/* Button */}
          <button onClick={this.handleShow}>Show</button>
        </form>
        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </>
    );
  }
}

export default Form;