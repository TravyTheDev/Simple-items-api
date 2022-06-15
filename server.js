const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.use(express.static('public'))

let item = {
    'onikoroshi': {
        'image': 'https://image1.shopserve.jp/onikoroshi-online.jp/pic-labo/limg/onikoroshi_270ml.jpg?t=20200408155238',
        'price': '￥150',
        'worth': 1,
        'not worth': 0
    },
    'strong zero lemon': {
        'image': 'https://www.suntory.co.jp/products/pimg/FTFL_R1_20211115.jpg?_x=254&_y=659',
        'price': '￥210',
        'worth': 1,
        'not worth': 0
    },
    'not yet added to the database': {
        'image': 'Unknown',
        'price': 'Unknown',
        'worth': 'Unknown',
        'not worth': 'Unknown'
    }

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:itemName', (req, res) => {
    const items = req.params.itemName.toLocaleLowerCase()
    if(item[items]){
        res.json(item[items])
    }else{
        res.json(item['not yet added to the database'])
    }
    console.log(item[items])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on ${PORT}.`)
})