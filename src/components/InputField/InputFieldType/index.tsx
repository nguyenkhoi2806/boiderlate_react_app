import {
  CHECKBOX,
  CHECKBOX_GROUP,
  RADIO,
  RADIO_GROUP,
  SELECT,
} from 'constants/FieldType';
import { Input, Label } from 'reactstrap';

interface InputFieldTypeProps {
  onChange: (value: string | number | [] | boolean) => void;
  type: string;
  options?: { value: string | number; label: string }[];
  placeholder?: string;
  name?: string;
  labelInput?: string;
}

const defaultProps = {
  type: 'text',
  placeholder: '',
  labelInput: '',
};

const InputFieldType = (props: InputFieldTypeProps) => {
  const { type, placeholder, name, onChange, options, labelInput } = props;

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    return onChange(event.target.value);
  };

  switch (type) {
    case RADIO:
      return (
        <>
          <Input type="radio" />
          <Label check>{labelInput}</Label>
        </>
      );
    case RADIO_GROUP:
      return (
        <>
          {options &&
            options.map((option) => (
              <>
                <Input type="radio" value={option.value} />
                <Label check>{option.label}</Label>
              </>
            ))}
        </>
      );
    case CHECKBOX_GROUP:
      return (
        <>
          {options &&
            options.map((option) => (
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
          <Label check>{labelInput}</Label>
        </>
      );
    case SELECT:
      return (
        <Input name={name} type="select" onChange={onChangeInput}>
          {options &&
            options.map((option, key) => (
              <option key={key} value={option.value}>
                {option.label}
              </option>
            ))}
        </Input>
      );
    default:
      return (
        <Input
          name={name}
          placeholder={placeholder}
          type="text"
          onChange={onChangeInput}
        />
      );
  }
};

InputFieldType.defaultProps = defaultProps;

export default InputFieldType;
