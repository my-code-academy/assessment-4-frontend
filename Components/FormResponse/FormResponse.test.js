import React from 'react';
import renderer from 'react-test-renderer';
import FormResponse from './FormResponse.component';

describe('FormResponse', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<FormResponse />);
    expect(tree).toMatchSnapshot();
  });
});
