import {
    theme,
    eyesMap,
    eyebrowsMap,
    mouthsMap,
    hairMap,
    facialHairMap,
    clothingMap,
    accessoryMap,
    graphicsMap,
    hatMap,
    bodyMap
} from '@bigheads/core'

// from bigheads github repo
// https://github.com/RobertBroersma/bigheads

function selectRandomKey(seed, object) {
    return Object.keys(object)[
        Math.floor((parseInt(seed, 10) / 10) * Object.keys(object).length)
    ]
}


export function getRandomOptions(playerName) {
    const nameSeed = Math.abs(hashSeed(playerName)).toString()

    // we need 18 factor to create avatar
    const seed = nameSeed + nameSeed.substring(0, 18 - nameSeed.length)

    const skinTone = selectRandomKey(seed[0], theme.colors.skin)
    const eyes = selectRandomKey(seed[1], eyesMap)
    const eyebrows = selectRandomKey(seed[2], eyebrowsMap)
    const mouth = selectRandomKey(seed[3], mouthsMap)
    const hair = selectRandomKey(seed[4], hairMap)
    const facialHair = selectRandomKey(seed[5], facialHairMap)
    const clothing = selectRandomKey(seed[6], clothingMap)
    const accessory = selectRandomKey(seed[7], accessoryMap)
    const graphic = selectRandomKey(seed[8], graphicsMap)
    const hat = selectRandomKey(seed[9], hatMap)
    const body = selectRandomKey(seed[10], bodyMap)

    const hairColor = selectRandomKey(seed[11], theme.colors.hair)
    const clothingColor = selectRandomKey(seed[12], theme.colors.clothing)
    const circleColor = selectRandomKey(seed[13], theme.colors.bgColors)
    const lipColor = selectRandomKey(seed[14], theme.colors.lipColors)
    const hatColor = selectRandomKey(seed[15], theme.colors.clothing)
    const faceMaskColor = selectRandomKey(seed[16], theme.colors.clothing)

    const mask = true
    const faceMask = false
    const lashes = parseInt(seed[17], 10) > 0.5

    return {
        skinTone,
        eyes,
        eyebrows,
        mouth,
        hair,
        facialHair,
        clothing,
        accessory,
        graphic,
        hat,
        body,
        hairColor,
        clothingColor,
        circleColor,
        lipColor,
        hatColor,
        faceMaskColor,
        mask,
        faceMask,
        lashes
    }
}

// from https://github.com/dicebear/dicebear/
//dicebear/packages/@dicebear/avatars/src/utils/prng.ts 
function xorshift(value) {
    value ^= value << 13
    value ^= value >> 17
    value ^= value << 5

    return value
}


function hashSeed(seed) {
    let hash = 0

    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0
        hash = xorshift(hash)
    }

    return hash;
}