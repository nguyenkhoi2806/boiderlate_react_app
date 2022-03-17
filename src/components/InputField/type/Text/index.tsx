import { Input } from 'reactstrap';

interface TextProps {
  name: string;
  onChange: () => void;
  placeholder: string;
  value: string | number;
}

const Text = (props: TextProps) => {
  const { name, onChange, placeholder, value } = props;

  return (
    <Input
      name={name}
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Text;
