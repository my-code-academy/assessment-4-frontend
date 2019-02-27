import React from 'react';
import renderer from 'react-test-renderer';
import AddForm from './AddForm.component';

describe('AddForm', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<AddForm />);
    expect(tree).toMatchSnapshot();
  });
});
