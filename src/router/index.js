import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutUs from '@/components/AboutUs'
import Millets from '@/components/Millets'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/millets',
      name: 'Millets',
      component: Millets
    },
    {
      path : '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

// export default new Router({  
//   routes: [    
//     {      
//       path: '/',      
//       name: 'home',      
//       component: home    
//     },    
//     {      
//       path: '/blog',      
//       name: 'blog',      
//       component: blog    
//     },    
//     {      
//       path: '/services',      
//       name: 'services',      
//       component: services    
//     },    
//     {      
//       path: '/contact',      
//       name: 'contact',     
//       component: contact    
//     }  
//   ]
// })