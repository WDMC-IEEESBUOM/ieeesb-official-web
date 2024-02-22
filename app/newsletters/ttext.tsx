'use client'
import React, { forwardRef, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import pic1 from './assets/1.png';
import pic2 from './assets/2.png';



interface PageProps {
    children: React.ReactNode;
    number: string;
  }
  
  const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
    return (
      <div className="demoPage" ref={ref as React.RefObject<HTMLDivElement>}> {/* ref required */}
        <h1>Page Header</h1>
        <p>{props.children}</p>
        <p>Page number: {props.number}</p>
      </div>
    );
  });
  


function MyBook(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const pageFlipRef = useRef();

  const goToNextPage = () => {
    if (pageFlipRef.current) {
      const nextPage = currentPage + 1;
      pageFlipRef.current.gotoPage(nextPage);
      setCurrentPage(nextPage);
    }
  };

  return (
    <div>
      <HTMLFlipBook
        flippingTime={1000}
        width={500}
        height={300}
        className={""}
        style={{ marginBottom: "500px" }}
        startPage={0}
        size={"fixed"}
        minWidth={0}
        maxWidth={0}
        minHeight={300}
        maxHeight={0}
        drawShadow={false}
        usePortrait={false}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={0}
        showCover={false}
        mobileScrollSupport={false}
        clickEventForward={false}
        useMouseEvents={false}
        swipeDistance={0}
        showPageCorners={false}
        disableFlipByClick={false}
        ref={pageFlipRef}
      >
        <Page number="1"> <Image src={pic1} alt={""} width={500} height={300} quality={100} /> </Page>
        <Page number="2"><Image src={pic2} alt={""} width={500} height={300} quality={100} /></Page>
        <Page number="3"><Image src={pic1} alt={""} width={500} height={300} quality={100} /></Page>
      </HTMLFlipBook>
      <button onClick={goToNextPage}>Next Page</button>
    </div>
  );
}

export default MyBook;
