import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Posts from '../src/components/Posts'

Enzyme.configure({ adapter: new Adapter() })

function setup(){
    const props = {
        posts: [
            { "title": "Hello World!" },
            { "title": "Creating test with Enzyme" }
        ]
    }

    const enzymeWrapper = shallow(<Posts {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Post', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper, props } = setup()
        
            enzymeWrapper.find('li').forEach((node, i) => {
                expect(node.text()).toEqual(props.posts[i].title)
            })
        })
    })
})
