import React from 'react';
import { render } from '@testing-library/react';
import Result from './Result';

test('renders simulator result message', () => {
  const { getByText } = render(<Result name="Tobias" installments="R$20,00" futureAmount="R$509,65" period="2 anos" />);
  const message = getByText(/Ola Tobias juntando R\$20,00 todo mês, você terá R\$509,65 em 2 anos/i);
  expect(message).toBeInTheDocument();
});
