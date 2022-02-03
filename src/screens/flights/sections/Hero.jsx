import Button from './../../../components/Button';
import worldmap from './../../../assets/world-map.png' 
import InputField from '../components/InputField';
import {motion} from 'framer-motion'

//Icons
import arrival from './../../../assets/icons/arrival.svg'
import calendar from './../../../assets/icons/calendar.svg'
import departure from './../../../assets/icons/departure.svg'
import person from './../../../assets/icons/person.svg'

export default function Hero(){
    const styles = {
        backgroundImage: `url(${worldmap})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
    };

    const textAnimation = {
        y:0,
        transition: { 
            duration: 1,
            ease: 'easeOut',
            from: -50,
        },
    }

    const searchBarAnimation = {
        opacity:1,
        transition: { 
            duration: 0.5,
            ease: 'easeOut',
            from: 0,
            delay: 0.6,
        },
    }

    return <div style={styles} className='h-[700px] flex flex-col items-center justify-center select-none'>
        <motion.div animate={textAnimation} className='text-center text-[110px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-purple-blue via-blue to-turquoise mb-36'>
            It's more than<br/>just a trip
        </motion.div>

        <motion.div animate={searchBarAnimation} className='flex shadow-lg'>
            <InputField placeholder="From where?" first={true} icon={departure}/>
            <InputField placeholder="Where to?" icon={arrival}/>
            <InputField placeholder="Depart - Return?" icon={calendar}/>
            <InputField placeholder="1 adult" icon={person}/>
            <Button text="Search"/>
        </motion.div>
    </div>;
}