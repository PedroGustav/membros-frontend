import React from 'react';

import { MemberProvider } from './member';
import { ToastProvider } from './toast';


export const AppProvider: React.FC = ({children}) => {
    return(
        <ToastProvider>
            <MemberProvider>
                    {children}
            </MemberProvider>
        </ToastProvider>
    );
};