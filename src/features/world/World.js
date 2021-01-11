import React from 'react';
import { useDispatch } from 'react-redux';

// import {
  // setInventory
// } from '../village/villageSlice';
import {
  addResource
} from '../inventory/inventorySlice';
import styles from './World.module.css';

export function World() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={styles.loadingButton}
        onClick={() => dispatch(addResource({ resourceId: 'wood' }))}
      >
        Add Wood
        </button>
    </div >
  );
}
