import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      orderid: "",
      customername: "",
    };
    this.addOrder = this.addOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addOrder(e) {
    console.log(this.state);
    e.preventDefault();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <nav className="light-blue darken-4">
          <div className="container">
            <a className="brand-logo" href="/">
              Delivery Express
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s5">
              <h3 className="header">Ingresar Envio</h3>
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addOrder}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          type="text"
                          placeholder="Numero Orden"
                          name="orderid"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="input-field col s12">
                        <input
                          type="text"
                          placeholder="Nombre Cliente"
                          name="customername"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <button className="btn light-blue darken-4" type="submit">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">Tabla</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
