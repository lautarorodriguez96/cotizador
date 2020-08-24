import React, { useEffect, useState } from 'react';
import './App.css';
import DatePickerComponent from './components/datepicker';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AUD from './assets/img/AUD.gif';
import BGN from './assets/img/BGN.gif';
import BRL from './assets/img/BRL.gif';
import CAD from './assets/img/CAD.gif';
import CHF from './assets/img/CHF.gif';
import CNY from './assets/img/CNY.gif';
import CZK from './assets/img/CZK.gif';
import DKK from './assets/img/DKK.gif';
import EUR from './assets/img/EUR.jpg';
import GBP from './assets/img/GBP.gif';
import HKD from './assets/img/HKD.gif';
import HRK from './assets/img/HRK.gif';
import HUF from './assets/img/HUF.gif';
import IDR from './assets/img/IDR.gif';
import ILS from './assets/img/ILS.gif';
import INR from './assets/img/INR.gif';
import ISK from './assets/img/ISK.gif';
import JPY from './assets/img/JPY.gif';
import KRW from './assets/img/KRW.gif';
import MXN from './assets/img/MXN.gif';
import MYR from './assets/img/MYR.gif';
import NOK from './assets/img/NOK.gif';
import NZD from './assets/img/NZD.gif';
import PHP from './assets/img/PHP.gif';
import PLN from './assets/img/PLN.gif';
import RON from './assets/img/RON.gif';
import RUB from './assets/img/RUB.gif';
import SEK from './assets/img/SEK.gif';
import SGD from './assets/img/SGD.gif';
import THB from './assets/img/THB.gif';
import TRY from './assets/img/TRY.gif';
import USD from './assets/img/USD.gif';
import ZAR from './assets/img/ZAR.gif';

import getValues from './services/exchangerates';

