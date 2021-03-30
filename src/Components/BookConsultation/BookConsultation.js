import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { AppContext } from '../../ContextProvider'
import './BookConsultation.css'

function BookConsultation() {
    const { clientInfo, setClientInfo, handleForm, isSubmit, setIsSubmit } = useContext(AppContext)



    const today = new Date()

    const dd = today.getDate() + 1
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yy = today.getFullYear()

    const maxDate = yy + '-' + mm + '-' + dd


    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = '*Required'
        }
        if (!values.lastName) {
            errors.lastName = '*Required'
        }
        if (!values.email) {
            errors.email = '*Required'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.date) {
            errors.date = '*Required'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            date: ''
        },
        validate,
        onSubmit: values => {
            setClientInfo([
                {
                    ...values,
                    id: Math.random() * 1000
                },
                ...clientInfo
            ])
            setIsSubmit(true)
            formik.handleReset()
        }
    })

    return (
        <div className="formContainer">
            <button className="formClose" onClick={handleForm}><i className="im im-x-mark"></i></button>
            <h3>Form &amp; Function Design Services</h3>
            {isSubmit ? <p>One of our associates will be in touch!</p> : <p>Book your consultation today!</p>}
            <form className="form" onSubmit={formik.handleSubmit}>
                <span>
                    <label>First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.errors.firstName && formik.touched.firstName
                        ? <p >{formik.errors.firstName}</p> : null}
                </span>
                <span>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.errors.lastName && formik.touched.lastName
                        ? <p >{formik.errors.lastName}</p> : null}
                </span>
                <span>
                    <label>Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email
                        ? <p >{formik.errors.email}</p> : null}
                </span>
                <span>
                    <label>Preferred Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        min={maxDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                    />
                    {formik.errors.date && formik.touched.date
                        ? <p>{formik.errors.date}</p> : null}
                </span>
                <button
                    type='submit'
                    className='submit-btn'
                >Submit
                </button>
            </form>
        </div>
    )
}

export default BookConsultation
