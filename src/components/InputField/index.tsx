import { FormGroup, Input, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';

interface InputFieldProps {
  onChange: (value: string | number | [] | boolean) => void;
  type: InputType;
  label?: string;
  classNameWrapper?: string;
  placeholder?: string;
  name?: string;
}

const defaultProps = {
  label: '',
  classNameWrapper: '',
  placeholder: '',
  name: '',
};

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
  const { label, onChange, classNameWrapper, placeholder, type, name } = props;

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    return onChange(event.target.value);
  };

  return (
    <FormGroup className={classNameWrapper}>
      {label && <Label>{label}</Label>}
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChangeInput}
      />
    </FormGroup>
  );
};

InputField.defaultProps = defaultProps;

export default InputField;
