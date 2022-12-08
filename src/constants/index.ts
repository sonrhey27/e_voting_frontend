const currentUser = JSON.parse(localStorage.getItem('login'))

export const actions = {
  EDIT: 'edit',
  DELETE: 'delete',
  COUNTRY_ID: currentUser?.user?.country_id,
  REGION_ID: currentUser?.user?.region_id,
  MUNICIPALITY_ID: currentUser?.user?.municipality_id,
  USER_ID: currentUser?.user?.id,
  USER_TYPE: currentUser?.user?.user_type,
  ADMIN: 'admin',
  USER: 'user',
  DONE: 'done'
}