import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ResourceButton } from '../resource/Resource';

const World = () => {
  const state = useSelector(state => state);
  const inventory = useSelector(state => state.inventory);
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  })
  return (
    <div date-id="world">
      {
        Object.values(inventory).map((resource) => {
          return (
            <ResourceButton
              key={resource.key}
              resource={resource}>
            </ResourceButton>
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
