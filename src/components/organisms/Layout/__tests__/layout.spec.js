import React from 'react';
import { shallow } from '../../../../../enzyme';
import Layout from '../index';

describe('Layout test', () => {
  it('When render component then checking props', () => {
    const searchTerm = 'java';
    const placeholder = 'Buscar libro...';
    const withSearch = true;
    const withOutLink = true;
    const wrapper = shallow(
      <Layout
        withSearch={withSearch}
        searchTerm={searchTerm}
        withOutLink={withOutLink}
        placeholder={placeholder}
      />
    );
    expect(wrapper.find('[data-testid="search-input"]').prop('value')).toBe(
      searchTerm
    );
    expect(
      wrapper.find('[data-testid="search-input"]').prop('placeholder')
    ).toBe(placeholder);
  });

  it('When input value change then update callback is called', () => {
    let testState = '';
    let testInput = 'java';
    const wrapper = shallow(
      <Layout
        withSearch
        setSearchTerm={(e) => {
          testState = e;
        }}
      />
    );

    wrapper
      .find('[data-testid="search-input"]')
      .simulate('change', { target: { value: testInput } });

    expect(testState).toBe(testInput);
  });
});
