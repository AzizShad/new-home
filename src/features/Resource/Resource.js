import { connect } from 'react-redux';
import { Button } from '../../Components';
import {
  addResource,
  enableResource,
  disableResource
} from '../inventory/inventorySlice';

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    name: `Gather ${ownProps.resource.desc}: ${ownProps.resource.amount}`,
    enabled: ownProps.resource.enabled,
    timeout: ownProps.resource.timeout
  };
};
const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(disableResource({ resourceId: ownProps.resource.key }));
      setTimeout(() => {
        dispatch(enableResource({ resourceId: ownProps.resource.key }));
      }, ownProps.resource.timeout * 1000)
      dispatch(addResource({ resourceId: ownProps.resource.key }));
    }
  };
}
const ResourceButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export {
  ResourceButton
}