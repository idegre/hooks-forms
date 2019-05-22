import React from 'react'

export const useCreateField = ( onChange ) => ( props, {field}) => {
    return (
        <div>
            return(
                <CustomComponent
                    {...props}
                    type={field.input}
                    id={"" + field.name}
                    name={field.name}
                    onChange={onChange}
                />
            )
        </div>
    )
};
