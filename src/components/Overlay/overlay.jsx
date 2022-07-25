import { motion } from 'framer-motion';
import './overlay.scss';
import '../../../src/styles/global.scss'

export default function Overlay(){
    return (
        <div animate={{ y:100 }} class="overlay">
            <div className='banner'>
                <h1 className='name' class="title">
                    <small class="subtitle">The personal site of</small>Fernando Andrés
                </h1>
                <img className='picture' src='https://media-exp1.licdn.com/dms/image/C4E03AQGf_c40YtYLOQ/profile-displayphoto-shrink_400_400/0/1653816833579?e=1664409600&v=beta&t=89vYL7ZSAMNhWeHfk45G091JauSpIwWL0UuHLZ77YfE'></img>
            </div>
            <div>
                <span class="role">👨🏻‍💻 FullStack Developer <span class="invert">👨🏻‍💻 FullStack Developer </span></span>&nbsp;
                <span class="role">🎙️ Speaker<span class="invert">🎙️ Speaker</span></span>&nbsp;
                <span class="role">🎩 Magician<span class="invert">🎩 Magician</span></span>
            </div>
            <p class="desc">Software Engenieer who loves Formula 1</p>
		</div>
    )
}