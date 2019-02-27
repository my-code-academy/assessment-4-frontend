import React from 'react';
import renderer from 'react-test-renderer';
import FillForm from './FillForm.component';

describe('FillForm', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<FillForm />);
    expect(tree).toMatchSnapshot();
  });
});
