import React from "react";
import Navigation from "./Navigation";
import { GiPokerHand } from "react-icons/gi";

export default function Header() {
    return(
        <header className="border-b p-3 flex justify-between items-center">
            <span className="font-bold text-2xl">
                <GiPokerHand className="inline-block text-4xl" />股牌
            </span>

            <Navigation />
        </header>
    )
}