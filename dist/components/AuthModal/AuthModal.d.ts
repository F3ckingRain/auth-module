import { FC } from 'react';
interface AuthModalProps {
    opened: boolean;
    theme: string;
    authType: string;
}
declare const AuthModal: FC<AuthModalProps>;
export default AuthModal;
