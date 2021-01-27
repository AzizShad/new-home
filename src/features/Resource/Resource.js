import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../Components';
import {
  addResource,
  enableResource,
  disableResource,
  checkResourceRequirements
} from '../inventory/inventorySlice';
import {
  checkCraftingRequirements
} from '../crafting/craftingSlice';


const ResourceButton = (props) => {
  const dispatch = useDispatch();
  const resource = props.resource;

  const { inventory, crafting } = useSelector(state => state);

  const clickHandler = () => {
    dispatch(disableResource({ resourceId: resource.key }));
    setTimeout(() => {
      dispatch(addResource({ resourceId: resource.key }));
      dispatch(enableResource({ resourceId: resource.key }));
      setTimeout(() => {
        dispatch(checkCraftingRequirements({ inventory: inventory }));
        dispatch(checkResourceRequirements({ crafting: crafting }));
      });
    }, resource.timeout * 1000);
  };

  return (
    <Button
      title={`Gather ${resource.desc}: ${resource.amount}`}
      enabled={resource.enabled}
      timeout={resource.timeout}
      onClick={clickHandler}
    >
    </Button>
  );
}

export {
  ResourceButton
}
