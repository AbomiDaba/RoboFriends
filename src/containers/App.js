import CardList from '../components/cardList'
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'
import './App.css';
import { useEffect, useState } from 'react';


const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfeild, setSearchfeild] = useState('');

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)})
    }, [])
    const onSearchChange = (e) => {
        setSearchfeild(e.target.value)
    }
    const filterRobots = robots.filter(robot=> {
        return robot.name.toLowerCase().includes(searchfeild.toLocaleLowerCase())})

    return (
        <div className = 'tc'>
            <h1 className = 'f1'>RoboFriends</h1>
            <SearchBox searchChange = {onSearchChange} />
            <Scroll>
                <CardList robots = {filterRobots}/>
            </Scroll>
        </div>
    );
}



export default App;