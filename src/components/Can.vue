<template>
    <div v-bind:class="classes" v-bind:style="styles">
        <slot v-if="can"></slot>
        <slot name="cannot" v-else></slot>
    </div>
</template>

<script>
    import registerPermissionMethod from './../mixins/registerPermissionMethod';
    import * as types from './../store/modules/types';

    export default {
        mixins: [
            registerPermissionMethod
        ],
        props: {
            model: {
                type: String,
                required: true
            },
            action: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: false,
                default: null
            },
            initial: {
                type: Boolean,
                required: false,
                default: true
            },
            classes: {
                type: Object,
                required: false,
                default: () => {
                }
            },
            styles: {
                type: Object,
                required: false,
                default: () => {
                }
            },
            callback: {
                type: Function,
                required: false
            }
        },
        data() {
            return {
                permission: {}
            };
        },
        created() {
            //@todo add functionality to resolve permission by callback
            //@todo add functionality to replace wrapper html element
            this.permission = {
                model: this.model,
                action: this.action,
                id: this.id,
                can: this.initial
            };
            this.registerPermission(this.permission);
        },
        computed: {
            //@todo find the way to use map getters helper with passing params
            can() {
                return this.$store.getters[types.getters.GET_PERMISSION](this.permission).can;
            }
        },
    }
</script>
