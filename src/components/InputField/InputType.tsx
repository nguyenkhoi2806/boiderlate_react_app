import {
  CHECKBOX,
  CHECKBOX_GROUP,
  RADIO,
  RADIO_GROUP,
  SELECT,
} from 'constants/FieldType';

import Checkbox from './type/Checkbox';
import CheckboxGroup from './type/CheckboxGroup';
import Radio from './type/Radio';
import RadioGroup from './type/RadioGroup';
import Select from './type/Select';
import Text from './type/Text';

interface InputTypeProps {
  type: string;
  onChange: () => void;
  options: { label: string; value: string | number }[];
  name: string;
  id: string;
  label: string;
  value: string | number;
  checked: boolean;
  placeholder: string;
}

const InputType = (props: InputTypeProps) => {
  const {
    type,
    onChange,
    value,
    checked,
    label,
    id,
    options,
    name,
    placeholder,
  } = props;

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
    default:
      return (
        <Text
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
        />
      );
  }
};

export default InputType;
