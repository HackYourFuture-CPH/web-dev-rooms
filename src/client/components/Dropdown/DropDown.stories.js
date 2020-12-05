import React, { useState } from 'react';
import DropDown from './DropDown';
import PropTypes, { shape } from 'prop-types';

const questions = [
  {
    id: '01',
    value: 'Add Question here',
  },
  {
    id: '02',
    value: 'question2',
  },
  {
    id: '03',
    value: 'question3',
  },
];

const skills = [
  {
    id: '01',
    value: 'HTML/CSS',
  },
  {
    id: '02',
    value: 'Firebase',
  },
  {
    id: '03',
    value: 'Javascript',
  },
  {
    id: '04',
    value: 'MYSQL',
  },
  {
    id: '05',
    value: 'NodeJS',
  },
  {
    id: '06',
    value: 'React',
  },
  {
    id: '07',
    value: 'Typescript',
  },
];
const classes = [
  {
    id: '01',
    value: 'Class14',
  },
  {
    id: '02',
    value: 'Class15',
  },
  {
    id: '03',
    value: 'Class16',
  },
];
const studygroups = [
  {
    id: '01',
    value: 'Elastic',
  },
  {
    id: '02',
    value: 'Zendesk',
  },
  {
    id: '03',
    value: 'Hack Your Future',
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
