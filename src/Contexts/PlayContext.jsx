import { useState } from "react";
import { createContext } from "react";
import processWinner from "../utils/processWinner";
import { useEffect } from "react";

export const PlayContextContext = createContext();

export default function PlayContext({ children }) {
    const [endLength, setEndLength] = useState(3)
    const [round, setRound] = useState(1)
    const [match, setMatch] = useState(1)
    const [startGame, setStartGame] = useState(false)
    const [gameDraw, setGameDraw] = useState(false)

    const sidePlayer = round % 2 ? 'X' : 'O'
    const totalInput = endLength ** 2

    let inputData = []
    for (let i = 0; i < totalInput; i++) {
        inputData[i] = ''
    }

    const [playerInput, setPlayerInput] = useState(inputData)
    const haveWinner = processWinner(playerInput, endLength)
    const matchIsEnd = haveWinner || gameDraw

    const resetMatch = () => {
        setMatch(match + 1)
        setStartGame(false)
    }

    useEffect(() => {
        setEndLength(3)
        setRound(1)
    }, [match])

    useEffect(() => {
        const allDataComplete = playerInput.reduce((prevValid, input) => Boolean(prevValid) && Boolean(input))
        console.log('playerInput', playerInput)
        console.log('allDataComplete', allDataComplete)
        setGameDraw(allDataComplete)
    }, [playerInput])

    useEffect(() => {
        setPlayerInput(inputData)
    }, [endLength])

    const value = { startGame, setStartGame, endLength, setEndLength, totalInput, inputData, playerInput, setPlayerInput, round, setRound, sidePlayer, haveWinner, gameDraw, matchIsEnd, match, resetMatch }
    return (
        <PlayContextContext.Provider value={value}>
            {children}
        </PlayContextContext.Provider>
    )
}
