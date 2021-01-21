import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ResourceButton } from '../Resource/Resource';

const World = ({ state, inventory }) => {
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

const mapStateToProps = state => ({
  state: state,
  inventory: state.inventory
});

World.propTypes = {
  state: PropTypes.object,
  inventory: PropTypes.shape({
    key: PropTypes.string,
    desc: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(World);