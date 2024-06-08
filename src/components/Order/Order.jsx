import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import "./Order.css";

const regions = ["Boston", "West North Central", "Mid-Atlantic", "New York", "St. Louis", "Kansas City", "Dallas", "San Francisco"];

const Order = ({ close_form }) => {
    const orderSchema = yup.object().shape({
        name: yup.string().required("Must be filled in").matches(/^[A-Z][a-z]*$/, "Mistake"),
        lastName: yup.string().required("Must be filled in").matches(/^[A-Z][a-z]*$/, "Mistake"),
        phone: yup.string().required("Must be filled in").matches(/^\+[374]\d{8}$/, "Mistake"),
        mail: yup.string().required("Must be filled in").email("Mistake"),
        region: yup.string().required("Must be selected"),
        city: yup.string().required("Must be filled in").matches(/^[A-Z][a-z]*$/, "Mistake"),
        address: yup.string().required("Must be filled in"),
    });

    return (
        <div className='order_inputs'>
            <Formik
                initialValues={{
                    name: "",
                    lastName: "",
                    phone: "",
                    mail: "",
                    region: "",
                    city: "",
                    address: ""
                }}
                validationSchema={orderSchema}
                onSubmit={(values) => console.log(values)}
            >
                {() => (
                    <Form className='form_all'>
                        <Field name="name" placeholder="Name" />
                        <ErrorMessage name="name" component="span" className='err_order' />

                        <Field name="lastName" placeholder="Last Name" />
                        <ErrorMessage name="lastName" component="span" className='err_order' />

                        <Field name="phone" placeholder="Phone" />
                        <ErrorMessage name="phone" component="span" className='err_order' />

                        <Field name="mail" placeholder="Mail" />
                        <ErrorMessage name="mail" component="span" className='err_order' />

                        <Field name="region" as="select" placeholder="Region">
                            {regions.map((r) => <option key={r}>{r}</option>)}
                        </Field>
                        <ErrorMessage name="region" className='err_order ' />

                        <Field name="city" placeholder="City" />
                        <ErrorMessage name="city" component="span" className='err_order' />

                        <Field name="address" placeholder="Address" />
                        <ErrorMessage name="address" component="span" className='err_order' />

                        <div className='popupbtnall'>
                            <button type='submit' className='popUpBtns1'>Send My Information</button>
                            <button type='button' onClick={close_form} className='popUpBtns2'>X</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Order;
