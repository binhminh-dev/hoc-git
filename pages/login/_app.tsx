/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../assets/style.scss";



// export default class CustomApp extends React.Component<AppProps> {
//    props: any;
//    render() {
//        return (
//        <div className="root-app">
//            <head>
//               <title>Create Next App Edit</title>
//                <link rel="icon" href="/favicon.ico" />
//                <link rel="stylesheet" href="/css/global.css" />
//            </head>
//            <this.props.Component {...this.props.pageProps} />
//        </div>  
//        )
//    }
// }
const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
   return ( 
      <div className="root-app">
        <Head>
            <title>Create Next App Edit</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="/css/global.css" />
        </Head>
           <Component {...pageProps} />
        </div>
    )    
}

export default CustomApp;

// export default function MyAp({ Component, pageProps }) {
//    // Component -> Dai dien cho 1 Page match url

//   return ( 
//       <div className="root-app">
//           <Head>
//                <title>Create Next App Edit</title>
//                <link rel="icon" href="/favicon.ico" />
//                <link rel="stylesheet" href="/css/global.css" />
//            </Head>
//            <Component {...pageProps} />
//        </div>
//    )
// }