import './loading.scss';

import { Container } from 'reactstrap';

interface LoadingProps {
  withContainer: boolean;
}

const Loading = (props: LoadingProps) => {
  const { withContainer } = props;

  const buildLoader = () => {
    return (
      <div className="loader">
        <div className="loader__spinner" />
      </div>
    );
  };

  if (withContainer) {
    return (
      <Container>
        <div className="loader__spinner">{buildLoader()}</div>
      </Container>
    );
  }

  return buildLoader();
};

Loading.defaultProps = {
  withContainer: false,
};

export default Loading;
