'use client'
import React, { useRef, useState, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
const importStatements = [];

import pic1 from './assets/1.jpg';
import pic2 from './assets/2.jpg';
import pic3 from './assets/3.jpg';
import pic4 from './assets/4.jpg';
import pic5 from './assets/5.jpg';
import pic6 from './assets/6.jpg';
import pic7 from './assets/7.jpg';
import pic8 from './assets/8.jpg';
import pic9 from './assets/9.jpg';
import pic10 from './assets/10.jpg';
import pic11 from './assets/11.jpg';
import pic12 from './assets/12.jpg';
import pic13 from './assets/13.jpg';
import pic14 from './assets/14.jpg';
import pic15 from './assets/15.jpg';
import pic16 from './assets/16.jpg';
import pic17 from './assets/17.jpg';
import pic18 from './assets/18.jpg';
import pic19 from './assets/19.jpg';
import pic20 from './assets/20.jpg';
import pic21 from './assets/21.jpg';
import pic22 from './assets/22.jpg';
import pic23 from './assets/23.jpg';
import pic24 from './assets/24.jpg';
import pic25 from './assets/25.jpg';
import pic26 from './assets/26.jpg';
import pic27 from './assets/27.jpg';


interface MyBookProps {}

const MyBook: React.FC<MyBookProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageFlipRef = useRef<HTMLFlipBook>(null);

  // const goToNextPage = useCallback(() => {
  //   if (pageFlipRef.current && pageFlipRef.current.getPageFlip()) {
  //     const nextPage = currentPage + 1;
  //     pageFlipRef.current.getPageFlip().flipNext();
  //     setCurrentPage(nextPage);
  //   }
  // }, [currentPage]);

  return (
    <div>
      <HTMLFlipBook
        className='h-500 md:h-700 '
        flippingTime={800}
        width={500}
        height={700}
        startPage={currentPage}
        ref={pageFlipRef}
        style={{ margin: 'auto'}}
      >
        {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14 , pic15 ,
        
        pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27
      ].map((pic, index) => (
          <div key={index}>
            <Image src={pic} alt="" width={500} height={300} quality={100} />
            <p>Page number: {index + 1}</p>
          </div>
        ))}
      </HTMLFlipBook>
      
      {/* <button onClick={goToNextPage}>Next Page</button> */}
    </div>
  );
};

export default MyBook;
