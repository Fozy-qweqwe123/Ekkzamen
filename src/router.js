import { createRouter, createWebHashHistory } from "vue-router";


import postview from "@/views/v-post-view.vue"
import vReviews from '@/components/v-reviews.vue';
import Vform from '@/components/v-form.vue';
import vUser from '@/components/v-user.vue';
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Vform},
        {path: '/post', component: postview},
       {path: '/user', component: vUser},
        {path: '/Reviews', component: vReviews},
    ]
})