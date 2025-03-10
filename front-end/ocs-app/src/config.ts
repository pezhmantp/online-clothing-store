import { UserManager, WebStorageStateStore } from 'oidc-client-ts';
import { useNavigate } from 'react-router';

export const userManager = new UserManager({
  authority: 'http://localhost:8079/realms/OCS-realm',
  client_id: 'ocs-client',
  redirect_uri: 'http://localhost:3000/',
  response_type: 'code',
  post_logout_redirect_uri: window.location.origin
});

export const onSigninCallback = () => {    
 window.history.replaceState({}, document.title, "/");
  window.location.href=window.location.origin + window.location.pathname;
};