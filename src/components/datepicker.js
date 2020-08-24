import React from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)
 
class DatePickerComponent extends React.Component {

  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date    
    });
    console.log(date)
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        locale="es"
        dateFormat="dd/MM/yyyy"
        maxDate={this.state.startDate}
        className="form-control date-picker-app"
      />
    );
  }
  
}

export default DatePickerComponent;
