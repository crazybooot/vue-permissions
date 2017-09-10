import Permissions from './store/modules/index';
import * as types from './store/modules/types';
import Can from './components/Can.vue';
import Vuex from 'vuex';
import Vue from 'vue';

export default function install(Vue, options = {}) {
    const moduleName = options.moduleName || 'permissions';
    //@todo add functionality to pass url to actions
    const url = options.url;
    let store = options.store;

    if (!store) {
        if (options.stubStore) {
            Vue.use(Vuex);
            store = new Vuex.Store({});
            Vue.prototype.$store = store;
        } else {
            throw new Error('Store is required!');
        }
    }

    Vue.component('can', Can);
    Vue.mixin({
        methods: {
            resolvePermissions(filter) {
                this.$store.dispatch(types.actions.RESOLVE_PERMISSIONS, filter);
            },
            registerPermission(permission) {
                this.$store.dispatch(types.actions.REGISTER_PERMISSION, permission);
            }
        }
    });

    store.registerModule(moduleName, Permissions);
}