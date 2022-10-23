import { createContext, useCallback, useContext, useState } from "react";
import { MemberData }  from '../components/Member';
import { MemberProps } from "../pages/Dashboard";
import api from "../services/api";
interface MemberContextState{
    member: MemberProps;
    createMember: (member: MemberProps) => void;
    updateMember: (id: string) => void;
}


const memberContext = createContext<MemberContextState>({} as MemberContextState);

export const MemberProvider: React.FC = ({children}) => {
    const [member, setMember] = useState<MemberProps>(() => {
        const memberData = localStorage.getItem('@MembrosAD:member');

        if(memberData){
            return JSON.parse(memberData);
        }

        return {} as MemberData
    });


    const updateMember = useCallback(async(id: string) => {

        const member = await api.get(`/member/${id}`)
        setMember(member.data);
        localStorage.setItem('@Oppine:user', JSON.stringify(member));


    }, [setMember]);

    const createMember =  useCallback(( member: MemberProps) => {
        localStorage.setItem('@MembrosAD:member', JSON.stringify(member));

        setMember(member);
    },[]);

    return(
        <memberContext.Provider value={{member: member, createMember, updateMember}}>
            {children}
        </memberContext.Provider>
    );
}

export function useMember(): MemberContextState{
    const context = useContext(memberContext);

    if(!context){
        throw new Error('useMember só pode ser usado juntamente com o MemberProvider.');
    }

    return context;
}