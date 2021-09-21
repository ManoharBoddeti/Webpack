module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css/, loader: "style-loade!css-loader"},
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, quer:{presets:['es2015']}} 
        ]
    }
}