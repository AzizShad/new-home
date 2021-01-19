import React from 'react';
import { connect } from 'react-redux';
import { ResourceButton } from '../Resource/Resource';

let World = ({ state, inventory }) => {
  const inventoryElements = [];
  for (const resource in inventory) {
    inventoryElements.push(
      <ResourceButton
        key={resource}
        resource={inventory[resource]}>
      </ResourceButton>
    );
  }

  return (
    <div>
      {inventoryElements}
    </div >
  );
}
const mapStateToProps = state => ({
  state: state,
  inventory: state.inventory
});

World = connect(mapStateToProps)(World);

export {
  World
}