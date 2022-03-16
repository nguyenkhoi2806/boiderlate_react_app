import Checkbox from '../Checkbox';

interface CheckboxGroupProps {
  onChange: () => void;
  checked: boolean;
  options: { value: string | number; label: string }[];
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { checked, options, onChange } = props;

  return (
    <>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          value={option.value}
          label={option.label}
          checked={checked}
          id={`${option.value}_${index}`}
          onChange={onChange}
        />
      ))}
    </>
  );
};

CheckboxGroup.defaultProps = {
  classNameWrapper: '',
  label: '',
  defaultValue: '',
  options: [],
};

export default CheckboxGroup;
