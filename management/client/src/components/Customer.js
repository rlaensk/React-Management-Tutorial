import React from "react";

class Customer extends React.Component {
  render() {
    return (
      <div>
        <table>
          <td className="id">{this.props.id}</td>
          <td className="img">
            <img src={this.props.image} alt="img" />
          </td>
          <td className="name">{this.props.name}</td>
          <td className="bir">{this.props.birthday}</td>
          <td className="gender">{this.props.gender}</td>
          <td className="job">{this.props.job}</td>
        </table>
      </div>
    );
  }
}

export default Customer;
