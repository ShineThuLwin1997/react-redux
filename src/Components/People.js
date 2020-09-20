import * as type from "../redux/action/type";
import React from "react";
import {connect} from 'react-redux';

class People extends React.Component{
    render(){
        
        return (<div>
        <button onClick={this.props.onAddedPerson} />
        {this.props.per.map(person => (
            <h1>{person.name + person.age}</h1>
        ))}
       </div>);
    }
}
const mapStateToProps = state => {
    return {
        per: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: () => dispatch({type: type.ADDPERSON, personData: {name: "Shine", age: 19}}),
        
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(People);