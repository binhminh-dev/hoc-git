import React, { Component } from "react";

type StateType ={
    counter: number;
    visible: boolean;
}
// babel + webpack
export default class LifeCycle extends Component<any, StateType> {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            visible: true,
        }
        console.log("constructor");
    }

    componentwillMount() {
        console.log("componentwillMount");
    }

    UNSAFE_componentwillUpdate(){
        // Tự kiểm tra xem mỗi state bị thay đổi để thực hiện cho phù hợp
        console.log("componentwillUpdate")
        //Userid -> call server -> dât phu thuoc vao user id
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    UNSAFE_componentwillReceiveProps() {
 
    }    
    
    componentWillUnmount() {

    }
      
    render() {
        console.log("render run");
        return (
            <div className="container">
                <h1>Play Ground - Life Cycle - React Hooks</h1>
                <button onClick={() => {
                    this.setState((prevState) => {
                        return {
                            counter: prevState.counter + 1
                        }            
                    })
                // partial -> Mot phan cua State
                }}>Counter Add</button>
                <p>this.state.counter</p>
            </div>
        )
    }
}