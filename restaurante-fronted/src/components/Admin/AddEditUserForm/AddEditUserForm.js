import React from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {useUser} from '../../../hooks'
import {toast} from 'react-toastify'
import "./AddEditUserFOrm.scss"


export function AddEditUserForm(props) {

    const {onClose, user, onRefres} = props;
    const {addUser, updateUser} = useUser();

    const formik = useFormik({
        initialValues: initialValues(user),
        validationSchema: Yup.object(user ? updateSchame() : newSchame()),
        validateOnChange: false,
        onSubmit: async(formValue) => {
            try{
                if(user) await updateUser(user._id, formValue)
                else await addUser(formValue)
                onRefres()
                onClose()
                toast.success(`Usuario ${user ?'actualizado' :'Creado'}`)
            }catch(error){
                toast.error(error.message)
            }
        }
    });

  return (
    <Form className='add-edit-user-form' onSubmit={formik.handleSubmit}>
        <Form.Input name='nickname' placeholder='Nombre del usuario' value={formik.values.nickname} error={formik.errors.nickname} onChange={formik.handleChange}/>
        <Form.Input name='email' placeholder='Correo electrónico' value={formik.values.email} error={formik.errors.email} onChange={formik.handleChange}/>
        <Form.Input name='first_name' placeholder='Nombre' value={formik.values.first_name} error={formik.errors.first_name} onChange={formik.handleChange}/>
        <Form.Input name='last_name' placeholder='Apellidos' value={formik.values.last_name} error={formik.errors.last_name} onChange={formik.handleChange}/>
        <Form.Input name='password' type ='password' placeholder='Contraseña' value={formik.values.password} error={formik.errors.password} onChange={formik.handleChange}/>
        <Form.Input name='birth_date' type='date'  placeholder='Fecha' value={formik.values.birth_date} error={formik.errors.birth_date} onChange={formik.handleChange}/>
        <div className='add-edit-user-form__active'>
            <Checkbox toggle checked={formik.values.is_active} onChange={(_, data)=> formik.setFieldValue('is_active', data.checked)}/> Usuario Activo
        </div>

        <div className='add-edit-user-form__staff'>
            <Checkbox toggle checked={formik.values.is_staff} onChange={(_, data)=> formik.setFieldValue('is_staff', data.checked)}/> Usuario Staff
        </div>

        <Button type='submit' primary fluid content={user ? 'Actualizar' : 'Crear'}/>

    </Form>
  )
}


const initialValues = (user) => {
    return {
        nickname: user?.nickname || "",
        email: user?.email || "",
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        password: user?.password || "",
        is_active: user?.is_active ? true : false,
        is_staff: user?.is_staff ? true : false,
        birth_date: user?.birth_date || false
    }
}

const newSchame = () => {
    return {
        nickname: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        first_name: Yup.string().required(true),
        last_name: Yup.string().required(true),
        password: Yup.string().required(true),
        is_active: Yup.bool().required(true),
        is_staff: Yup.bool().required(true),
        birth_date: Yup.date().required(true)
    };
}

const updateSchame = () => {
    return {
        nickname: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        first_name: Yup.string().required(true),
        last_name: Yup.string().required(true),
        password: Yup.string(),
        is_active: Yup.bool().required(true),
        is_staff: Yup.bool().required(true),
        birth_date: Yup.date().required(false)
    };
}