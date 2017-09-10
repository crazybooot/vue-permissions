import  * as types from './types';

export default {
        [types.mutations.REGISTER_PERMISSION]: (state, permission) => {
            state.permissions.push(permission);
        },
        [types.mutations.RESOLVE_PERMISSION]: (state, payload) => {
            //@todo maybe use getter to get permission
            let permission = state.permissions.find(permission => {
                return permission.model === payload.model && permission.action === payload.action && permission.id === payload.id;
            });
            if (undefined !== permission) {
                permission.can = payload.can;
                permission.resolvedAt = payload.resolvedAt;
            }
        }
}