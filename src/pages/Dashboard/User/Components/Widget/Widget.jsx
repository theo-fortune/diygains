import React from 'react'
import './widget.css'
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { PiWalletFill } from "react-icons/pi"; // * Earnings
import { BiSolidWallet } from "react-icons/bi"; // * Balance
import { GiUpgrade } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import Balance from '../Balances/Balance';

const Widget = () => {
  return (
    <div className='widget'><Balance /></div>
  )
}

export default Widget