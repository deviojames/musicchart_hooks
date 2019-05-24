import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../src/Components/Cards';

test('Screen matches the snapshot', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });