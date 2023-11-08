import React from "react";

export const SpinLoader: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="spinLoader"></div>
        </div>
    );
};
export const InfinityBarLoader: React.FC = (className) => {
    return (
        // < className="flex justify-center items-center h-full w-full">
        <div className="infinityBarLoader" />
        // </div>
    );
};
