import { connect } from 'react-redux';
import { Button } from '../../Components';
import {
  disableItem,
  createTool
} from './craftingSlice';
import {
  removeResources,
  addModifiers
} from '../inventory/inventorySlice';

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    name: `Craft ${ownProps.crafting.desc}`,
    enabled: ownProps.crafting.enabled,
    timeout: ownProps.crafting.timeout
  };
};
const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(removeResources({ requirements: ownProps.crafting.requirements }));
      dispatch(disableItem({ craftingId: ownProps.crafting.key }));
      setTimeout(() => {
        dispatch(createTool({ craftingId: ownProps.crafting.key }));
        dispatch(addModifiers({ 
          effectedResources: ownProps.crafting.effectedResources,
          modifiers: ownProps.crafting.modifiers
         }));
      }, ownProps.crafting.timeout * 1000)
    }
  };
}
const CraftingButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export {
  CraftingButton
}
