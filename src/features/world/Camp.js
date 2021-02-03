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

  let craftingItems = [<div>Nothing to craft yet...</div>];
  if (craftableItems.length) {
    craftingItems = [<div className="title">Crafting Bench</div>];
    craftingItems.push(craftableItems.map((item) => {
      return (
        <CraftingButton
          key={item.key}
          item={item}
        >
        </CraftingButton>
      );
    }));
  }

  return (
    <div>
      {craftingItems}
    </div>
  )
}

export default Camp;