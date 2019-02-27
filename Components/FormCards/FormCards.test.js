import React from 'react';
import renderer from 'react-test-renderer';
import FormCard from './FormCard.component';


describe('FormCard', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<FormCard />);
    expect(tree).toMatchSnapshot();
  });
});
