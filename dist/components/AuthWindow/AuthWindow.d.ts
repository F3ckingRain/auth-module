import { FC } from 'react';
import { Nullable } from '../../types/default';
interface AuthWindowProps {
    autologinToken: Nullable<string>;
    sendingSmsCode: boolean;
    changingPhone: boolean;
    callback?: () => void;
}
declare const AuthWindow: FC<AuthWindowProps>;
export default AuthWindow;
