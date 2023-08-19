import { CanActivateFn } from '@angular/router';

export const isactiveGuard: CanActivateFn = (route, state) => {
  let isActive = localStorage.getItem('currentuserIsActive');
  if(isActive === 'true'){
    return true;
  }
  return false;
};
