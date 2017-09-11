import Permissions from './store/modules/index';
import Can from './components/Can.vue';
import Vuex from 'vuex';
import registerPermissionMethod from './mixins/registerPermissionMethod';
import resolvePermissionsMethod from './mixins/resolvePermissionsMethod';

export default function install(Vue, options = {}) {
    const moduleName = options.moduleName || 'permissions';
    //@todo add functionality to pass url to actions
    const url = options.url;
    //@todo check logic conditions
    const globalMethods = undefined === options.globalMethods || options.globalMethods;
    const globalComponent = undefined === options.globalComponent || options.globalComponent;
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

    if (globalComponent) {
        Vue.component('can', Can);
    }

    if (globalMethods) {
        Vue.mixin(registerPermissionMethod);
        Vue.mixin(resolvePermissionsMethod);
    }

    store.registerModule(moduleName, Permissions);
}