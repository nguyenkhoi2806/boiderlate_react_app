import {
  CHECKBOX,
  CHECKBOX_GROUP,
  RADIO,
  RADIO_GROUP,
  SELECT,
} from 'constants/FieldType';

import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import Select from './Select';

interface InputTypeProps {
  type: string;
  onChange: () => void;
  options: { label: string; value: string | number }[];
  name: string;
  id: string;
  label: string;
  value: string | number;
  checked: boolean;
}

const InputType = (props: InputTypeProps) => {
  const { type, onChange, value, checked, label, id, options, name } = props;

  switch (type) {
    case CHECKBOX:
      return (
        <Checkbox
          onChange={onChange}
          checked={checked}
          label={label}
          id={id}
          value={value}
        />
      );
    case CHECKBOX_GROUP:
      return (
        <CheckboxGroup
          onChange={onChange}
          checked={checked}
          options={options}
        />
      );
    case RADIO:
      return (
        <Radio
          onChange={onChange}
          checked={checked}
          label={label}
          name={name}
          value={value}
        />
      );
    case RADIO_GROUP:
      return (
        <RadioGroup
          onChange={onChange}
          checked={checked}
          label={label}
          name={name}
          options={options}
        />
      );
    case SELECT:
      return (
        <Select
          onChange={onChange}
          options={options}
          value={value}
          name={name}
        />
      );
  }
};

export default InputType;
