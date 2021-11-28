import {server_back} from './local_config';
//always storn configration in this table in assending order
// It helps in mentaining order of urls
const config = {
    // USER_NAME                               : window.localStorage.getItem('user_name'),
    // USER_EMAIL                              : window.localStorage.getItem('user_email'),
    // TOKEN                                   : window.localStorage.getItem('token'),
    // AUTHORIZATION_TOKEN                     : window.localStorage.getItem('authorizationToken'),
    // DOWNLOAD_URL                            : window.localStorage.getItem('downloadUrl'),
    // USER_ROLES                              : window.localStorage.getItem('user_role'),
    // CURRENT_USER                            : window.localStorage.getItem('current_user'),
    
    CheckUserName                           : server_back+"users/check_username/",
    CreateUser                              : server_back+'users/create_user/',
    // PRESS_PUB_LANG_LIST                     : server_back+'press_publication/languages/',
    DisplayDetails                          : server_back+'users/details_display/',
    Login                                   : server_back+'users/login/',
    Logout                                  : server_back+'users/logout/'
    // USER_ID                                 : window.localStorage.getItem('user_id'),
}
export default config;