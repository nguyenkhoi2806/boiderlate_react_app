import { FormGroup, Input, Label } from 'reactstrap';

interface CheckboxProps {
  label: string;
  value: string | number;
  id: string;
  defaultValue: string | number;
  inline?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const { label, value, defaultValue, id, inline } = props;

  return (
    <FormGroup inline={inline}>
      <Input
        type="checkbox"
        value={value}
        id={id}
        checked={defaultValue === value}
      />
      <Label for={id}>{label}</Label>
    </FormGroup>
  );
};

Checkbox.defaultProps = {
  inline: false,
  defaultValue: '',
};

export default Checkbox;
