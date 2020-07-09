
//Configuración webpack del proyecto

//modulo para cargar el html con webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    //Los archivos de entrada que se van a convertir
    entry: [
        './src/app/index.js'
    ],

    //en donde se van a colocar los archivos convertidos
    output: {

        //carpeta donde se va a realizar la conversión
        path: __dirname + '/build',

        //nombre del archivo convertido
        filename: 'bundle.js'

    },

    //modo de trabajo con webpack desarrollo o produccion
    mode: 'development',

    //reglas que indican como se va a configurar y exportar el código
    module: 
    {
        rules: [

            {

                test: /\.js$/, //todos los archivos javascript...
                loader: 'babel-loader' // se van a cargar con babeljs
            },
            {
                test: /\.css$/, //todos los archivos css...

                //se van a cargar con los modulos style-loader y css-loader
                use: [
                        'style-loader',
                        'css-loader'
                ]
            }
        ]

    },

    //modulo que va a cargar el html
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.html'//el archivo html que se va a convertir
            }),
        
        new MiniCssExtractPlugin(
            {
                filename: 'bundle.css'
            }
        )
    ]
}