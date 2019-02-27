import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AllForms from './AllForms.component';

Enzyme.configure({ adapter: new Adapter() });

describe('AllForms', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<AllForms />);
    expect(tree).toMatchSnapshot();
  });

  it('Should call componentDidMount once', async (done) => {
    const wrapper = shallow(<AllForms />);
    expect(wrapper.instance().state.allFormsData).toEqual({});
    await wrapper.instance().componentDidMount();
    expect(wrapper.instance().state.allFormsData.length).not.toEqual(0);
    done();
  });
});

