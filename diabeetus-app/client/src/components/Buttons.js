import React, { Component } from 'react';
import axios from 'axios';

class Buttons extends Component{
  state = {
      action: "",
      newAction: ""
    }    
    // newwwww
    carbCorrecting= () => {
        const task = {action: this.state.action}

        if(task.action && task.action.length > 0){
          axios.post('/api/todos', task)
          .then(res => {
            if(res.data){
              this.props.getCorrection();
              this.setState({action: 0})
            }
          })
          .catch(err => console.log(err))
      }else {
        console.log('input field required')
      }
        }

        handleChange = (e) => {
          this.setState({
          
            action: parseInt(e.target.value)
         
          })
          //console.log(typeof('action'))
        }


render() {

let { action } = (this.state)
parseInt(action);

return (
    <div>
      <input type="number" onChange={this.handleChange} value={action} />
      <button onClick={this.carbCorrecting}>Carb Correction!</button>
    </div>
    
)

}

}
console.log(typeof(action))
export default Buttons