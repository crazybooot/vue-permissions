import * as types from './../store/modules/types';

export default {
    methods: {
        registerPermission(permission) {
            this.$store.dispatch(types.actions.REGISTER_PERMISSION, permission);
        }
    }
}