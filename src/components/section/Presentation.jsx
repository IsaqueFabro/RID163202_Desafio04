import styles from './Presentation.module.css'
import { useEffect, useState } from 'react'
import ButtonA from '../elements/ButtonA'

function Presentation() {

    const [text, setText] = useState('');
    const toRotate = [' Bem vindo ao meu portifolio ', '  Sou aspirante a Dev. Full-stack',];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)
    
    useEffect(() => {
        let ticker = setInterval(() => {
            toType() 
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (!isDeleting && updatedText === fullText) {    
            setIsDeleting(true);      
            setDelta(250);

        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }
 

    return (
        <div id="presentation" className={styles.Presentation}>
            <h1><strong> Olá, eu sou Isaque F.  </strong></h1>
            <h2>*{text}</h2>

            <ul>
                <li> &nbsp;Estudante de tecnologia; </li>
                <li> &nbsp;Cursando Eng da computacao na UNISUL; </li>
                <li> &nbsp;Interesse em desenvolvimento fullstack; </li>
                <li> &nbsp;Buscando novos desafios; </li>
            </ul>

            <div><ButtonA  text='Saber mais!' link='https://www.linkedin.com/in/isaque-fabro/' /></div>

        </div>
    )
} 

export default Presentation
