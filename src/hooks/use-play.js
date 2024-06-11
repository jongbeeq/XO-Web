import { useContext } from "react";
import { PlayContextContext } from "../Contexts/PlayContext";

export default function usePlay() {
    return useContext(PlayContextContext)
}