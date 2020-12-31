import React, { useState } from 'react';
import DropDown from './DropDown';
import PropTypes, { shape } from 'prop-types';

const questions = [
  {
    id: 1,
    name: 'Add Question here',
  },
  {
    id: 2,
    name: 'question2',
  },
  {
    id: 3,
    name: 'question3',
  },
];

const skills = [
  {
    id: 1,
    name: 'HTML/CSS',
  },
  {
    id: 2,
    name: 'Firebase',
  },
  {
    id: 3,
    name: 'Javascript',
  },
  {
    id: 4,
    name: 'MYSQL',
  },
  {
    id: 5,
    name: 'NodeJS',
  },
  {
    id: 6,
    name: 'React',
  },
  {
    id: 7,
    name: 'Typescript',
  },
];
const classes = [
  {
    id: 1,
    name: 'Class14',
  },
  {
    id: 2,
    name: 'Class15',
  },
  {
    id: 3,
    name: 'Class16',
  },
];
const studygroups = [
  {
    id: 1,
    name: 'Elastic',
  },
  {
    id: 2,
    name: 'Zendesk',
  },
  {
    id: 3,
    name: 'Hack Your Future',
  },
];
function DropDownWithState({ items }) {
  const [value, setValue] = useState('');

  return <DropDown items={items} value={value} setValue={setValue} />;
}

DropDownWithState.propTypes = {
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

DropDownWithState.defaultProps = {
  items: [],
};

export default { title: 'DropDown' };

export const Studygroup = () => <DropDownWithState items={studygroups} />;
export const Classgroup = () => <DropDownWithState items={classes} />;
export const Skillgroup = () => <DropDownWithState items={skills} />;
export const Questiongroup = () => <DropDownWithState items={questions} />;
