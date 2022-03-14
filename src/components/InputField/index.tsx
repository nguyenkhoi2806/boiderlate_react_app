import { FormGroup, Input, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';

interface InputFieldProps {
  label: string;
  onChange: () => void;
  classNameWrapper: string;
  placeholder: string;
  type: InputType;
  name: string;
}

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
  const { label, onChange, classNameWrapper, placeholder, type, name } = props;

  return (
    <FormGroup className={classNameWrapper}>
      {label && <Label>{label}</Label>}
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </FormGroup>
  );
};

export default InputField;
