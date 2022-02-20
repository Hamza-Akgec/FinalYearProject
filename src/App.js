import React, { useState } from "react";
import './index.css';
import FinalYearProjectLogo from './Images/FinalYearProjectLogo.jpg'
import LiveLogo from './Images/Live_Logo.jpg'
const App = () => {
  const [confBtn1, setConfBtn1] = useState({ title: 'Send Message', Style: {} });
  const [confBtn2, setConfBtn2] = useState({ title: 'Send Message', Style: {} });
  const [confBtn3, setConfBtn3] = useState({ title: 'Send Message', Style: {} });
  const [ambStatusBtn1, setAmbStatusBtn1] = useState({ title: 'Depart Ambulance', Style: {} });
  const [ambStatusBtn2, setAmbStatusBtn2] = useState({ title: 'Depart Ambulance', Style: {} });
  const [ambStatusBtn3, setAmbStatusBtn3] = useState({ title: 'Depart Ambulance', Style: {} });
  const sendMessage1 = (e) => {
    setConfBtn1((prevState) => {
      if (Object.keys(prevState.Style).length === 0 && prevState.Style.constructor === Object) {
        return {
          title: 'Cancel Message',
          Style: { backgroundColor: 'red' }
        };
      } else {
        return {
          title: 'Send Message',
          Style: {}
        }
      }
    })

  }


  const sendMessage2 = (e) => {
    setConfBtn2((prevState) => {
      if (Object.keys(prevState.Style).length === 0 && prevState.Style.constructor === Object) {
        return {
          title: 'Cancel Message',
          Style: { backgroundColor: 'red' }
        };
      } else {
        return {
          title: 'Send Message',
          Style: {}
        }
      }
    })

  }
  const sendMessage3 = (e) => {
    setConfBtn3((prevState) => {
      if (Object.keys(prevState.Style).length === 0 && prevState.Style.constructor === Object) {
        return {
          title: 'Cancel Message',
          Style: { backgroundColor: 'red' }
        };
      } else {
        return {
          title: 'Send Message',
          Style: {}
        }
      }
    })

  }
  const ChangeAmbStaus1 = (e) => {
    setAmbStatusBtn1((prevState) => {
      if (Object.keys(prevState.Style).length === 0 && prevState.Style.constructor === Object) {
        return {
          title: 'Stop Ambulance',
          Style: { backgroundColor: 'red' }
        };
      } else {
        return {
          title: 'Depart Ambulance',
          Style: {}
        }
      }
    })

  }


  const ChangeAmbStaus2 = (e) => {
    setAmbStatusBtn2((prevState) => {
      if (Object.keys(prevState.Style).length === 0 && prevState.Style.constructor === Object) {
        return {
          title: 'Stop Ambulance',
          Style: { backgroundColor: 'red' }
        };
      } else {
        return {
          title: 'Depart Ambulance',
          Style: {}
        }
      }
    })

  }
  const ChangeAmbStaus3 = (e) => {
    setAmbStatusBtn3((prevState) => {
      if (Object.keys(prevState.Style).length === 0 && prevState.Style.constructor === Object) {
        return {
          title: 'Stop Ambulance',
          Style: { backgroundColor: 'red' }
        };
      } else {
        return {
          title: 'Depart Ambulance',
          Style: {}
        }
      }
    })

  }



  return (
    <div className="main_container">
      <div className="header">
        <img src={FinalYearProjectLogo} alt="Logo" className="logo" />
        <h1 className="heading">Accident Tracking and Reporting system for vehicles</h1>
        <img src={LiveLogo} alt="LiveLogo" className="live_logo" />
      </div>
      <div className='table_data'>
        <table className=" table table-hover ">
          <thead className=' fs-3 table_head_data'>
            <tr>
              <th scope="col">S NO.</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Vehicle Reg. Number</th>
              <th scope="col">Accident Location</th>
              <th scope="col">Confirmation Message</th>
              <th scope="col">Message Response</th>
              <th scope="col">Ambulance Status</th>

            </tr>
          </thead>
          <tbody className='fs-5 text-black'>
            {/* {data.map((val, idx) => {
                                return <tr key={idx}>
                                    <th scope="row">{val.state}</th>
                                    <td>{val.active}</td>
                                    <td>{val.confirmed}</td>
                                    <td>{val.deaths}</td>
                                    <td>{val.lastupdatedtime}</td>
                                </tr>
                            })} */}
            <tr >
              <th scope="row">1</th>
              <td>9897534395</td>
              <td>12586142bdf565</td>
              <td>XXXXXXXXXXXX</td>
              <td><button type="button" style={confBtn1.Style} onClick={sendMessage1} className="fs-5 btn-1 btn btn-success">{confBtn1.title}</button></td>
              <td>---</td>
              <td><button type="button" style={ambStatusBtn1.Style} onClick={ChangeAmbStaus1} className="fs-5 btn-1 btn btn-success">{ambStatusBtn1.title}</button></td>
            </tr>
            <tr >
              <th scope="row">2</th>
              <td>7897534395</td>
              <td>52586142bdf565</td>
              <td>XXXXJEFEKNFX</td>
              <td><button type="button" style={confBtn2.Style} onClick={sendMessage2} className="fs-5 btn-1 btn btn-success">{confBtn2.title}</button></td>
              <td>---</td>
              <td><button type="button" style={ambStatusBtn2.Style} onClick={ChangeAmbStaus2} className="fs-5 btn-1 btn btn-success">{ambStatusBtn2.title}</button></td>
            </tr>
            <tr >
              <th scope="row">3</th>
              <td>6397534395</td>
              <td>25886142bdf565</td>
              <td>XXJENFKJXXXXXXX</td>
              <td><button type="button" style={confBtn3.Style} onClick={sendMessage3} className="fs-5 btn-1 btn btn-success">{confBtn3.title}</button></td>
              <td>---</td>
              <td><button type="button" style={ambStatusBtn3.Style} onClick={ChangeAmbStaus3} className="fs-5 btn-1 btn btn-success">{ambStatusBtn3.title}</button></td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>

  );
}

export default App;
