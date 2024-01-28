"use client"

import "./flipCardNonHover.css";
import Image from "next/image";

interface FlipCardProps {
    name: string;
    designation: string;
    image: string;
}

const FlipCardNewNonHover: React.FC<FlipCardProps> = ({
    name,
    designation,
    image,
}) => {

    const handleRedirect = (url: string) => {
        window.open(`https://${url}`, "_blank");
    }

    return (
        <div className="card lg:my-5">
            <div className="card-info">
                <div className="card-avatar">
                    <Image src={image} alt="avatar" width={140} height={140} />
                </div>
                <div className="card-title lg:text-[1.3em] text-[1em]">{name}</div>
                <div className="card-subtitle lg:text-[1em] text-[0.8em]">- {designation} -</div>
            </div>
        </div>
    );
}

export default FlipCardNewNonHover;