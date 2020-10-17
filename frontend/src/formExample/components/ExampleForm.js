import React, {Component, Fragment} from "react";
import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/custom-theme-button';
import {Checkbox} from '@atlaskit/checkbox';
import TextField from '@atlaskit/textfield';

import Form, {
    CheckboxField,
    ErrorMessage,
    Field,
    FormFooter,
    HelperMessage,
    ValidMessage,
} from '@atlaskit/form';

export default class ExampleForm extends Component {

    render() {
        return <div
            style={{
                display: 'flex',
                width: '400px',
                maxWidth: '100%',
                margin: '0 auto',
                flexDirection: 'column',
            }}
        >
            <Form onSubmit={data => {
                console.log('form data', data);
            }}
                >
                {({formProps, submitting}) => (
                    <form {...formProps}>
                        <Field
                            name="username"
                            label="User name"
                            isRequired
                            defaultValue="hello"
                        >
                            {({fieldProps, error}) => (
                                <Fragment>
                                    <TextField autoComplete="off" {...fieldProps} />
                                    {!error && (
                                        <HelperMessage>
                                            You can use letters, numbers & periods.
                                        </HelperMessage>
                                    )}
                                    {error && (
                                        <ErrorMessage>
                                            This user name is already in use, try another one.
                                        </ErrorMessage>
                                    )}
                                </Fragment>
                            )}
                        </Field>
                        <Field
                            name="password"
                            label="Password"
                            defaultValue=""
                            isRequired
                            validate={value =>
                                value && value.length < 8 ? 'TOO_SHORT' : undefined
                            }
                        >
                            {({fieldProps, error, valid, meta}) => {
                                return (
                                    <Fragment>
                                        <TextField type="password" {...fieldProps} />
                                        {error && !valid && (
                                            <HelperMessage>
                                                Use 8 or more characters with a mix of letters, numbers &
                                                symbols.
                                            </HelperMessage>
                                        )}
                                        {error && (
                                            <ErrorMessage>
                                                Password needs to be more than 8 characters.
                                            </ErrorMessage>
                                        )}
                                        {valid && meta.dirty ? (
                                            <ValidMessage>Awesome password!</ValidMessage>
                                        ) : null}
                                    </Fragment>
                                );
                            }}
                        </Field>
                        <CheckboxField name="remember" label="Remember me" defaultIsChecked>
                            {({fieldProps}) => (
                                <Checkbox {...fieldProps} label="Always sign in on this device"/>
                            )}
                        </CheckboxField>
                        <FormFooter>
                            <ButtonGroup>
                                <Button appearance="subtle">Cancel</Button>
                                <Button type="submit" appearance="primary" isLoading={submitting}>
                                    Sign up
                                </Button>
                            </ButtonGroup>
                        </FormFooter>
                    </form>
                )}
            </Form>
        </div>
    }
}