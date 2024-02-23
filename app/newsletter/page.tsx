'use client';
import React, { useRef, useState, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

// Importing images dynamically
const images = Array.from({ length: 27 }, (_, index) => {
  return require(`../../public/edition1/IEEE SB UOM Newsletter_page-${String(index + 1).padStart(4, '0')}.jpg`);
});

interface MyBookProps { }

const MyBook: React.FC<MyBookProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageFlipRef = useRef<typeof HTMLFlipBook>(null);

  const isMobile = () => {
    return window.innerWidth < 780;
  };

  return (
    <main className="flex min-h-full flex-col items-center bg-white justify-between scroll-smooth overflow-hidden">
      <div className="w-[100%] bg-black opacity-95 rounded-b-[40px] h-[15px]"></div>
      <div className="mx-26 mt-[40px] bg-gradient-to-r from-[#07060D] via-[#0E559D] to-[#0E559D] w-screen max-w-[1400px] rounded-[60px] py-5 relative mb-[40px]">
        <h1 className="committee my-1 md:text-[40px] text-[30px] text-center mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" style={{ fontFamily: 'Amenti Bold' }}>
          INNOSPHERE - EDITION #1
        </h1>
        <p className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent text-center text-[10px]" style={{ fontFamily: 'Amenti Bold' }}>
          {isMobile() ? 'Swipe to flip the pages' : 'Click to flip the pages'}
        </p>
        <div className="bg-white md:mx-16 rounded-[60px] pt-8 relative flex items-center justify-center flex-column">
          <HTMLFlipBook
            width={isMobile() ? 350 : 500}
            height={isMobile() ? 550 : 750}
            size="stretch"
            minWidth={isMobile() ? 350 : 500}
            maxWidth={1000}
            minHeight={isMobile() ? 600 : 650}
            maxHeight={1350}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={false}
            onFlip={(e) => setCurrentPage(e.data)}
            ref={pageFlipRef}
            style={{ margin: 'auto' }}
            flippingTime={800}
            startPage={currentPage}
            className=""
            drawShadow={true}
            usePortrait={isMobile() ? true : false}
            startZIndex={0}
            autoSize={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={0}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {images.map((pic, index) => (
              <div key={index}>
                <Image src={pic} alt="" width={isMobile() ? 350 : 500} height={isMobile() ? 600 : 650} quality={100} />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </main>
  );
};

export default MyBook;
