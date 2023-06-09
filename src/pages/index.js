import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Input from "@/components/Input";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://imgur.com/Zvk9bHc.png" />
      </Head>
      <main className={styles.main}>
        <img
          className={styles.logoInterprise}
          src="https://imgur.com/XcLPcPu.png"
          alt="Logo da Eco Elétrica"
          width={200}
        />
        <Input
          label="CPF:"
          type="text"
          placeholder="Somente números..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>Texto digitado: {inputValue}</p>
      </main>
    </>
  );
}
