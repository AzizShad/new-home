import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { TabPanel, Tab } from '../../Components';
import Woods from "./Woods";
import Camp from "./Camp";
import Trader from "./Trader";
import './World.css';

const World = () => {
  const state = useSelector(state => state);
  const [activeTabKey, setactiveTab] = useState('woods');

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  })

  const places = {
    woods: {
      description: "Woods",
      html: <Woods></Woods>
    },
    camp: {
      description: "Camp",
      html: <Camp></Camp>
    },
    trader: {
      description: "Trader",
      html: <Trader></Trader>
    }
  };

  const tabs = Object.keys(places).map(placeKey => {
    return (
      <Tab
        active={placeKey === activeTabKey}
        clickEvent={() => setactiveTab(placeKey)}
        description={places[placeKey].description}
      ></Tab>
    )
  });

  return (
    <div>
      <TabPanel>
        {tabs}
      </TabPanel>
      <div className='World' date-id='world'>
        {
          places[activeTabKey].html
        }
      </div >
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
