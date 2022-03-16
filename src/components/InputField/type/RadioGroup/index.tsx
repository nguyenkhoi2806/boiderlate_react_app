import Radio from '../Radio';

interface RadioGroupProps {
  onChange: () => void;
  checked: boolean;
  options: { value: string | number; label: string }[];
  name: string;
}

const RadioGroup = (props: RadioGroupProps) => {
  const { checked, options, name, onChange } = props;

  return (
    <>
      {options.map((option, index) => (
        <Radio
          key={index}
          value={option.value}
          label={option.label}
          checked={checked}
          name={`${name}`}
          onChange={onChange}
        />
      ))}
    </>
  );
};

RadioGroup.defaultProps = {
  label: '',
  defaultValue: '',
  options: [],
  name: '',
};

export default RadioGroup;
