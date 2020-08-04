import React,{Component} from "react";
import {connect} from 'react-redux';
import BodyBooks from "../components/BodyBooks";

class BodyContainer extends Component{

    render(){
        const {booksList} = this.props;
        return(
            <div>
                <BodyBooks booksList={booksList}/>
            </div>
        );
    }

}

const mapStateProps = state =>{
    console.log("asdsadasd"+state.Reducers.booksList)
     return{
         booksList: state.Reducers.booksList
     }
}

export default connect(mapStateProps)(BodyContainer);
