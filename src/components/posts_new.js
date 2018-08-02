import React, { Component } from 'react';
/*Field is a react helper component wired to redux
reduxForm is a redux helper function that allows the 
component to talk to the redux store. It's like the connect helper function!*/
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }


    render() {
        return (
           <form>
               <Field 
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}  
                />
           </form>
        );
    }
}


// Helper function that needs to be passed to the reduxForm as a configuration option
function validate(values) {
    // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf'}
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content please";
    }
    // If errors is empty, the form is valid and fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}


export default reduxForm({
    //If the key an value are identical, condense it down to a single key/value option
    validate,
    form: 'PostsNewForm'
})(PostsNew);