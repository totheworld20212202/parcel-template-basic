// ESM ecmascript module => 자바스크립트환경 import, export 
// CommonJS => nodeJS환경 

// // import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

// // export {
// //     plugins:[
// //         autoprefixer
// //     ]
// // }
// module.exports ={
//     plugins:[
//         autoprefixer
//     ]
// }

module.exports ={
    plugins:[
        require('autoprefixer')
    ]
}