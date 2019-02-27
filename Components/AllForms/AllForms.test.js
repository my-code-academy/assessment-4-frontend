import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AllForms from './AllForms.component';

Enzyme.configure({ adapter: new Adapter() });

describe('AllForms', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<AllForms />);
    expect(tree).toMatchSnapshot();
  });

  it('Should call componentDidMount once', async () => {
    const wrapper = shallow(<AllForms />);
    expect(wrapper.instance().state.allFormsData).toEqual([]);
    await wrapper.instance().componentDidMount();
    expect(wrapper.instance().state.allFormsData.length).toEqual(0);
  });
});
