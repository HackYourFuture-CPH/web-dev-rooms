import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Footer from './footer';

const stories = storiesOf('Footer', module);
stories.addDecorator(StoryRouter());
stories.add('Example', () => <Footer />);
