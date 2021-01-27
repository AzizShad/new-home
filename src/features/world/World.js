import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ResourceButton } from '../resource/Resource';
import { CraftingButton } from '../crafting/Crafting';


const World = () => {
  const state = useSelector(state => state);
  const inventory = useSelector(state => state.inventory);
  const availableResources = [];
  for (let key in inventory) {
    if(inventory[key].available){
      availableResources.push(inventory[key]);
    }
  }

  const crafting = useSelector(state => state.crafting);
  const craftableItems = [];
  for (let key in crafting) {
    if(crafting[key].craftable){
      craftableItems.push(crafting[key]);
    }
  }
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  })
  return (
    <div date-id="world">
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
    </div >
  );
};


World.propTypes = {
  state: PropTypes.object,
  inventory: PropTypes.shape({
    key: PropTypes.string,
    desc: PropTypes.string,
  }),
};

export default World;
