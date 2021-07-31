import VueJwtDecode from 'vue-jwt-decode'

export default function(token) {

    return VueJwtDecode.decode(token);
    
}