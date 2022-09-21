import React from 'react'
import './LoginForm.scss'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import {Button, Form} from "semantic-ui-react"
import {loginApi} from '../../../api/user'
import {useAuth} from '../../../hooks'

export function LoginForm() {
  const {login} = useAuth()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formValue) => {
      try{
        const response = await loginApi(formValue)
        const access = response.data.token
        login(access)
        //! Agregar
        toast.success('Logueado correctamente')

      }catch(error){
        console.log(error)
        toast.error(error.message)
      }
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