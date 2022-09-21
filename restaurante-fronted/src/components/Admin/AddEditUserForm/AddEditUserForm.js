import React from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {useUser} from '../../../hooks'
import {toast} from 'react-toastify'
import "./AddEditUserFOrm.scss"


export function AddEditUserForm() {

    const {addUser} = useUser();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: newSchame(),
        //validateOnChange: false,
        onSubmit: async(formValue) => {
            try{
                await addUser(formValue)
                console.log('Usuariop creado')
                toast.success('Usuario Creado')
            }catch(error){
                console.log(error)
                toast.error(error.message)
            }
            console.log(formValue)
        }
    });

  return (
    <Form className='add-edit-user-form' onSubmit={formik.handleSubmit}>
        <Form.Input name='nickname' placeholder='Nombre del usuario' value={formik.values.nickname} error={formik.errors.nickname} onChange={formik.handleChange}/>
        <Form.Input name='email' placeholder='Correo electronico' value={formik.values.email} error={formik.errors.email} onChange={formik.handleChange}/>
        <Form.Input name='first_name' placeholder='Nombre' value={formik.values.first_name} error={formik.errors.first_name} onChange={formik.handleChange}/>
        <Form.Input name='last_name' placeholder='Apellidos' value={formik.values.last_name} error={formik.errors.last_name} onChange={formik.handleChange}/>
        <Form.Input name='password' type ='password' placeholder='Contrasena' value={formik.values.password} error={formik.errors.password} onChange={formik.handleChange}/>
        <Form.Input name='birth_date' type='date'  placeholder='Fecha' value={formik.values.birth_date} error={formik.errors.birth_date} onChange={formik.handleChange}/>
        <div className='add-edit-user-form__active'>
            <Checkbox toggle checked={formik.values.is_active} onChange={(_, data)=> formik.setFieldValue('is_active', data.checked)}/> Usuario Activo
        </div>

        <div className='add-edit-user-form__staff'>
            <Checkbox toggle checked={formik.values.is_staff} onChange={(_, data)=> formik.setFieldValue('is_staff', data.checked)}/> Usuario Staff
        </div>

        <Button type='submit' primary fluid content='Crear'/>

    </Form>
  )
}


const initialValues = () => {
    return {
        nickname: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        is_active: true,
        is_staff: false,
        birth_date: null
    }
}

const newSchame = () => {
    return Yup.object({
        nickname: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        first_name: Yup.string().required(true),
        last_name: Yup.string().required(true),
        password: Yup.string().required(true),
        is_active: Yup.bool().required(true),
        is_staff: Yup.bool().required(true),
        birth_date: Yup.date().required(true)
    });
}