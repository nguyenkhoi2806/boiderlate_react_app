import { FormGroup, Input, Label } from 'reactstrap';

interface CheckboxProps {
  onChange: () => void;
  label: string;
  value: string | number;
  id: string;
  checked?: boolean;
  inline?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const { label, value, checked, id, inline, onChange } = props;

  return (
    <FormGroup inline={inline}>
      <Input
        type="checkbox"
        value={value}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <Label for={id}>{label}</Label>
    </FormGroup>
  );
};

Checkbox.defaultProps = {
  inline: false,
  defaultValue: '',
  checked: false,
};

export default Checkbox;
