import React,{useState,useCallback} from 'react';
import {Form, Image, Button} from 'semantic-ui-react';
import {useDropzone} from 'react-dropzone';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './AddEditCategoryForm.scss'

export function AddEditCategoryForm() {

    const [previewImage, setPreviewImage] = useState(null)

    const formik = useFormik({
        initialValues:initialValues(),
        validationSchema: Yup.object(newChema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log('Formualrtio enviado')
            console.log(formValue)
        }
    })


    const onDrop = useCallback((acceptedFile)=> {
        const file = acceptedFile[0];
        setPreviewImage(URL.createObjectURL(file))
        console.log(previewImage)
    },[])

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/jpeg, image/png',
        noKeyboard: true,
        multiple: false,
        onDrop: onDrop
    })


  return (
    <Form
        className='add-edit-category-form' onSubmit={formik.handleSubmit}>
            <Form.Input
                name='title'
                placeholder='Nombre de la categoria'
                value={formik.values.title}
                onChange={formik.values.title}
                error={formik.errors.title}
            />


            <Form.Input
                name='description'
                placeholder='Descripcion de la categoria'
                value={formik.values.description}
                onChange={formik.values.description}
                errors={formik.errors.description}
            />

            <Button type='button' fluid {...getRootProps()}>Subir imagen</Button>
            <input {...getInputProps}/>
            <Image src={previewImage} fluid/>

            <Button type='submit' primary fluid content="Crear"/>

        </Form>
  )
}


const initialValues = () => {
    return {
        title:'',
        description:'',
        imgUrl:''
    }
}

const newChema = () => {
    return {
        title: Yup.string().required(true),
        description: Yup.string().required(true),
        imgUrl: Yup.string().required(true)
    }
}