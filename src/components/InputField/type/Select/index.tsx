import { Input } from 'reactstrap';

interface SelectProps {
  value: string | number;
  options: { value: string | number; label: string }[];
  onChange: () => void;
  name: string;
}

const Select = (props: SelectProps) => {
  const { value, options, onChange, name } = props;

  return (
    <Input name={name} type="select" onChange={onChange}>
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          selected={value === option.value}>
          {option.label}
        </option>
      ))}
    </Input>
  );
};

Select.defaultProps = {
  classNameWrapper: '',
  label: '',
  value: '',
  options: [],
  name: '',
};

export default Select;
