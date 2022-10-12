import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Authors',
    path: '/authors',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Genre',
    path: '/genre',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: <FaIcons.FaStar />,
    cName: 'nav-text'
  },

  {
    title: 'Explore',
    path: '/explore',
    icon: <IoIcons.IoIosSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Add Poem',
    path: '/about',
    icon: <FaIcons.FaPencilAlt />,
    cName: 'nav-text'
  }
];