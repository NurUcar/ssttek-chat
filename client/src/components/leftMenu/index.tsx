import LeftMenuBody from "@/components/leftMenu/subComponents/leftMenuBody";
import LeftMenuTop from "@/components/leftMenu/subComponents/leftMenuTop";
import { IUser } from "@/services/types/propTypes/generic";

interface ILeftMenu {
    users: IUser[]
    setUsers: (userList: IUser[]) => void;
}
const LeftMenu = ({ users, setUsers }: ILeftMenu) => {

    return (
        <div className='w-[340px]'>
            <LeftMenuTop />
            <LeftMenuBody users={users} setUsers={setUsers} />
        </div>
    );

};



export default LeftMenu;
