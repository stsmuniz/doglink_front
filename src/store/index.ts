import { createStore } from 'vuex'
import {getProfile} from "@/service/ProfileService";
import {getBoringAvatar} from "@/service/BoringAvatarService";
import router from "@/router";

export default createStore({
    state: {
        profile: null,
        profile_picture: '',
        primaryColor: '',
        secondaryColor: '',
        backgroundColor: '',
        textColor: '',
        slug: '',
        username: '',
        title: '',
        tagline: '',
        socialNetworks: [],
        youtubeEmbed: 'https://google.com',
        spotifyEmbed: 'https://google.com',
        sections: [],
        success: false
    },
    mutations: {
        SET_DATA(state, data) {
            state.success = true;
            const sections = data.sections;
            state.primaryColor = data.primary_color;
            state.secondaryColor = data.secondary_color;
            state.profile_picture = data.profile_pic ?
                data.profile_pic : '@/assets/images/Portrait_Placeholder.png'
                ;
            state.backgroundColor = data.background_color;
            state.textColor = data.text_color;
            state.username = data.custom_url;
            state.title = data.title;
            state.tagline = data.tagline;
            state.sections = sections;
            state.socialNetworks = data.social_networks;
        },
        SET_SLUG(state, data) {
            state.slug = data
        }
    },
    actions: {
        fetchData({ commit, state }) {
            getProfile(state.slug)
                .then(
                    (response) => commit("SET_DATA", response.data.data)
                ).catch(e => {
                    router.push('error404');
            })
        }
    },
    getters: {
    },
    modules: {
    }
})
