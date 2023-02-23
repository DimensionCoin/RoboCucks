import React from "react";
import {
  useProgram,
  useProgramMetadata,
  useNFTs,
} from "@thirdweb-dev/react/solana";
import Header from "./Header";
import styles from "../styles/Home.module.css";

function Login() {
  const PROGRAM_ADDRESS = "D8gdMrknp9G4DtHUiGwoVzrkt8evnKbJJLRBVv9kfL6A";
  const { data: program } = useProgram(PROGRAM_ADDRESS, "nft-collection");
  const { data: metadata, isLoading: loadingMetadata } =
    useProgramMetadata(program);
  return (
    <div>
      <Header />
      <div className="mx-4">
        <div className="  border-black mx-44 shadow-lg mb-4 shadow-white rounded-xl p-6 mt-4">
          <h1 className=" text-6xl text-[#0db6d8fa] top-[90px] rounded-lg ">
            {metadata?.name}
          </h1>
        </div>
        <div className={styles.iconContainer}>
          <img
            className="border border-[#a90ea6] rounded-lg h-[460px] md:h-[660px]"
            src={String(metadata?.image)}
            alt={String(metadata?.name)}
          />
        </div>
        <p className={styles.explain}>{metadata?.description}</p>
      </div>
    </div>
  );
}

export default Login;
