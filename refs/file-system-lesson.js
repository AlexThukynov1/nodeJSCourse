const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), (err)=> {
//     if(err) throw new Error(err)
//     console.log('Dir done')
// })

// fs.writeFile(path.join(__dirname, 'notes', 'notes.txt'),
// 'Hello',
// err => {
//     if(err) throw new Error(err)
//     console.log('File done')

//     fs.appendFile(
//         path.join(__dirname, 'notes', 'notes.txt'), 'Change file',
//         err => {
//             if(err) throw new Error(err)
//             console.log('File change')
//         }
//         )
//     }
// )

// fs.readFile(
//     path.join(__dirname, 'notes', 'notes.txt'),
//     'utf-8',
//     (err, data) => {
//         if(err) throw new Error
//         console.log(data)
//     }
// )

fs.rename(
    path.join(__dirname, 'notes', 'notes.txt'),
    path.join(__dirname, 'notes', 'new-notes.txt'),
    err => {
        if(err) throw new Error
        console.log('Rename file')
    }

)

// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html