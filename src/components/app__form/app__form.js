import React from 'react';

import './app__form.scss'

export default class AppForm extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            text:''
        }

        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onValueChange(e){
        this.setState({text: e.target.value});

    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text: ''});
    }    

    render(){
        return(
            <>
            <form className="app__form" onSubmit={this.onSubmit}>
                <input className="app__form__input" onChange={this.onValueChange} value={this.state.text}></input>
                <button className="app__form__btn">
                    <i className="fa fa-plus"></i>
                </button>
            </form>
            </>
            
        )
    }
        

}