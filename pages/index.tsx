import type { NextPage,  } from "next";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  useProgram,
  useProgramMetadata,
  useNFTs,
} from "@thirdweb-dev/react/solana";
import Card from "../components/Card";
import HeaderIMG from "../styles/Headerweb.png"
import styles from "../styles/Home.module.css";
import Header from "../components/Header"
import Image from "next/image"
import Login from "../components/Login"

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const PROGRAM_ADDRESS = "D8gdMrknp9G4DtHUiGwoVzrkt8evnKbJJLRBVv9kfL6A";

const Home: NextPage = () => {
  const { data: program } = useProgram(PROGRAM_ADDRESS, "nft-collection");
  const { data: metadata, isLoading: loadingMetadata } =
    useProgramMetadata(program);
  const { data: nfts, isLoading } = useNFTs(program);

  const { publicKey } = useWallet();

  if (!publicKey)
  return <Login/>

  return (
    <>
      <Header/>
      <div className={styles.container}>
        {loadingMetadata ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <>
          <div className="bg-back bg-cover">
          <h1 className=" text-6xl text-[#0db6d8fa] p-6 px-12 rounded-lg shadow-sm shadow-[#b215b7fa] top-[90px]">{metadata?.name}</h1>
          </div>
            <div className={styles.iconContainer}>
              <img
                className="border border-[#a90ea6] rounded-lg h-[460px] md:h-[660px]"
                src={String(metadata?.image)}
                alt={String(metadata?.name)}
                
              />
            </div>
            <p className={styles.explain}>{metadata?.description}</p>
          </>
        )}
        <div className={styles.buttons}>

        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <main className={styles.gallery}>
            {nfts?.map((nft, idx) => (
              <Card key={idx} nft={nft} />
            ))}
          </main>
        )}
      </div>
    </>
  );
};

export default Home;
