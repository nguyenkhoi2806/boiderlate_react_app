import { CHECKBOX, CHECKBOX_GROUP, SELECT } from 'constants/FieldType';
import { Input, Label } from 'reactstrap';

interface InputFieldTypeProps {
  onChange: (value: string | number | [] | boolean) => void;
  options: { value: string | number; label: string }[];
  type: string;
  placeholder?: string;
  name?: string;
  labelCheckbox: string;
}

const defaultProps = {
  type: 'text',
  placeholder: '',
  labelCheckbox: '',
};

const InputFieldType = (props: InputFieldTypeProps) => {
  const { type, placeholder, name, onChange, options, labelCheckbox } = props;

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    return onChange(event.target.value);
  };

  switch (type) {
    case CHECKBOX_GROUP:
      return (
        <>
          {options.map((option) => (
            <>
              <Input type="checkbox" value={option.value} />
              <Label check>{option.label}</Label>
            </>
          ))}
        </>
      );
    case CHECKBOX:
      return (
        <>
          <Input type="checkbox" />
          <Label check>{labelCheckbox}</Label>
        </>
      );
    case SELECT:
      return (
        <Input name={name} type="select" onChange={onChangeInput}>
          {options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
      );
    default:
      <Input
        name={name}
        placeholder={placeholder}
        type="text"
        onChange={onChangeInput}
      />;
  }
};

InputFieldType.defaultProps = defaultProps;

export default InputFieldType;
