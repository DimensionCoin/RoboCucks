import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import MintButton from "./MintButton";
import { TwitterIcon, TwitterShareButton } from "next-share";
import { useWallet } from "@solana/wallet-adapter-react";



const Header = () => {
    const { publicKey } = useWallet();
    return (
        <div className="flex gap-12 justify-between text-center">
           <div className=" flex">
           <div className="pl-2"> {publicKey && <MintButton />} </div>
            <Link href="https://twitter.com/robo_cuck">
                <TwitterIcon className="h-8 w-8 rounded-full ml-4 mt-5"/>
            </Link>
           </div>
            <div className="mt-3 mx-6 mb-2 ">
            <WalletMultiButton />
            </div>
        </div>
    )
}

export default Header