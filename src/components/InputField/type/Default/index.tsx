import { Input } from 'reactstrap';

interface DefaultProps {
  name: string;
  type: string;
  onChange: () => void;
  placeholder: string;
  value: string | number;
}

const Default = (props: DefaultProps) => {
  const { name, type, onChange, placeholder, value } = props;
  return (
    <Input
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Default;
