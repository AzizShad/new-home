let keys = {};

function resourceId(key, desc) {
  keys[key] = {
    key: key,
    desc: desc
  };
}

resourceId('branch', 'branch');


export default keys;