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

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "demo", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    const { firstName, lastName, email, demo } = this.state
    return (
      <form onSubmit={this.handleSubmit} className="contact100-form">
        <input type="hidden" name="form-name" value="contact" />
        {/* First Name*/}
        <div className="wrap-input100 validate-input">
          <label className="label-input100">
            First Name:
            <input
              className="input100"
              name="firstName"
              type="text"
              value={firstName}
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
              value={lastName}
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
              value={email}
              onChange={this.handleInputChange}
            />
            <span className="focus-input100"></span>
          </label>
        </div>

        {/* Demo */}
        <div className="wrap-input100 validate-input">
          <label className="label-input100 dis-flex flex-m w-full flex-sb">
            I Would like a demo:
            <div className="pretty p-round p-fill p-icon fs-28">
              <input
                type="checkbox"
                name="demo"
                checked={demo}
                onChange={this.handleInputChange}
              />
              <div className="state p-info">
                <i className="icon mdi mdi-check"></i>
                <label></label>
              </div>
            </div>
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
