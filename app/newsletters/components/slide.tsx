import React, { ForwardedRef } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type PageProps = {
  ImagePath: string | StaticImport;
  number: number;
};

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
    <Image src={props.ImagePath} alt="page" width={500} height={500} />
      <p>Page number: {props.number}</p>
    </div>
  );
});

export default Page;
