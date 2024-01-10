

export type TLink =  {
    name: string;
    path: string;
  }

const NAV_LINKS:TLink[] = [
   {
        name: 'Home',
        path: '/'
    },
     {
        name: 'About',
        path: '/about'
    },
   {
        name: 'Contact',
        path: '/contact'
    }
]

export {
    NAV_LINKS
}