function App() {


  const [values, setValues] = useState()
  const [page, setPage] = useState()


  useEffect(function () {
    getValues().then(values => setValues(values))
    setPage(1)
  }, [])

  const rates = [{ flag: <img alt="" src={CAD} className="flag"></img>, label: 'CAD', value: values && values.rates && values.rates.CAD },
  { flag: <img alt="" src={GBP} className="flag"></img>, label: 'GBP', value: values && values.rates && values.rates.GBP },
  { flag: <img alt="" src={USD} className="flag"></img>, label: 'USD', value: values && values.rates && values.rates.USD },
  { flag: <img alt="" src={EUR} className="flag eur"></img>, label: 'EUR', value: values && values.rates && values.rates.EUR }]

  const rates2 = [{ flag: <img alt="" src={CAD} className="flag"></img>, label: 'CAD', value: values && values.rates && values.rates.CAD },
  { flag: <img alt="" src={GBP} className="flag"></img>, label: 'GBP', value: values && values.rates && values.rates.GBP },
  { flag: <img alt="" src={USD} className="flag"></img>, label: 'USD', value: values && values.rates && values.rates.USD },
  { flag: <img alt="" src={EUR} className="flag eur"></img>, label: 'EUR', value: values && values.rates && values.rates.EUR },
  { flag: <img alt="" src={SEK} className="flag"></img>, label: 'SEK', value: values && values.rates && values.rates.SEK },
  { flag: <img alt="" src={CHF} className="flag"></img>, label: 'CHF', value: values && values.rates && values.rates.CHF },
  { flag: <img alt="" src={BRL} className="flag"></img>, label: 'BRL', value: values && values.rates && values.rates.BRL },
  { flag: <img alt="" src={PLN} className="flag"></img>, label: 'PLN', value: values && values.rates && values.rates.PLN },
  { flag: <img alt="" src={AUD} className="flag"></img>, label: 'AUD', value: values && values.rates && values.rates.AUD },
  { flag: <img alt="" src={BGN} className="flag"></img>, label: 'BGN', value: values && values.rates && values.rates.BGN },
  { flag: <img alt="" src={CNY} className="flag"></img>, label: 'CNY', value: values && values.rates && values.rates.CNY },
  { flag: <img alt="" src={CZK} className="flag"></img>, label: 'CZK', value: values && values.rates && values.rates.CZK },
  { flag: <img alt="" src={DKK} className="flag"></img>, label: 'DKK', value: values && values.rates && values.rates.DKK },
  { flag: <img alt="" src={HKD} className="flag"></img>, label: 'HKD', value: values && values.rates && values.rates.HKD },
  { flag: <img alt="" src={HRK} className="flag"></img>, label: 'HRK', value: values && values.rates && values.rates.HRK },
  { flag: <img alt="" src={HUF} className="flag"></img>, label: 'HUF', value: values && values.rates && values.rates.HUF },
  { flag: <img alt="" src={IDR} className="flag"></img>, label: 'IDR', value: values && values.rates && values.rates.IDR },
  { flag: <img alt="" src={ILS} className="flag"></img>, label: 'ILS', value: values && values.rates && values.rates.ILS },
  { flag: <img alt="" src={INR} className="flag"></img>, label: 'INR', value: values && values.rates && values.rates.INR },
  { flag: <img alt="" src={ISK} className="flag"></img>, label: 'ISK', value: values && values.rates && values.rates.ISK },
  { flag: <img alt="" src={JPY} className="flag"></img>, label: 'JPY', value: values && values.rates && values.rates.JPY },
  { flag: <img alt="" src={KRW} className="flag"></img>, label: 'KRW', value: values && values.rates && values.rates.KRW },
  { flag: <img alt="" src={MXN} className="flag"></img>, label: 'MXN', value: values && values.rates && values.rates.MXN },
  { flag: <img alt="" src={MYR} className="flag"></img>, label: 'MYR', value: values && values.rates && values.rates.MYR },
  { flag: <img alt="" src={NOK} className="flag"></img>, label: 'NOK', value: values && values.rates && values.rates.NOK },
  { flag: <img alt="" src={NZD} className="flag"></img>, label: 'NZD', value: values && values.rates && values.rates.NZD },
  { flag: <img alt="" src={PHP} className="flag"></img>, label: 'PHP', value: values && values.rates && values.rates.PHP },
  { flag: <img alt="" src={RON} className="flag"></img>, label: 'RON', value: values && values.rates && values.rates.RON },
  { flag: <img alt="" src={RUB} className="flag"></img>, label: 'RUB', value: values && values.rates && values.rates.RUB },
  { flag: <img alt="" src={SEK} className="flag"></img>, label: 'SEK', value: values && values.rates && values.rates.SEK },
  { flag: <img alt="" src={SGD} className="flag"></img>, label: 'SGD', value: values && values.rates && values.rates.SGD },
  { flag: <img alt="" src={THB} className="flag"></img>, label: 'THB', value: values && values.rates && values.rates.THB },
  { flag: <img alt="" src={TRY} className="flag"></img>, label: 'TRY', value: values && values.rates && values.rates.TRY },
  { flag: <img alt="" src={ZAR} className="flag"></img>, label: 'ZAR', value: values && values.rates && values.rates.ZAR }]

  const options = [...rates, ...rates2]

  return (
    <div className="App">
      <section className="componentes">
        {
          (
            <div>
              <div className="container col-4" >
                <div className="title">
                  <h2>Histórico de cotizaciones</h2>
                </div>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="label">Selecciona una moneda de refencia</Form.Label>
                  <Form.Control as="select" className="input">
                    {
                      options && options.map((option, index) => (
                        <option onClick={() => console.log(option.label)}>
                          {option.label}
                        </option>
                      ))
                    }
                  </Form.Control>
                </Form.Group>
                <label className="label">Ingresa la fecha de cotización </label>
                <div className="col-4 date-picker-content">
                  <DatePickerComponent />
                </div>
                <Button className="btn-search col-12" size="lg">Buscar cotizaciones</Button>
                <div className="content">
                  <Table bordered hover>
                    <tbody>
                      {
                        page === 1 ?
                          rates && rates.map((rate, index) => (
                            <tr key={index}>
                              <th> {rate.flag} </th>
                              <th> {rate.label} </th>
                              <th colSpan="2"> {rate.value} </th>
                            </tr>
                          ))
                          : rates2 && rates2.map((rate, index) => (
                            <tr key={index}>
                              <th> {rate.flag} </th>
                              <th> {rate.label} </th>
                              <th colSpan="2"> {rate.value} </th>
                            </tr>
                          ))
                      }
                    </tbody>
                  </Table>
                  <div className="content-button">
                    <Button className="btn-view col-12" size="lg" onClick={() => setPage(2)}>Ver más cotizaciones</Button>
                  </div>

                </div>
              </div>
            </div>
          )
        }
      </section>
    </div>
  );
}

export default App;