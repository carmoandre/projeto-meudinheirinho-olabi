import { createGlobalStyle } from 'styled-components';
import ReactModal from 'react-modal';
import Header from "./components/Header"
import Body from './components/Body';
import Balances from './components/balances/Balances';
import { useEffect, useState } from 'react';
import ModalForm from './components/modal/ModalForm';
import FakeBakeEnd from './fakeBackEnd/FakeBakeEnd.js'


export default function App() {
    const [data, setData] = useState(FakeBakeEnd);
    const [ismodalOpen, setIsModalOpen] =  useState(false);

    useEffect(() => {
        setData(data);
    }, [data]);

    function handleCloseModal () {
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            <ResetCSS />
            <GlobalStyle />
            <Balances data={data}/>
            <Header setIsModalOpen={setIsModalOpen} />
            <Body data={data}/>
            <ReactModal 
                isOpen={ismodalOpen} 
                onRequestClose={()=> handleCloseModal()}
                shouldCloseOnOverlayClick={true}
                className="Modal"
                overlayClassName="Overlay"
            >
                <ModalForm 
                    data={data}
                    setData={setData}
                    setIsModalOpen={setIsModalOpen}
                />
            </ReactModal>
        </div>
    );
}


const ResetCSS = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
    */
   html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
        border: none;
    }
    strong {
        font-weight: bold;
    }
`;

const GlobalStyle = createGlobalStyle`
    html {
        margin: 0px;
        height: 100%;
    }
    
    body {
        font-family: 'Poppins', sans-serif;
        background: #E5E5E5;
        padding: 0px;
        margin: 0px;
        height: 100%;
        width: 100%;
    }
    input {
        font-family: 'Poppins', sans-serif;
    }
`;


