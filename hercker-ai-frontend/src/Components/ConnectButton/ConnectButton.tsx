import "./ConnectButton.scss";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { shortAddress } from "../../Helpers/Helpers";
import { useContext, useEffect } from "react";
import { Context } from "../../main";

const ConnectButton = () => {
    const { wallet, publicKey } = useWallet();
    const { setAccessToken } = useContext(Context);

    const handleDisconnect = () => {
        setAccessToken(null);
    };

    useEffect(() => {
        if (wallet) {
            wallet.adapter.on("disconnect", handleDisconnect);
        }

        return () => {
            if (wallet) {
                wallet.adapter.off("disconnect", handleDisconnect);
            }
        };
    }, [wallet]);

    return (
        <WalletMultiButton
            children={
                <div className="button-content">
                    {publicKey ? <span>// {shortAddress(publicKey.toString())}</span> : <span>// connect wallet</span>}
                </div>
            }
            className="connect-button"
            startIcon={<></>}
        />
    );
};

export default ConnectButton;
