// @flow
import * as React from 'react';
import styled from 'styled-components';
import DeleteIcon from 'react-icons/lib/md/delete';
import Tooltip from 'common/components/Tooltip';

const DeleteSandboxButton = styled(props => (
  <Tooltip title="Delete Sandbox">
    <button {...props}>
      <DeleteIcon />
    </button>
  </Tooltip>
))`
  font-size: 1.2em;
  background-color: inherit;
  border: none;
  padding: 5px 6px 9px 6px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

type Props = {
  onDelete: Function,
  id: string,
};

export default class DeleteSandboxButtonContainer extends React.PureComponent<
  Props
> {
  deleteSandbox = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { onDelete, ...props } = this.props;
    return <DeleteSandboxButton {...props} onClick={this.deleteSandbox} />;
  }
}
