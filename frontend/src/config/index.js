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



import { Label } from '@radix-ui/react-label'
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

export const addNewProductFormElements = [
  {
    label: "Title",
    name: "title",
    placeholder: "Enter Product Title",
    type: "text",
    componentType: "Input",
    required: true
  },

  {
    label: "Keywords to Search Your Product",
    name: "keyword",
    placeholder: "Enter some necessary keywords",
    type: "",
    componentType: "Textarea",
    required: true
  },
  
  {
    label: "Description",
    name: "description",
    placeholder: "Enter a Brief Description About the Product",
    type: "",
    componentType: "Textarea",
    required: true
  },
  {
    label: "Category",
    name: "category",
    placeholder: "Select Category",
    type: "",
    componentType: "Select",
    required: true,
    options: [
      {id:"men", label: "For Mens"},
      {id:"women", label: "For Womens"},
      {id:"kids", label: "For Kids"},
      {id:"sports&outdoor", label: "Sports and Outdoor"},
      {id:"health&beauty", label: "Health and Beauty"},
      {id:"electronic", label: "Electronic Devices"},
      {id:"accessories", label: "Electronic Accessories"},
      {id:"groceries&pets", label: "Groceries and Pets"},
      {id:"vehicle", label: "Vehicle"},
      {id:"home&garden", label: "Home and Garden"},
    ]

    
  },
  {
    label: "Brand",
    name: "brand",
    placeholder: "Select Brand",
    type: "",
    componentType: "Select",
    required: true,
    options: [

    ]
  },

  {
    label: "Condition",
    name: "condition",
    placeholder: "Select Condition",
    type: "",
    options: [
      {id: "new", label: "Brand New"},
      {id: "used", label: "Used"},
    ],
    componentType: "Select",
    required: true
  },
  {
    label: "Price",
    name: "price",
    placeholder: "Enter Product Price",
    type: "number",
    componentType: "Input",
    required: true
  },
  {
    label: "Discount Price (optional)",
    name: "discount_price",
    placeholder: "Enter a Discount Price",
    type: "number",
    componentType: "Input",
  },
  {
    label: "Total Stock Available",
    name: "stock",
    placeholder: "Total Stock Amount",
    type: "number",
    componentType: "Input",
    required: true
  },

  {
    label: "Minimum Purchases per Order (optional)",
    name: "minimum_purchase",
    placeholder: "Minimum units",
    type: "number",
    componentType: "Input",
  },
]

export const addNewBrandElements = [
  {
    label: "Enter Brand Name",
    name: "name",
    placeholder: "Enter the brand name",
    type: "text",
    componentType: "Input",
    required: true,
    capitalise: "on"

  }
]

// export const addNewCategoryElements = [
//   {
//     label: "Enter Category Name",
//     name: "category",
//     placeholder: "Enter the category name",
//     type: "text",
//     componentType: "Input",

//   }
// ]

export const shoppingFilterItems = [
    {
    label: "Category",
    name: "category",
    placeholder: "Select Category",
    options: [
      {id:"men", label: "For Mens"},
      {id:"women", label: "For Womens"},
      {id:"kids", label: "For Kids"},
      {id:"sports&outdoor", label: "Sports and Outdoor"},
      {id:"health&beauty", label: "Health and Beauty"},
      {id:"electronic", label: "Electronic Devices"},
      {id:"accessories", label: "Electronic Accessories"},
      {id:"groceries&pets", label: "Groceries and Pets"},
      {id:"vehicle", label: "Vehicle"},
      {id:"home&garden", label: "Home and Garden"},
    ]    
  },
    {
    label: "Brand",
    name: "brand",
    placeholder: "Select Brand",
    type: "",
    componentType: "Select",
    required: true,
    options: []
    },
    {
      label: "Rating",
      name: "rating",
      placeholder: "Select Rating",
      type: "",
      componentType: "Select",
      options: [
        {id: "high", label: "Highest to Lowest Stars"},
        {id: "low", label: "Lowest to Highest Stars"},
      ]
    },
    {
      label: "Selling",
      name: "selling",
      placeholder: "Select Selling",
      type: "",
      componentType: "Select",
      options: [
        {id: "high", label: "Best Selling"},
        {id: "low", label: "Least Selling"},
      ],
    },

    {
      label: "Price",
      name: "price",
      placeholder: "Select Price",
      type: "", 
      componentType: "Select",
      options: [
        {id: "high", label: "High to Low"},
        {id: "low", label: "Low to High"},
      ],
    },

    {
      label: "Condition",
      name: "condition",
      placeholder: "Select Condition",
      type: "",
      componentType: "Select",
      options: [
        {id: "new", label: "Brand New"},
        {id: "used", label: "Used"},
      ]
    }
]