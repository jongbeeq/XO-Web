import { useState } from "react";
import { createContext } from "react";
import processWinner from "../utils/processWinner";

export const PlayContextContext = createContext();

export default function PlayContext({ children }) {
    const [endLength, setEndLength] = useState(3)
    const [playerSide, setPlayerSide] = useState(1)
    const [round, setRound] = useState(1)

    const sidePlayer = round % 2 ? 'X' : 'O'

    const totalInput = endLength ** 2

    let inputData = []
    for (let i = 0; i < totalInput; i++) {
        inputData[i] = ''
    }

    const [playerInput, setPlayerInput] = useState(inputData)

    console.log(processWinner(playerInput, endLength))

    const haveWinner = processWinner(playerInput, endLength)

    const value = { endLength, setEndLength, playerSide, setPlayerSide, totalInput, inputData, playerInput, setPlayerInput, round, setRound, sidePlayer, haveWinner }
    return (
        <PlayContextContext.Provider value={value}>
            {children}
        </PlayContextContext.Provider>
    )
}
