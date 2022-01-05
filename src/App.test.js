import React from 'react';
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import App from './App';

test('renders learn react link', () => {
  const { getByTitle } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByTitle('Search')).toBeInTheDocument();
});
