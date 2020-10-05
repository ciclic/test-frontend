import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ResultMessage } from './styles';
import { Button } from '@material-ui/core';

function Result({
    name,
    installments,
    futureAmount,
    period,
    resetForm
}) {
    return (
        <Fragment>
            <ResultMessage>
                Ola {name} <br />juntando R$ {parseFloat(installments).toLocaleString("pt-BR")} todo mês, <br />você terá <strong>{futureAmount} </strong> <br />em {period} {period > 1 ? "anos" : "ano"}
            </ResultMessage>

            <Button fullWidth={true} variant="contained" color="primary" onClick={resetForm}> Simular Novamente </Button>
        </Fragment>
    );
}

Result.propTypes = {
    name: PropTypes.string,
    installments: PropTypes.string,
    futureAmount: PropTypes.string,
    period: PropTypes.string
}

export default Result;
