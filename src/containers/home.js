/** * Created by admin on 2017/3/3. */import React, { Component } from 'react'import { hashHistory } from 'react-router';import  'assets/style.css';import TabBar from './TabBarContainer';export default class Home extends Component{	constructor(props){		super(props);	}  render(){    return(      <div className="container">	      <div onClick={() => hashHistory.push('/seller/')}>主页</div>        <TabBar />      </div>    )  }}