import React from 'react'
import './LoginForm.scss'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Button, Form} from "semantic-ui-react"

export function LoginForm() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: (formValue) => {
      console.log("submit")
      console.log(formValue)
    }

  })


  return (
    <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
        <Form.Input
          name='email'
          type='email'
          placeholder='Correo electronico'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />

        <Form.Input
          name='password'
          type='password'
          placeholder='Contraseña'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Button
        type='submit'
        className='btn-submit primary fluid'
        >Iniciar</Button>
    </Form>
  )
}

const initialValues = () => {
  return {
    email: '',
    password: ''
  }
}

const validationSchema = () => {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true)
  })
}