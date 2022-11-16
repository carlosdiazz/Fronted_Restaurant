import React,{useState, useEffect} from 'react'
import {Form, Button, Dropdown} from 'semantic-ui-react';
import moment from 'moment';
import { map } from 'lodash';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const fecha = moment().format('YYYY-MM-DD')

const ENUM_MOVIMIENTO = {
    INGRESO: "INGRESO",
    RETIRO: "RETIRO",
}


export function InventarioModal(props) {

    const {nombreProducto, getPayments, openCloseModal} = props
    const options_tanda = [ENUM_MOVIMIENTO.INGRESO, ENUM_MOVIMIENTO.RETIRO]

    const [tandasFormat, setTandasFormat] = useState([])

    useEffect(() => {
        setTandasFormat(formatDropdownData(options_tanda))
    },[])

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (dataForm) => {
            try {

                getPayments(dataForm)
                openCloseModal()
            }catch(error){
                //console.log(error)
            }
        }
    })


  return (
    <Form onSubmit={formik.handleSubmit}>

        <h5>Producto:</h5>
        <Dropdown
            placeholder='Nombre del producto'
            fluid selection search
            options={nombreProducto}
            value={formik.values.mesa}
            onChange={(_,data) => formik.setFieldValue('mesa',data.value)}
            error={formik.errors.mesa}
        />

        <h5>Tipo de Movimiento:</h5>
        <Dropdown
            placeholder='Tipo de Movimiento'
            fluid selection search
            options={tandasFormat}
            value={formik.values.pago}
            onChange={(_,data) => formik.setFieldValue('pago',data.value)}
            error={formik.errors.pago}
        />

        <h5>Desde:</h5>
        <Form.Input
            name="fecha_inicio"
            type='date'
            placeholder="Fecha de inicio"
            value={formik.values.fecha_inicio}
            onChange={formik.handleChange}
            error={formik.errors.fecha_inicio}
        />

        <h5>Hasta:</h5>
        <Form.Input
            name="fecha_final"
            type='date'
            placeholder="Fecha Final"
            value={formik.values.fecha_final}
            onChange={formik.handleChange}
            error={formik.errors.fecha_final}
        />

        <Button
            type='submit'
            primary fluid
            content={"Buscar"}
        />
    </Form>
  )
}


const formatDropdownData =(data) => {
    return map(data,(item, index) => ({
        key: item?._id || index,
        text: item,
        value: item
    }))
}

const initialValues = () => {
    return {
        mesa: undefined,
        pago: undefined,
        fecha_inicio: fecha,
        fecha_final: fecha
    }
}

const validationSchema = () => {
    return {
        mesa: Yup.string(),
        pago: Yup.string(),
        fecha_inicio: Yup.date().required(true),
        fecha_final: Yup.date().required(true)
    }
}