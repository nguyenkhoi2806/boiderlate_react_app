import { FormGroup, Label } from 'reactstrap';

import Radio from '../Radio';

interface RadioGroupProps {
  onChange: () => void;
  classNameWrapper: string;
  label: string;
  defaultValue: string | number;
  options: { value: string | number; label: string }[];
  name: string;
}

const RadioGroup = (props: RadioGroupProps) => {
  const { label, defaultValue, options, classNameWrapper, name, onChange } =
    props;

  return (
    <FormGroup className={classNameWrapper}>
      <Label>{label}</Label>
      {options.map((option, index) => (
        <Radio
          key={index}
          value={option.value}
          label={option.label}
          defaultValue={defaultValue}
          name={`${name}`}
          onChange={onChange}
        />
      ))}
    </FormGroup>
  );
};

RadioGroup.defaultProps = {
  classNameWrapper: '',
  label: '',
  defaultValue: '',
  options: [],
  name: '',
};

export default RadioGroup;
