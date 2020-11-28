import {server_back} from './local_config';

const config = {
    USER_ID                                 : window.localStorage.getItem('user_id'),
    // USER_NAME                               : window.localStorage.getItem('user_name'),
    // USER_EMAIL                              : window.localStorage.getItem('user_email'),
    // TOKEN                                   : window.localStorage.getItem('token'),
    // AUTHORIZATION_TOKEN                     : window.localStorage.getItem('authorizationToken'),
    // DOWNLOAD_URL                            : window.localStorage.getItem('downloadUrl'),
    // USER_ROLES                              : window.localStorage.getItem('user_role'),
    // CURRENT_USER                            : window.localStorage.getItem('current_user'),
    Login                                   : server_back+'user/login/',
    // PRESS_PUB_LANG_LIST                     : server_back+'press_publication/languages/',
    DisplayDetails                          : server_back+'user/details_display/'
}
export default config;