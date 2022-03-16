import { FormGroup, Input, Label } from 'reactstrap';

interface RadioProps {
  onChange: () => void;
  label: string;
  value: string | number;
  name: string;
  checked?: boolean;
  inline: boolean;
}

const Radio = (props: RadioProps) => {
  const { label, value, checked, name, inline, onChange } = props;

  return (
    <FormGroup inline={inline}>
      <Input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <Label for={`${name}_${value}`}>{label}</Label>
    </FormGroup>
  );
};

Radio.defaultProps = {
  inline: false,
  defaultValue: '',
  checked: false,
};

export default Radio;
