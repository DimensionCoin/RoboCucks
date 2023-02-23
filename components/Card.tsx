import React from "react";
import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { FC } from "react";
import styles from "../styles/Home.module.css";
import {
  TwitterShareButton,
  RedditShareButton,
  TwitterIcon,
  RedditIcon,
} from "next-share";
import Link from "next/link";
import Image from "next/image";
import solonaFm from "../styles/solanFm.png";

type Props = {
  nft: NFT;
};

// revealed address character count
const REVEALED_COUNT = 4;

const Card: FC<Props> = ({ nft }) => {
  console.log(nft.metadata.id);
  return (
    <div className={styles.card}>
      <ThirdwebNftMedia className={styles.thumbnail} metadata={nft.metadata} />
      <h3 className="mt-2 mb-2 font-bold text-lg underline underline-offset-4">
        {nft.metadata.name}
      </h3>
      <p>Owner:</p>
      <p>
        {nft.owner.substring(0, REVEALED_COUNT) +
          "..." +
          nft.owner.substring(nft.owner.length - REVEALED_COUNT)}
      </p>
      <div className="flex justify-between">
        <div className="mt-2 flex gap-4 ml-2">
          <TwitterShareButton url={`#${nft.metadata.name.replace(/\s+/g, "")} #RoboCucks`}>
            <TwitterIcon className="h-6 w-6 rounded-full" />
          </TwitterShareButton>
          <RedditShareButton url={`#${nft.metadata.name.replace(/\s+/g, "")} #RoboCucks`}>
            <RedditIcon className="h-6 w-6 rounded-full" />
          </RedditShareButton>
        </div>
        <div className="mt-2 mr-2">
          <Link
            href={`https://solana.fm/address/${nft.metadata.id}?mode=lite&cluster=mainnet-solanafmbeta`}
            target="_blank"
            rel="noopener noreferrer" // for security reasons
            className="flex border border-black rounded-full p-1 px-2 mt-1 bg-[#444395]"
          >
            <Image
              src={solonaFm}
              alt="solanaFm"
              className="h-5 w-5 rounded-full"
            />
            <button className="text-center text-sm pr-[2px] hover:text-black">
              SolanaFM
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
