import React, {Component} from 'react';


class ProductCheckbox extends Component{

    constructor(props){
        super(props);
       this.state = {
            isChecked : false,
            selectedProduct: []
     }
    }

 

    render(){
        const {isChecked} = this.state;
        return(
            <div>
                <p>Checked: {isChecked ? <p>{this.props.productSelected}</p> : "No"}</p>
                <input type="checkbox"
                       checked={isChecked}
                       name="isChecked"
                       id= {this.props.productSelected}
                       onChange={this.props.onChange} 

                ></input>

            </div>
        )
    }
}
export default ProductCheckbox;