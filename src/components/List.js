/** * Created by admin on 2017/4/14. */import React, { Component } from 'react';class ListItem extends Component {	render(){		const data = this.props.data;		return(			<div style={styles.itemContainer} onClick={ () => {this._onClick.bind(this,data.content)}}>				<p style = {styles.title}>{data.title}</p>				<div style={styles.main}>					<div style={styles.avatarContainer}><img src={data.author.avatar_url} style={styles.avatarImg}/></div>					<div style={styles.author}>						<p style = {styles.loginName}>{data.author.loginname}</p>						<p>{data.create_at.substr(0,11)}</p>					</div>					<div style={styles.num}>{data.reply_count}/{data.visit_count}</div>				</div>			</div>		)	}	_onClick(){		//window.location.href =	}}export default class List extends Component {	render(){		const list = this.props.list;		return(			<div>				{					list.map( (item,idx) =>						<ListItem key = {idx} data = {item}/>					)				}			</div>		)	}}const styles = {	itemContainer:{		background:'#fff',		padding:'.2rem .15rem',		borderBottom:'.01rem solid #e6e6e6',	},	title:{		marginBottom:'.1rem'	},	main: {		display:'flex',		flexDirection:'row',		alignItems:'center',	},	avatarContainer:{		width:'.4rem',		borderRadius:'50%',	},	avatarImg:{		width:'.4rem',		borderRadius:'50%',	},	num:{		width:'1rem',		textAlign:'right',		fontSize:'.18rem',	},	author:{		flex:1,		fontSize:'.18rem',		paddingLeft:'.15rem'	},	loginName:{		marginBottom:'.06rem'	}};