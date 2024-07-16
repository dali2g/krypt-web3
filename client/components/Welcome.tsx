"use client"
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import   Loader from '@/components/Loader'

const Welcome = () => {
  const commonStyles="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px]  border-gray-400 text-sm font-light text-white"
  const connectWallet = async () => {
    console.log('clg')
  }

  const handleSubmit = () =>{

  }

  const Input = ({ placeholder, type, value, onChange }: {placeholder:string;type:string;value:string;onChange:string}) => {
    return (
      <input 
       placeholder={placeholder}
       type={type}
       value={value}
       onChange={() => {handleChange(e,name)}}
       className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"/>
    );
  }

  
  return(
    <div className="flex flex-col md:flex-row w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex justify-start flex-col md:mr-10">
          <h1 className="text-white text-3xl sm:text-5xl text-gradient py-1">Send CryptoCurrencies  <br/> from anywhere !</h1>
          <p className="text-left mt-5 text-white font-light w-11/12 sm:w-3/12">Explore the crypto world ! buy & sell CryptoCurrencies here !</p>
          <button className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 cursor-pointer hover:bg-[#2546bd] rounded-md">
              <p className="text-white text-base font-semibold">
              Connect Wallet
              </p> 
              </button>
              <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-12">
                <div className={`rounded-tl-2xl ${commonStyles}`}>
                  Security
                </div>
                <div className={`rounded-tr-2xl sm:rounded-none ${commonStyles}`}>
                                    Ethereum
                </div>
                <div className={`sm:rounded-tr-2xl rounded-none ${commonStyles}`}>
                                    Web 3.0
                </div>
                <div className={`sm:rounded-bl-2xl rounded-none ${commonStyles}`}>
                                    BlockChain
                </div>
                <div className={`rounded-bl-2xl sm:rounded-none ${commonStyles}`}>
                                    Low Fees
                </div>
                <div className={`rounded-br-2xl ${commonStyles}`}>
                                    BlockChain
                </div>

              </div>
        </div>
        </div>
        <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:mt-0 mt-12 p-3 justify-end items-start rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
          <div className="flex flex-col justify-between h-full w-full ">

              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum className="text-white" fontSize={21} color="#fff" />
                
                </div>
                  <BsInfoCircle className="text-white" fontSize={17} color="#fff" />
                </div>
              <div>

                  <p className="text-white text-sm font-light ">Address</p>
                  <p className="text-white text-lg font-semibold ">Ethereum</p>
              </div>
        </div>
          </div>
          <div className="p-5 sm:w-72 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <Input placeholder="Address to" type="text" value="" onChange={() => {}}/>
          <Input placeholder="Amount (ETH)" type="number" value="" onChange={() => {}}/>
          <Input placeholder="Keyword (GIF)" type="text" value="" onChange={() => {}}/>
          <Input placeholder="Enter message" type="text" value="" onChange={() => {}}/>
            <div className="h-[1px] w-full bg-gray-400 my-2">
            </div> 
                {false?
                <Loader/>
               :
            <button
             type="button"
             onClick={handleSubmit}
              className="text-white w-full mt-2 border-2 py-1.5 rounded-full cursor-pointer">
                Send Now
            </button>
              }
          </div>
          </div>
    </div>
  );
};

export default Welcome;
