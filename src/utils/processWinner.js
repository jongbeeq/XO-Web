export default function processWinner(playerInput, endLength) {

    for (let j = 0; j < endLength; j++) {
        const horizontolInitial = endLength * j
        const horizontol = [horizontolInitial]
        let horizontolEnd = true
        for (let i = 1; i < endLength; i++) {
            const next = horizontolInitial + i
            horizontol.push(next)
            horizontolEnd = (horizontolEnd) && (playerInput[next] || playerInput[next] === 0) && (playerInput[next] === playerInput[horizontolInitial])
        }
        if (horizontolEnd) return horizontol

        const verticalInitial = j
        const vertical = [verticalInitial]
        let verticalEnd = true
        for (let i = 1; i < endLength; i++) {
            const next = verticalInitial + (endLength * i)
            vertical.push(next)
            verticalEnd = verticalEnd && (playerInput[next] || playerInput[next] === 0) && (playerInput[next] === playerInput[verticalInitial])
        }
        if (verticalEnd) return vertical
    }

    const diagonalLeftInitial = 0
    const diagonalLeft = [diagonalLeftInitial]
    let diagonalLeftEnd = true
    for (let i = 1; i < endLength; i++) {
        const next = diagonalLeftInitial + ((Number(endLength) + 1) * i)
        diagonalLeft.push(next)
        diagonalLeftEnd = diagonalLeftEnd && (playerInput[next] || playerInput[next] === 0) && (playerInput[next] === playerInput[diagonalLeftInitial])
    }
    if (diagonalLeftEnd) return diagonalLeft

    const diagonalRightInitial = endLength - 1
    const diagonalRight = [diagonalRightInitial]
    let diagonalRightEnd = true
    for (let i = 1; i < endLength; i++) {
        const next = diagonalRightInitial + ((endLength - 1) * i)
        diagonalRight.push(next)
        diagonalRightEnd = diagonalRightEnd && (playerInput[next] || playerInput[next] === 0) && (playerInput[next] === playerInput[diagonalRightInitial])
    }
    if (diagonalRightEnd) return diagonalRight
}
