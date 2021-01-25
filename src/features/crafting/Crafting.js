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

const createSubTitle = (crafting) => {
  const requirementsArray = [];
  Object.keys(crafting.requirements).forEach(requirement => {
    requirementsArray.push(`${crafting.requirements[requirement]} ${requirement}`)
  });
  if (!requirementsArray.length) {
    return;
  }
  return `Cost: ${requirementsArray.join(', ')}`;
};

const isCraftingItemEnabled = (crafting, inventory) => {
  const { enabled, requirements } = crafting;
  let hasRequirements = true;
  for (let resourceId in requirements) {
    const resource = inventory[resourceId];
    if (resource.amount < requirements[resourceId]) {
      hasRequirements = false;
    }
  }
  return hasRequirements && enabled;
};

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    title: `Craft ${ownProps.crafting.desc}`,
    subtitle: createSubTitle(ownProps.crafting),
    enabled: isCraftingItemEnabled(ownProps.crafting, ownProps.inventory),
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
