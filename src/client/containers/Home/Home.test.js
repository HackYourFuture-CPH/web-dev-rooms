import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './Home';

test('Home section has correct classname', () => {
  const title = 'hyf-big-logo';

  expect(render(<Home />).container.firstChild).toHaveClass(title);
});
