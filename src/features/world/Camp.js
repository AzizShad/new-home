import { useSelector } from 'react-redux';
import { CraftingButton } from '../crafting/Crafting';

const Camp = (props) => {
  const { crafting } = useSelector(state => state);
  const craftableItems = [];
  for (let key in crafting) {
    if (crafting[key].craftable) {
      craftableItems.push(crafting[key]);
    }
  }

  return (
    <div>
      {
        craftableItems.map((item) => {
          return (
            <CraftingButton
              key={item.key}
              item={item}
            >
            </CraftingButton>
          );
        })
      }
    </div>
  )
}

export default Camp;