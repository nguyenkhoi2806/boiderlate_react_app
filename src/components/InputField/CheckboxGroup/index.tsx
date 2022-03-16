import Checkbox from '../Checkbox';

interface CheckboxGroupProps {
  onChange: () => void;
  defaultValue: string | number;
  options: { value: string | number; label: string }[];
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { defaultValue, options, onChange } = props;

  return (
    <>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          value={option.value}
          label={option.label}
          defaultValue={defaultValue}
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
