
const tributeChest = []

const payTribute = (tributeId, tributeDescription, queenId) => {
    const tribute = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }

    tributeChest.push(tribute)


}



const queens = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Beyonce")
createQueen(3, "Your Mom")
createQueen(4, "Queen of Hearts")

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)
    
}

payTribute(1, "Heads", 4)
payTribute(2, "A Ring", 2)
payTribute(3, "3 Horse units", 1)
payTribute(4, "A son she'll actually love", 3)

for (const queenObject of queens) {
    for (const tributeObject of tributeChest) {
        if (tributeObject.queenId === queenObject.id) {
            console.log(`${queenObject.name} has tribute ${tributeObject.description}`)
        }
    }

}