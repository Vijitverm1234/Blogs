import React, { useState } from 'react';
import './SelectPage.css';
import MainContent from '../MainContent/MainContent';

const SelectPage = () => {
const blogs =[
  {
    id: 1,
    title: 'First Blog Post',
    des: 'Discover the latest trends in web development and how to build modern, responsive websites.',
    main_photo: 'https://s3.amazonaws.com/thumbnails.venngage.com/template/0908b95c-252a-45ad-9f70-b8db4887070c.png',
    description: 'This post explores the latest tools and frameworks shaping modern web development, focusing on responsive design and performance optimization.',
    list: [
      'Adopt CSS Grid and Flexbox for layout.',
      'Use modern frameworks like React or Vue.',
      'Optimize images and assets for faster loading.',
    ],
    conclusion: 'Staying updated with web trends ensures your sites are user-friendly and efficient.',
    screenshot:  ['https://snacknation.com/wp-content/uploads/2024/07/Corporate-Tech-Gifts-Hero-Image-e1720631857902.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7TFLzfW8FFQMr8Z2VPBLVZAJYbp97uSxahY52ymFR42IQmFYZR6dvH5QX5jZGuyOm0Y&usqp=CAU',
        'https://thumbs.dreamstime.com/b/electronic-gadgets-icons-technology-electronics-multimedia-devices-everyday-objects-control-computer-connection-digital-89494813.jpg'
    ],
    icon: 'Home',
    date:"02/08/2025",
    category:"Technical"
  },
  {
    id: 2,
    title: 'Second Blog Post',
    des: 'A deep dive into React best practices for creating scalable and maintainable applications.',
    main_photo: 'https://s3.amazonaws.com/thumbnails.venngage.com/template/10a6b702-c610-462c-8d9f-e07deb935952.png',
    description: 'Learn how to structure React applications for scalability, including state management and component design.',
    list: [
      'Use hooks for state and side effects.',
      'Organize components in a modular structure.',
      'Implement Redux or Context for global state.',
    ],
    conclusion: 'Following React best practices leads to robust and maintainable codebases.',
    screenshot:  ['https://snacknation.com/wp-content/uploads/2024/07/Corporate-Tech-Gifts-Hero-Image-e1720631857902.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7TFLzfW8FFQMr8Z2VPBLVZAJYbp97uSxahY52ymFR42IQmFYZR6dvH5QX5jZGuyOm0Y&usqp=CAU',
        'https://thumbs.dreamstime.com/b/electronic-gadgets-icons-technology-electronics-multimedia-devices-everyday-objects-control-computer-connection-digital-89494813.jpg'
    ],
    icon: 'Book',
    date:"02/08/2025",
    category:"Technical"
  },
  {
    id: 3,
    title: 'Fourth Blog Post',
    des: 'Tips and tricks for enhancing user experience with intuitive UI design and animations.',
    main_photo: 'https://s3.amazonaws.com/thumbnails.venngage.com/template/5e0434ce-c0a9-4c21-a85d-2d8afb9f0c5c.png',
    description: 'This post covers techniques to create engaging user interfaces with smooth animations and intuitive navigation.',
    list: [
      'Use micro-interactions to guide users.',
      'Ensure accessibility with ARIA attributes.',
      'Incorporate subtle CSS animations.',
    ],
    conclusion: 'Great UI design improves user engagement and accessibility.',
    screenshot:  ['https://snacknation.com/wp-content/uploads/2024/07/Corporate-Tech-Gifts-Hero-Image-e1720631857902.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7TFLzfW8FFQMr8Z2VPBLVZAJYbp97uSxahY52ymFR42IQmFYZR6dvH5QX5jZGuyOm0Y&usqp=CAU',
        'https://thumbs.dreamstime.com/b/electronic-gadgets-icons-technology-electronics-multimedia-devices-everyday-objects-control-computer-connection-digital-89494813.jpg'
    ],
    icon: 'Star',
    date:"02/08/2025",
    category:"Technical"
  },
]
    const [currBlog,setCurrBlog]=useState(1)
  return (
    <>
    <div className="con">
      {blogs.map((item, ind) => (
        <div
          key={ind}
          style={{
            backgroundColor: ind === currBlog ? "#feab1a" : "transparent",
          }}
          onClick={() => setCurrBlog(ind)}
          className="cir"
        >
          {item.id}
        </div>
      ))}
     
    </div>
     <MainContent blogs={blogs} currBlog={currBlog}/>
    </>
  );
};

export default SelectPage;