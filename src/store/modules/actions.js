import * as types from './types';

export default {
    [types.actions.REGISTER_PERMISSION]: ({commit, getters}, newPermission) => {
        let permission = getters[types.getters.GET_PERMISSION](newPermission);
        if (undefined === permission) {
            commit(types.mutations.REGISTER_PERMISSION, newPermission);
        }
    },
    [types.actions.RESOLVE_PERMISSIONS]: ({commit, getters}, filter) => {
        let permissions = getters[types.getters.GET_PERMISSIONS](filter);
        axios.post('/permissions', {permissions}).then(response => {
            response.data.permissions.forEach(permission => {
                commit(types.mutations.RESOLVE_PERMISSION, {
                    model: permission.model,
                    action: permission.action,
                    id: permission.id,
                    can: permission.can,
                    resolvedAt: permission.resolvedAt
                });
            });
        });
    }
}