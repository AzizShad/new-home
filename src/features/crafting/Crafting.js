import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../Components';
import {
  disableItem,
  createTool
} from './craftingSlice';
import {
  resourceModifiers
} from '../resource/ResourceTypes';
import {
  removeResources,
  addModifiers,
  checkResourceRequirements
} from '../inventory/inventorySlice';

const CraftingButton = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const { inventory } = useSelector(state => state);

  const createSubTitleRequirements = (item) => {
    const requirementsArray = [];
    Object.keys(item.requirements).forEach(requirement => {
      requirementsArray.push(`${item.requirements[requirement]} ${requirement}`)
    });
    if (!requirementsArray.length) {
      return;
    }
    return `Cost: ${requirementsArray.join(', ')}`;
  };

  const createSubTitleModifiers = (item) => {
    const effectedResourcesArray = [];
    const modifier = resourceModifiers.get(item.modifiers[0]);
    Object.keys(item.effectedResources).forEach(resource => {
      effectedResourcesArray.push(`${item.effectedResources[resource]}`)
    });
    return `${modifier.modifierDescription} ${effectedResourcesArray.join(', ')}`;
  };

  const isCraftingItemEnabled = (item, inventory) => {
    const { requirements } = item;
    let hasRequirements = true;
    for (let resourceId in requirements) {
      const resource = inventory[resourceId];
      if (resource.amount < requirements[resourceId]) {
        hasRequirements = false;
      }
    }
    return hasRequirements;
  };

  const clickHandler = () => {
    dispatch(removeResources({ requirements: item.requirements }));
    dispatch(disableItem({ craftingId: item.key }));
    setTimeout(() => {
      dispatch(createTool({ craftingId: item.key }));
      dispatch(addModifiers({
        effectedResources: item.effectedResources,
        modifiers: item.modifiers
      }));
      dispatch(checkResourceRequirements({ craftingId: item.key }));
    }, item.timeout * 1000);
  };

  return (
    <Button
      title={`Craft ${item.desc}`}
      modifiers={createSubTitleModifiers(item)}
      requirements={createSubTitleRequirements(item)}
      enabled={item.enabled}
      timeout={item.timeout}
      onClick={clickHandler}
      hasRequirements={isCraftingItemEnabled(item, inventory)}
    >
    </Button >
  );
}

export {
  CraftingButton
}
