
import homePage from './home/homePage.vue';
import adminPage from './admin/adminPage.vue';


export const routes=[{
  path:'/', component: homePage, 
  mnuItem:{ faIco:'fas fa-home', label:"Home" }
},{
  path:'/admin', component: adminPage,
  mnuItem:{ faIco:'fas fa-users', label:"Admin" }
}];