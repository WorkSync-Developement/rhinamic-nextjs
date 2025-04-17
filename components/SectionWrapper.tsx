import React from 'react';

type SectionWrapperProps = {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
    children, 
    className = "", 
    ...props 
}) => {
    return (
        <section {...props} className={`py-16 lg:py-20 ${className}`}>
            {children}
        </section>
    );
};

export default SectionWrapper;