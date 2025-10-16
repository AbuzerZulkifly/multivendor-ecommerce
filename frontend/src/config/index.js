export const signupFormControl = [ 

  {
  name: 'username',
  label: 'Username',
  type: 'text',
  placeholder: 'Enter your Username',
  required: true,
  componentType: 'Input',
  },

  {
  name: 'email',
  label: 'Email',
  type: 'email',
  placeholder: 'Enter your Email',
  required: true,
  componentType: 'Input',
  },

  {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your Password',
  required: true,
  componentType: 'Input',
  },

]

export const loginFormControl = [ 

  {
  name: 'email',
  label: 'Email',
  type: 'email',
  placeholder: 'Enter your Email',
  required: true,
  componentType: 'Input',
  },

  {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your Password',
  required: true,
  componentType: 'Input',
  },

]



import {LuLayoutDashboard, LuShoppingCart, LuGift, LuHandHelping} from 'react-icons/lu'

export const adminSideMenuItems = [
  {
    id: "1",
    icon: LuLayoutDashboard,
    title: "Home",
    path: "dashboard"
  },
  
  {
    id: "2",
    icon: LuShoppingCart,
    title: "Orders",
    path: "orders"
  },
  {
    id: "3",
    icon: LuGift,
    title: "Products",
    path: "products"
  },
  {
    id: "4",
    icon: LuHandHelping,
    title: "Features",
    path: "features"
  },
]