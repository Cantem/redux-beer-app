import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BeerList from '../components/BeerList';

Enzyme.configure({ adapter: new Adapter() })
​
function setup() {
  const props = {
    addToCart: jest.fn()
  }
​
  const enzymeWrapper = shallow(<BeerList {...props} />)
​
  return {
    props,
    enzymeWrapper
  }
}
​
describe('components', () => {
  describe('BeerList', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
​
      expect(enzymeWrapper.find('div').hasClass('list')).toBe(true)
​
      const addToCartProps = enzymeWrapper.find('addToCartAction').props()
      expect(addToCartProps.addToCart).toBe(beer)
    })

  })
})