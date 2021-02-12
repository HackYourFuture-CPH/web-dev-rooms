import React, { useState } from 'react';

import { SkillsPicker } from './SkillsPicker';

export default {
  title: 'Components / SkillsPicker',
};

const skills = [
  {
    id: 1,
    name: '1',
  },
  {
    id: 2,
    name: '2',
  },
  {
    id: 3,
    name: '3',
  },
];

export const SimpleSkillsPicker = () => {
  const [selected, setSelected] = useState([]);

  return (
    <main style={{ maxWidth: '768px', width: '100%', margin: '0 auto' }}>
      <h1>Skills picker</h1>
      <SkillsPicker
        skills={skills}
        selected={selected}
        onChange={setSelected}
      />
    </main>
  );
};
