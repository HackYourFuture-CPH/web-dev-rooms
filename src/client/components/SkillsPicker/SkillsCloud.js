import PropTypes from 'prop-types';
import React from 'react';

import Label from '../Label/Tags/Label';

export function SkillsCloud({ skills }) {
  if (!skills || !skills.length) {
    return null;
  }

  return (
    <>
      <section>
        {skills.map(({ value, label }) => (
          <Label key={value} text={label} />
        ))}
      </section>
      <hr
        style={{
          borderTop: '1px solid #f2f2f2',
          borderBottom: 'none',
          margin: '0.5rem 0',
        }}
      />
    </>
  );
}

SkillsCloud.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    }),
  ).isRequired,
};
