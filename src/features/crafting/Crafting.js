import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../Components';
import {
  disableItem,
  createTool
} from './craftingSlice';
import {
  removeResources,
  addModifiers,
  checkResourceRequirements
} from '../inventory/inventorySlice';

const CraftingButton = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const { inventory, crafting } = useSelector(state => state);

  const createSubTitle = (item) => {
    const requirementsArray = [];
    Object.keys(item.requirements).forEach(requirement => {
      requirementsArray.push(`${item.requirements[requirement]} ${requirement}`)
    });
    if (!requirementsArray.length) {
      return;
    }
    return `Cost: ${requirementsArray.join(', ')}`;
  };
  
  const isCraftingItemEnabled = (item, inventory) => {
    const { enabled, requirements } = item;
    let hasRequirements = true;
    for (let resourceId in requirements) {
      const resource = inventory[resourceId];
      if (resource.amount < requirements[resourceId]) {
        hasRequirements = false;
      }
    }
    return hasRequirements && enabled;
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
      dispatch(checkResourceRequirements({ crafting: crafting }));
    }, item.timeout * 1000);
  };

  return (
    <Button
      title={`Craft ${item.desc}`}
      subtitle={createSubTitle(item)}
      enabled={isCraftingItemEnabled(item, inventory)}
      timeout={item.timeout}
      onClick={clickHandler}
    >
    </Button>
  );
}

export {
  CraftingButton
}
