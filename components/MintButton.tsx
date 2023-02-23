import styles from "../styles/Home.module.css";
import {
  useProgram,
  useProgramMetadata,
  useNFTs,
  useMintNFT,
} from "@thirdweb-dev/react/solana";
import Link from "next/link";

// Replace this with your program
const PROGRAM_ADDRESS = "D8gdMrknp9G4DtHUiGwoVzrkt8evnKbJJLRBVv9kfL6A";

const MintButton = () => {
  const { data: program } = useProgram(PROGRAM_ADDRESS, "nft-collection");
  const { data: metadata } = useProgramMetadata(program);
  const { data: nfts } = useNFTs(program);
  const { mutateAsync: mintNft, isLoading } = useMintNFT(program);

  const mint = async () => {
    if (!metadata || !nfts) return;

    await mintNft({
      metadata: {
        name: metadata.name + `#${nfts.length + 1}`,
        description: metadata.description,
        image: metadata.image,
      },
    });
  };

  return (
    <Link
      href="https://magiceden.io/marketplace/D8gdMrknp9G4DtHUiGwoVzrkt8evnKbJJLRBVv9kfL6A"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="border border-pink-800 mt-3 p-3 rounded-full bg-gradient-to-br from-[#7f15ac] to-[#42dce4] font-bold hover:text-black">
        {isLoading ? "Buying..." : "Buy on Magic Eden"}
      </button>
    </Link>
  );
};

export default MintButton;
