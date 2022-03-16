import { FormGroup, Input, Label } from 'reactstrap';

interface RadioProps {
  label: string;
  value: string | number;
  name: string;
  defaultValue: string | number;
  inline: boolean;
}

const Radio = (props: RadioProps) => {
  const { label, value, defaultValue, name, inline } = props;

  return (
    <FormGroup inline={inline}>
      <Input
        type="radio"
        value={value}
        name={name}
        checked={defaultValue === value}
      />
      <Label for={`${name}_${value}`}>{label}</Label>
    </FormGroup>
  );
};

Radio.defaultProps = {
  inline: false,
  defaultValue: '',
};

export default Radio;
