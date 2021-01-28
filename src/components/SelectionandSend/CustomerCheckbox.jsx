import React, {Component} from 'react';


class CustomerCheckbox extends Component{

    constructor(props){
        super(props);
       this.state = {
            isChecked : false,
     }
    }
    onChange = e => {
        this.setState({[e.target.name] : e.target.checked});
        
    }

    render(){
        const {isChecked} = this.state;
        return(
            <div>
                <p>Checked: {isChecked ? <p>{this.props.productSelected}</p> : "No"}</p>
                <input type="checkbox"
                       checked={isChecked}
                       name="isChecked"
                       onChange={this.onChange}

                ></input>

            </div>
        )
    }
}
export default CustomerCheckbox;