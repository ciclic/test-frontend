import React from 'react';
import { render } from '@testing-library/react';
import Result from './Result';

test('renders simulator result message', () => {
  const { getByText } = render(<Result name="Tobias" installments="20,00" futureAmount="R$ 509,65" period="2" />);
  const name = getByText(/Ola Tobias/i);
  const installments = getByText(/R\$ 20 todo mês/i);
  const futureAmount = getByText(/R\$ 509,65/i);
  const period = getByText(/2 anos/i);

  expect(name).toBeInTheDocument();
  expect(installments).toBeInTheDocument();
  expect(futureAmount).toBeInTheDocument();
  expect(period).toBeInTheDocument();
});
