import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import Select from 'react-select';

import { SkillsCloud } from './SkillsCloud';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '100px',
    backgroundColor: '#f6f6f6',
    border: '1px solid #e8e8e8',
    padding: '0.5rem',
  }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: 'rgb(235, 235, 235)',
  }),
};

export function SkillsPicker(props) {
  const skills = useMemo(() => {
    return (props.skills || []).map(({ id, name }) => ({
      value: id,
      label: name,
    }));
  }, [props.skills]);
  const selected = useMemo(() => {
    return (props.selected || []).map(({ id, name }) => ({
      value: id,
      label: name,
    }));
  }, [props.selected]);

  function handleChange(selectedOptions) {
    if (props.onChange) {
      props.onChange(
        selectedOptions.map(({ value: id, label: name }) => ({ id, name })),
      );
    }
  }

  return (
    <section className="w-full">
      <SkillsCloud skills={selected} />
      <Select
        styles={customStyles}
        options={skills}
        isMulti
        classNamePrefix="skills-picker"
        value={selected}
        onChange={handleChange}
        closeMenuOnSelect={false}
        blurInputOnSelect={false}
        hideSelectedOptions={false}
        isSearchable
        placeholder="Select skills..."
      />
    </section>
  );
}

SkillsPicker.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
