import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
import GitHubCard from './GitHubCard';

test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders GitHubCard component correctly', () => {
  const { container } = render(
    <GitHubCard
      username="YourUsername"
      imageUrl="path_to_your_image"
      blurb="Your blurb goes here"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});