import React, {Component} from 'react';


class SelectAllCheckbox extends Component{

    constructor(props){
        super(props);
       this.state = {
            isChecked : false
           
        }
    }
    onChange = e => {
        this.setState({isChecked : e.target.checked});
    }

    render(){
        const {isChecked} = this.state;
        return(
            <div>
                <input type="checkbox"
                       checked={isChecked}
                       onChange={this.onChange}

                ></input>

            </div>
        )
    }



}
export default SelectAllCheckbox;