import React from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      demo: true,
      numberOfStores: 0,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="contact100-form"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        {/* First Name*/}
        <div className="wrap-input100 validate-input">
          <label className="label-input100">
            First Name:
            <input
              className="input100"
              name="firstName"
              type="text"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
            <span className="focus-input100"></span>
          </label>
        </div>

        {/* Last Name*/}
        <div className="wrap-input100 validate-input">
          <label className="label-input100">
            Last Name:
            <input
              className="input100"
              name="lastName"
              type="text"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
            <span className="focus-input100"></span>
          </label>
        </div>

        {/* Email*/}
        <div className="wrap-input100 validate-input">
          <label className="label-input100">
            Email:
            <input
              className="input100"
              name="email"
              type="email"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
            <span className="focus-input100"></span>
          </label>
        </div>

        {/* Demo */}
        <div className="wrap-input100 validate-input">
          <label className="label-input100 dis-flex flex-m">
            Would like a demo:
            <input
              className="input100"
              name="demo"
              type="checkbox"
              checked={this.state.demo}
              onChange={this.handleInputChange}
            />
          </label>
        </div>

        {/* Button*/}
        <div className="container-contact100-form-btn">
          <div className="wrap-contact100-form-btn">
            <div className="contact100-form-bgbtn"></div>
            <button className="contact100-form-btn">
              <span>
                Submit
                <i
                  className="fa fa-long-arrow-right m-l-7"
                  aria-hidden="true"
                ></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    )
  }
}
