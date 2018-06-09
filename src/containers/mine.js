/**
 * Created by admin on 2017/3/3.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { hashHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form'
import TabBar from './TabBarContainer';

const required = value => (value ? undefined : 'Required');
const validateLength = max => value => value && value.length != max ? `Must be ${max} characters` : undefined;
const validateLength11 = validateLength(11);
const validateLength6 = validateLength(6);
const phoneNumber = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;

const renderField = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

class Mine extends Component{
	constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }
    
    submit(values) {
        console.log('values:', values)
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
                <p>登录</p>
                <form onSubmit={handleSubmit(this.submit)}>
                    <Field 
                        name='phone'
                        component={renderField}
                        type='text'
                        label='手机号'
                        validate={[required, validateLength11, phoneNumber]}
                        placeholder='请输入手机号码'
                    />
                    <Field
                        name='password'
                        component={renderField}
                        type='password' 
                        label='密码'
                        validate={[required, validateLength6]}
                        placeholder='请输入密码' 
                    />
                    <button type='submit'>登录</button>
                </form>
               <TabBar/>
            </div>
        )
    }
}


Mine = reduxForm({
    form: 'contact'
  })(Mine);

function mapStateToProps(state) {
    return {
        initialValues: state.login
    }
}


Mine =  connect(mapStateToProps, null) (Mine);

export default Mine;
