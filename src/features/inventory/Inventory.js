// import { connect } from 'react-redux'

// const mapStateToProps = (
//   state
// ) => {
//   return {
//     todos: getVillageInventory(
//       state.villages,
//       state.currentVillageId || 0
//     )
//   };
// };

// const mapDispatchToProps = (
//   dispatch
// ) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(addResource({
//         villageId: 0,
//         resourceId: id
//       }));
//     }
//   };
// };

// const Inventory = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )();


export const resourceList = {};
createResourceEntry('wood', 'Wood');
createResourceEntry('rock', 'Rock');

function createResourceEntry(key, desc, amount = 0, requirements, modifiers = []) {
  resourceList[key] = {
    key: key,
    desc: desc,
    amount: amount,
    requirements: requirements,
    modifiers: modifiers
  };
}
