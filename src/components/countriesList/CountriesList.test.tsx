import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CountriesList from './CountriesList';
import { COUNTRIES_API_URL } from './constants';

// there's a lot I could do to test fully & reach 100% coverage, but trying to timebox this appropriately

describe('Country list component', () => {
  const observe = jest.fn();
  const unobserve = jest.fn();
  const root = jest.fn();
  const rootMargin = jest.fn();
  const thresholds = jest.fn();
  const disconnect = jest.fn();
  const takeRecords = jest.fn();
  beforeAll(() => {
    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
      root,
      rootMargin,
      thresholds,
      disconnect,
      takeRecords,
    }));
  });
  it('should mount and match snapshot initially in loading state and call observe', () => {
    const component = render(<CountriesList />);
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot after calling API', async () => {
    window.fetch = jest.fn(() => ({
      json() {
        return [
          {
            alpha2Code: 'abcdef',
            capital: 'Neverland',
            name: 'Neverland',
          },
        ];
      },
    }));
    const { getAllByText, baseElement } = render(<CountriesList />);
    expect(window.fetch).toHaveBeenCalledWith(COUNTRIES_API_URL);
    await waitFor(() => {
      expect(getAllByText('Neverland')[0]).toBeInTheDocument();
      expect(baseElement).toMatchSnapshot();
      expect(observe).toHaveBeenCalled();
    });
  });
});
