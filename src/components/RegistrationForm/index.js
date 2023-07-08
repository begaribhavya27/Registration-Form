// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.onValidateFirstName()
    this.setState({firstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.onValidateLastName()
    this.setState({lastNameError: !isValidLastName})
  }

  onValidateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  onValidateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.onValidateFirstName()
    const isValidLastName = this.onValidateLastName()
    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  submitAnotherForm = () => {
    this.setState(prevState => ({
      firstName: '',
      lastName: '',
      isFormSubmitted: !prevState.isFormSubmitted,
    }))
  }

  renderForm = () => {
    const {firstName, lastName, firstNameError, lastNameError} = this.state
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.onSubmitForm}>
          <label htmlFor="first name" className="label-text">
            FIRST NAME
          </label>
          <input
            id="first name"
            placeholder="First name"
            type="text"
            value={firstName}
            className="input-text"
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
          {firstNameError && <p className="error-msg">Required</p>}
          <label htmlFor="last name" className="label-text">
            LAST NAME
          </label>
          <input
            id="last name"
            placeholder="Last name"
            type="text"
            value={lastName}
            className="input-text"
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
          {lastNameError && <p className="error-msg">Required</p>}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    )
  }

  renderSuccessForm = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="para">Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-response-btn"
        onClick={this.submitAnotherForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted ? this.renderSuccessForm() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
