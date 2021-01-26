import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('Loading Spinner component', () => {
  it('should mount and match snapshot', () => {
    const component = render(<LoadingSpinner />);
    expect(component).toMatchSnapshot();
  });
});
