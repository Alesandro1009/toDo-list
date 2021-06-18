import React from 'react';

import './app__list.scss'

import {ListGroup} from 'reactstrap';

import AppListItem from '../app__list__item'

const AppList = ({todos,onToggleHaveDone}) =>{

    const elements = todos.map((item) =>{
        const {id,...todoProps} = item;
        return (
            <li key = {id}>
                <AppListItem {...todoProps}
                onToggleHaveDone = {()=>onToggleHaveDone(id)}
                
                />
            </li>

        )
    });
    return (
        <ListGroup className = "app__list">
                {elements}
            </ListGroup>
    )
}

export default AppList;
