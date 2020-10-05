import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Slider, TextField, FormControl, Button, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import NumberFormatInput from '../numberFormatInput/numberFormatInput';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Campo obrigatório'),
    installments: Yup.string()
        .required('Campo obrigatório')
})


function SimulatorForm({
    setPeriod,
    handleSubmit
}) {
    return (

        <Formik
            initialValues={{ name: '', installments: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {
                ({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                }) => (
                        <Form>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <FormControl fullWidth={true}>
                                        <TextField
                                            helperText={(errors.name && touched.name) && errors.name}
                                            id="standard-basic"
                                            label="Nome"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={errors.name && touched.name}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth={true}>
                                        <TextField
                                            helperText={(errors.installments && touched.installments) && errors.installments}
                                            error={errors.installments && touched.installments}
                                            label="Mensalidade"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="installments"
                                            id="installments-input"
                                            InputProps={{
                                                inputComponent: NumberFormatInput,
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth={true}>
                                        <Typography id="discrete-slider" gutterBottom>
                                            Tempo de investimento (em anos)
                                </Typography>
                                        <Slider
                                            defaultValue={20}
                                            aria-labelledby="discrete-slider-always"
                                            step={1}
                                            min={1}
                                            max={30}
                                            valueLabelDisplay="on"
                                            onChange={(e, value) => setPeriod(value)} />
                                        <Button type="submit" variant="contained" color="primary"> Simular </Button>
                                    </FormControl>
                                </Grid>

                            </Grid>
                        </Form>
                    )
            }
        </Formik>

    );
}

SimulatorForm.propTypes = {
    setName: PropTypes.func,
    setInstallments: PropTypes.func,
    setPeriod: PropTypes.func,
    simulate: PropTypes.func,
}

export default SimulatorForm;
