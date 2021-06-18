import React from 'react';

import './app__panel.scss'

export default class AppListPanel extends React.Component {

    constructor(props) {
        super(props);
        this.buttons = [
            {label:'fa-list-ul', name:'all'},
            {label:'fa-check', name:'haveDone'},
            {label:'fa-times',name:'!haveDone'}

        ]
    }

    render() {

        const buttons = this.buttons.map(({name,label})=>{
            const active = this.props.filter;
            let clazz = '';
            if(name === 'all'){
                clazz = `fa fa-list-ul`;
            }
            if(name === 'haveDone'){
                clazz = `fa fa-check`
            }
            if(name === '!haveDone'){
                clazz = `fa fa-times`
            }
            return(
                <>
                <a href="#" className="filter__link">
                        <i className={clazz} onClick={()=>{this.props.onFilterSelect(name)}}></i>
                </a>
                </>
            )
            
        })

        return (
            <div className="filters">
                {buttons}
            </div>
          
        )
    }
}