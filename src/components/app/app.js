import React from 'react';

import './app.scss'

import AppHeader from '../app__header'

import AppList from '../app__list'

import AppForm from '../app__form'

import AppPanel from '../app__panel'

export default class App extends React.Component {
    
  
  constructor(props){
      super(props);
      this.state = { 
        data : [
          {label: 'Learn hooks at React', haveDone: false, id:1},
          {label: 'Learn state and props at React', haveDone: true, id:2}
        ],

          filter : 'all',
          term:''
      }
      this.maxId = 3;
      this.onToggleHaveDone = this.onToggleHaveDone.bind(this);
       this.onFilterSelect = this.onFilterSelect.bind(this);
       this.addItem = this.addItem.bind(this);
    }
  
    addItem(body){
      const newItem ={
        label:body,
        haveDone:false,
        id:this.maxId++
      }
      this.setState(({data})=>{
            const newArr = [...data, newItem];
            return{
                data:newArr
            }
        })
    }

  onToggleHaveDone(id){
    this.setState(({data})=>{
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old,haveDone: !old.haveDone};
      const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];
      return{
        data: newArr
      }
    })
  }

  searchPost(items,term){
        if(term.length === 0){
            return items
        }

        return items.filter((item) =>{
            return item.label.indexOf(term)>-1;
        })
    }
    
  filterToDo(items,filter) {
        if(filter === 'haveDone'){
            return items.filter(item => item.haveDone);
        }
        if(filter === '!haveDone'){
          return items.filter(item => !item.haveDone)
        }
        else{
            return items;
        }
    }

    onFilterSelect(filter){
        this.setState({filter})
    }
    
   

  render(){
    
    const {data, term,filter} = this.state;

    const allToDo = this.filterToDo(this.searchPost(data,term),filter);

    return (
      <div className="app">
        <AppHeader/>
        <AppList todos={allToDo} onToggleHaveDone = {this.onToggleHaveDone}/>
        <AppForm onAdd= {this.addItem}/>
        <AppPanel filter={filter} onFilterSelect ={this.onFilterSelect}/>
      </div>

    )
    
  }

}