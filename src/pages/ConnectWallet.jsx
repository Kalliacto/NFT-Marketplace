import React, { useState } from 'react';
import ConnectWalletComponent from '../components/Account/ConnectWalletComponent';
import CreateAccount from '../components/Account/CreateAccount';

const ConnectWallet = (props) => {
    const [user, setUser] = useState(false);

    console.log(user);

    return (
        <div>
            {user ? (
                <CreateAccount setUser={setUser} />
            ) : (
                <ConnectWalletComponent setUser={setUser} />
            )}
        </div>
    );
};

export default ConnectWallet;
