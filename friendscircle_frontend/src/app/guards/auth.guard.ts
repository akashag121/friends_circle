import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let currentuserrole = localStorage.getItem('currentuserrole');
  if(currentuserrole === 'NormalUser'){
    return false;
  }
  return true;
};
