import styles from './search_header.module.css'
import React, { memo, useRef } from 'react';
// import logo from '/images/logo.png/'

const SearchHeader = memo(({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    };
    const onClick = () => {
        handleSearch();
    };
    const onKeypress = (event) => {
        if(event.key==='Enter'){
            handleSearch();
        }
    };
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                <h1 className={styles.title} >Youtube</h1>
            </div>
            <input 
            ref={inputRef}
            className={styles.input}
             type="search" 
             placeholder='search...'
              onKeyPress={onKeypress}/>
            <button className={styles.button} type='submit' onClick={onClick}>
                <img className={styles.buttonImg} src={process.env.PUBLIC_URL + '/images/search.png'} alt='search' />
            </button>
        </header>
    );
}
);

export default SearchHeader;
