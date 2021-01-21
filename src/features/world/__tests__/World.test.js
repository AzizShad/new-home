import React from 'react';
import { World } from '../World';
import { render } from '@testing-library/react'

jest.mock('../../Resource/Resource', () => {
    return function ResourceButton(props){
        return (
            <div>MockResourceButton</div>
        )
    }
});

describe('Test <World />', () => {
    it('should render correctly', () => {
       const wrapper = render(
            <World
                inventory={{
                    wood: {
                        key: 'wood',
                        desc: 'Wood',
                        amount: 0,
                        timeout: 1,
                        requirements: '',
                        modifiers: [],
                        enabled: true
                    }
                }}
            />
        )
       expect(wrapper.findByText('Wood').length).toHaveLength(1)
    });

});