/** * Created by admin on 2017/3/3. */import React, { Component } from 'react';import { hashHistory } from 'react-router';import TabBar from './TabBarContainer';export default class Seller extends Component{	constructor(props){		super(props);	}    render(){			let id = this.props.location && this.props.location.state && this.props.location.state.id;			//console.log('this.props....',this.props);			//console.log('id...',id)        return(            <div onClick={()=>{hashHistory.push({pathname:'/mine/'})}}>	            Seller page	            <p>这是上个页面通过传过来的ID：{ id }</p>	            <p>通过this.props.location.state这个对象进行获取</p>              <TabBar/>            </div>        )    }}