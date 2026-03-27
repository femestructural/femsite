import React from "react";

interface MessageIconProps {
    fill?: string;
    className?: string;
    width?: string;
    height?: string;
}

const MessageIcon: React.FC<MessageIconProps> = ({
    fill,
    className,
    width = "24",
    height = "24"
}) => {
    return (
        <svg
            fill={fill || "currentColor"}
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            height={height}
        >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
        </svg>
    );
};

export default MessageIcon;
