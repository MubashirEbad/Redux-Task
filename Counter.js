import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

class Counter extends React.Component{
    constructor(props){
        super(props);

        this.render = this.render.bind(this);
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h1> Counter Application</h1>
                <p> Count: {this.props.count}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        count: state.count
    };
}

// export default Counter;

export default connect(mapStateToProps)(Counter);