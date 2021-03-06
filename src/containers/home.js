/**
 * Created by admin on 2017/3/3.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

import  'assets/style.css';
import TabBar from './TabBarContainer';
import Header from './../components/Header';
import {get} from './../utils/fetch';
import List from './../components/List';
import {requestHomeList} from './../actions/homeList';
import AsyncGenerator from './../high-order/AsyncGenarator';

var dataList = [];

function Item(props) {
	return (
		<div>
			<div>{props.title}</div>
			<span>{props.text}</span>
		</div>
	)
}
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		};
	}

	componentDidMount() {
		window.scrollTo(0, (this.props.page - 1) * 625);
	}

	render() {
		//console.log(this.props);
		var LoadingStyle = this.state.isLoading ? 'HomeListLoading' : '';
		dataList.push.apply(dataList, this.props.list);    // 拼接数据
		return (
			<div className="homeContainer">
				<Header title='HOME'/>
				<div className={"HomeList " + LoadingStyle} ref='scroll' onTouchMove={() => this._onTouchMove()}>
					<List list={dataList}/>
				</div>
				{
					this.state.isLoading ?
						<div className="homeLoading">
							<img src={require('../assets/icons/loading.gif')} className="loadingImg"/>
						</div> : null
				}
				<TabBar />
			</div>
		)
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.router.location.action === 'PUSH';   //防止页面二次渲染
	}

	_onTouchMove() {
		let bottom = this.refs.scroll.getBoundingClientRect().bottom;
		if (bottom < 625) {
			this.setState({isLoading: true});
			this.props.fetching(this.props.page + 1);
		}
	}
}


function mapStateToProps(state) {
	return state.homeList;
}

function mapDispatchToProps(dispatch) {
	return {
		fetching: page => dispatch(requestHomeList(page))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncGenerator(Home))