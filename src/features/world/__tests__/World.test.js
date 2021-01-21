import React from 'react';
import World from '../World';
import { render } from '@testing-library/react'

describe('Test <World />', () => {
    it('should render correctly', () => {
       const wrapper = render(<World />)
       expect(wrapper.firstChild).toMatchSnapshot();
    });

});