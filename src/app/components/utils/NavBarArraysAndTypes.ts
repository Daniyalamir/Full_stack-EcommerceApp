export interface NavbarItemType{
  label: string,
  href: string,
  isDropDown : boolean,
  dropDownData?: Array<NavbarItemType> ,
  };

export const NavbarArray : Array<NavbarItemType> = [
{
  label : "Female", 
  href : "/female/Female",
  isDropDown:true,
  dropDownData:[
    {
      label : "Dresses", 
  href:"/female/Dresses",
  isDropDown:false,
    },
    {
      label : "T-Shirts", 
  href:"/female/T-shirts",
  isDropDown:false,
    },
    {
      label : "Pents", 
  href:"/female/Pants",
  isDropDown:false,
    },
    {
      label : "Jackets", 
  href:"/female/Jackets",
  isDropDown:false,
    },
    {
      label : "Sweater", 
  href:"/female/Sweater",
  isDropDown:false,
    },
  ],
},
{
  label : "Male",
  href : "/male/Male",
  isDropDown:true,
  dropDownData:[
    {
      label : "Sweater", 
  href:"/male/sweater",
  isDropDown:false,
    },
  //   {
  //     label : "Shirts", 
  // href:"/male/shirts",
  // isDropDown:false,
  //   },
  //   {
  //     label : "Pents", 
  // href:"/female/pents",
  // isDropDown:false,
  //   },
    {
      label : "Jackets", 
  href:"/female/jackets",
  isDropDown:false,
    },
  ],
},
{
  label : "Kids",
  href : "/Kids",
  isDropDown:false,
},
{
  label : "All Products",
  href : "/products",
  isDropDown:false,
},
]