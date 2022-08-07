// Variants for animation.
const sentence = {
    hidden : {opacity : 1} ,
    visible : {
        opacity : 1
    },
    transition : {
        delay : 0.5,
        staggerChildren: 0.08
    }
}

const letter = {
    hidden : {opacity:0 ,  y:50},
    visible : {
        opacity:1 ,
        y:0 ,
    },
     transition : {repeat:Infinity , duration :10}
}

module.exports = {
    sentence,
    letter
}
