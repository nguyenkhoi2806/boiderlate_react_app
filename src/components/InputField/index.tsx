import InputFieldType from 'components/InputField/InputFieldType';
import { FormGroup, Label } from 'reactstrap';
interface InputFieldProps {
  onChange: (value: string | number | [] | boolean) => void;
  label?: string;
  classNameWrapper?: string;
}

const defaultProps = {
  label: '',
  classNameWrapper: '',
};

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
  const { label, classNameWrapper } = props;

  return (
    <FormGroup className={classNameWrapper}>
      {label && <Label>{label}</Label>}
      <InputFieldType {...props} />
    </FormGroup>
  );
};

InputField.defaultProps = defaultProps;

export default InputField;
