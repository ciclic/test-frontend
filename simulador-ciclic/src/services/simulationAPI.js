import axios from 'axios'

const periodInMonths = (period) => {
    return period * 12;
}

export const simulate = async (installments, period) => {

    const expr = {
        "expr": `${installments} * (((1 + ${process.env.REACT_APP_TAX}) ^ ${periodInMonths(period)} - 1) / ${process.env.REACT_APP_TAX})`
    };

    return await axios.post(
        process.env.REACT_APP_API_URL,
        expr
    );
};