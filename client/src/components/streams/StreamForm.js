import React from 'react';
import { Field, reduxForm } from 'redux-form';
//component Field, function reduxForm

//ot StreamCreate.js:
//import { connect } from 'react-redux';
//import { createStream } from '../../actions';

class StreamForm extends React.Component {
    /*
    renderInput(formProps){
        //console.log(formProps);
        //return <input onChange={formProps.input.onChange} value={formProps.input.value} />
        //same as:
        return <input {...formProps.input} />
    }
    */
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        //console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error' : '' }`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
             </div>
        );
    }

    onSubmit = (formValues) => {
        //console.log(formValues);
        this.props.onSubmit(formValues);

    }

    render() {
        //taka vijdame che Redux dava HandleSubmit:
        //console.log(this.props);
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}


const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Yous must enter a title';
    }

    if(!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
}

/*ot StreamCreate:
export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);
*/

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

/* ot StreamCreate:
const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
*/