import  * as types from './types';

export default {
    [types.getters.GET_PERMISSIONS]: (state, getters) => (filter) => {
        //@todo refactor this shit
        return state.permissions.filter((permission) => {
            if (undefined !== filter.model && undefined !== filter.action && undefined !== filter.id) {
                return permission.model === filter.model && permission.action === filter.action && permission.id === filter.id;
            }
            if (undefined !== filter.model && undefined !== filter.action) {
                return permission.model === filter.model && permission.action === filter.action;
            }
            if (undefined !== filter.model && undefined !== filter.id) {
                return permission.model === filter.model && permission.id === filter.id;
            }
            if (undefined !== filter.action && undefined !== filter.id) {
                return permission.action === filter.action && permission.id === filter.id;
            }
            if (undefined !== filter.model) {
                return permission.model === filter.model;
            }
            if (undefined !== filter.action) {
                return permission.action === filter.action;
            }
            if (undefined !== filter.id) {
                return permission.id === filter.id;
            }

            return true;
        });
    },
    [types.getters.GET_PERMISSION]: (state, getters) => (filter) => {
        return state.permissions.find(permission => {
            return permission.model === filter.model && permission.action === filter.action && permission.id === filter.id;
        });
    }
}