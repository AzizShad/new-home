import { useSelector } from 'react-redux';
import { ResourceButton } from '../resource/Resource';

const Woods = (props) => {
  const { inventory } = useSelector(state => state);
  const availableResources = [];
  for (let key in inventory) {
    if (inventory[key].available) {
      availableResources.push(inventory[key]);
    }
  }

  return (
    <div>
      {
        availableResources.map((resource) => {
          return (
            <ResourceButton
              key={resource.key}
              resource={resource}
            >
            </ResourceButton>
          );
        })
      }
    </div>
  )
}

export default Woods;