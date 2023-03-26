import { createRouter, createWebHashHistory } from "vue-router";

import servicesview from "@/views/v-services-view.vue";
import postview from "@/views/v-post-view.vue"
import vReviews from '@/components/v-reviews.vue';
import Vform from '@/components/v-form.vue';
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Vform},
        {path: '/post', component: postview},
        {path: '/Services', component: servicesview},
        {path: '/Reviews', component: vReviews},
    ]
})