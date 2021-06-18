import React from 'react';

import './app__list__item.scss'



export default class AppListItem extends React.Component{
    
    render() {

        const {label, haveDone, onToggleHaveDone} = this.props;

        let classNames = 'app__list__item';
        
        if(haveDone) classNames +=' haveDone';

        return(
           <div className={classNames} onClick={onToggleHaveDone}>
                <span >{label}</span><i className="fa fa-check" aria-hidden="true"></i>
           </div>
               
                   
            )
    }
    
}