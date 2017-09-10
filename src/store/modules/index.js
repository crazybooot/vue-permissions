import mutations from './mutations';
import actions from './actions';
import getters from  './getters';

const permissions = {
    //@todo use namespaced option
    // namespaced: true,
    state: {
        permissions: []
    },
    mutations,
    actions,
    getters
};

export default permissions;