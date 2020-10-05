import React, { useState } from 'react';
import Result from '../result/Result'
import Form from '../form/Form';
import { simulate } from '../../services/simulationAPI'
import { Snackbar, Container, Card, CardContent } from '@material-ui/core';

function Simulator() {
    const [name, setName] = useState("");
    const [installments, setInstallments] = useState();
    const [period, setPeriod] = useState(20);
    const [futureAmount, setfutureAmount] = useState(0);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isCalculated, setIsCalculated] = useState(false);

    const Simulate = async ({ installments }) => {

        try {

            const result = await simulate(installments, period);
            const amount = parseFloat(result.data.result).toLocaleString("pt-BR",
                {
                    minimumFractionDigits: 2, style: 'currency', currency: 'BRL'
                });
            setfutureAmount(amount)
            setIsCalculated(true)

        } catch (err) {
            setError(true);
            setErrorMessage("Serviço temporariamente indisponível");
        }

    }

    const handleSubmit = (values) => {

        setInstallments(values.installments);
        setName(values.name);

        Simulate(values);
    }

    const resetForm = () => {
        setIsCalculated(false)
    }

    return (
        <main className="simulator">

            <Container maxWidth="sm">
                {isCalculated ? (
                    <Card variant="outlined">
                        <CardContent>
                            <Result name={name} installments={installments} futureAmount={futureAmount} period={period} resetForm={resetForm} />
                        </CardContent>
                    </Card>
                ) : (
                        <Card variant="outlined">
                            <CardContent>
                                <Form setPeriod={setPeriod} handleSubmit={handleSubmit} />
                            </CardContent>
                        </Card>
                    )}


                <Snackbar open={error} autoHideDuration={6000} message={errorMessage} />

            </Container>
        </main>
    );
}


export default Simulator;
