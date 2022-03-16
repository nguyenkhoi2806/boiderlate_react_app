import { FormGroup, Label } from 'reactstrap';

import Checkbox from '../Checkbox';

interface CheckboxGroupProps {
  classNameWrapper: string;
  label: string;
  defaultValue: string | number;
  options: { value: string | number; label: string }[];
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { label, defaultValue, options, classNameWrapper } = props;

  return (
    <FormGroup className={classNameWrapper}>
      <Label>{label}</Label>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          value={option.value}
          label={option.label}
          defaultValue={defaultValue}
          id={`${option.value}_${index}`}
        />
      ))}
    </FormGroup>
  );
};

CheckboxGroup.defaultProps = {
  classNameWrapper: '',
  label: '',
  defaultValue: '',
  options: [],
};

export default CheckboxGroup;
