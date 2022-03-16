import { Input } from 'reactstrap';

interface SelectProps {
  defaultValue: string | number;
  options: { value: string | number; label: string }[];
  onChange: () => void;
  name: string;
}

const Select = (props: SelectProps) => {
  const { defaultValue, options, onChange, name } = props;

  return (
    <Input name={name} type="select" onChange={onChange}>
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          selected={defaultValue === option.value}>
          {option.label}
        </option>
      ))}
    </Input>
  );
};

Select.defaultProps = {
  classNameWrapper: '',
  label: '',
  defaultValue: '',
  options: [],
  name: '',
};

export default Select;
