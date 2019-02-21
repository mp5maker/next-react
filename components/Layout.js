import React, { Fragment, Component } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/main.scss'

const Layout = (props) => (
    <Fragment>
        <Head>
            <title> BitzPrice </title>
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
        </Head>
        <Navbar />
        <div className="container-fluid">
            { props.children }
        </div>
    </Fragment>
)

export default Layout