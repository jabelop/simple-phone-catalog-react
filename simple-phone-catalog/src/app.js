import React from "react";
import axios from "axios";
let imgDir = "./images/";
export default class App extends React.Component {
  state = {
    phones: [],
    show: false,
    selectedPhone:  {}
  };

  showModal = (element) => {
    this.setState({ show: true, selectedPhone: element });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
 
  componentDidMount() {
    axios.get("/phones").then((response) => {
      this.setState({ phones: response.data });
    });
  }

  render() {
    const { phones } = this.state;
    return (
      <div>
        <h1>Phone Catalog</h1>
        <Modal show={this.state.show} handleClose={this.hideModal} phone={this.state.selectedPhone}></Modal>
        <table className="phones">
        <tbody>
          {phones.map((phone) => (
            
            <tr>
                <th>
                    {phone.name} 
                </th>
                <th>
                    <button type="button" class="btn btn-primary" onClick={() => this.showModal(phone)}>Details</button>
                </th>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    );
  }
}
const Modal = ({ handleClose, show, phone }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
        <div className={showHideClassName}>
          <section className="modal-main">
            <div class="row">
              <div class="col-md-6">
                <p>
                  <strong>Manufacturer:</strong> <br></br>{phone.manufacturer}
                </p>
                <p>
                  <strong>Description:</strong> <br></br>{phone.description}
                </p>
                <p>
                  <strong>Color:</strong> <br></br>{phone.color}
                </p>
                <p>
                  <strong>Price:</strong> <br></br>{phone.price}
                </p>
                <p>
                  <strong>Screen:</strong> <br></br>{phone.screen}
                </p>
                <p>
                  <strong>Processor:</strong> <br></br>{phone.processor}
                </p>
                <p>
                  <strong>Ram:</strong><br></br>{phone.ram}
                </p>
              </div>
              <div class="col-md-3">
                <img src={imgDir+phone.imageFileName}/>
              </div>
            </div>
              
              <button type="button" class="btn btn-danger" onClick={handleClose}>close</button>
        </section>
          
    </div>
    );
  };