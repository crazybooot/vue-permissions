import * as types from './../store/modules/types';

export default {
    methods: {
        resolvePermissions(filter) {
            //@todo is this necessary here?
            Vue.nextTick(() => {
                this.$store.dispatch(types.actions.RESOLVE_PERMISSIONS, filter);
            })
        },
    }
}