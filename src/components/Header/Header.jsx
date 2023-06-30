import React from 'react';
import styles from './Header.module.css'
import { useDarkMode } from '../../context/DarkModeContext';
import {HiMoon, HiSun} from "react-icons/hi"

export default function Header({filters,filter,onFilterChange}) {
    const {darkMode,toggleDarkMode} = useDarkMode();
    const handleChange = (value) => {
        onFilterChange(value);
    }
    const handleDarkMode = () => toggleDarkMode();
    return (
        <header className={styles.header}>
            <button onClick={handleDarkMode} className={styles.toggle}>
                {!darkMode && <HiMoon/>}
                {darkMode && <HiSun/>}
            </button>
            <ul className={styles.filters}>
                {filters.map((value, index)=> 
                    <li key={index}>
                        <button onClick={()=>handleChange(value)} 
                        className={`${styles.filter} ${filter===value && styles.selected}`}>{value}
                        </button>
                    </li>
                )}
            </ul>
        </header>
    );
}

