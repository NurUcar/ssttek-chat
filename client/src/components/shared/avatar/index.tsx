import { classNames } from "@/utils/classNames";
import { ReactElement, useEffect, useState } from "react";

interface IAvatarProps {
    avatar?: ReactElement;
    userName: string;
    className: string;
}

const Avatar = ({ avatar, userName, className }: IAvatarProps) => {
    const randomColorArray = [
        "bg-purple-300",
        "bg-fuchsia-300",
        "bg-cyan-200",
        "bg-teal-200",
        "bg-lime-300",
        "bg-amber-300",
        "bg-rose-600",
        "bg-green-500"
    ];

    const [bgColor, setBgColor] = useState("bg-green-500")

    useEffect(() => {
        // if there is no pp random bg color will pick
        !avatar &&
            setBgColor(randomColorArray[Math.floor(Math.random() * 8)])

    }, [])
    return (
        <div className={classNames("rounded-full justify-center items-center flex ", className,
            !avatar ? `${bgColor}` : "bg-white")}>
            {avatar ?
                avatar
                :
                <span className="text-xl text-white font-medium ">
                    {userName?.split(' ')
                        .map(word => word.charAt(0).toUpperCase())
                        .join('')
                    }
                </span>
            }
        </div>
    );

};



export default Avatar;
