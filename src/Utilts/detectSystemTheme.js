import React from 'react'
import { store } from '../Store/Store';
import { useDispatch } from 'react-redux';
import { setSystemTheme } from '../features/theme/themeSlice';
function detectSystemTheme() {
    let systemTheme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    console.log("darkModeMediaQuery : ", darkModeMediaQuery)
    const setTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        console.log("storedTheme : ", storedTheme)
        const systemTheme = storedTheme ? storedTheme : (darkModeMediaQuery.matches ? 'dark' : 'light');
        console.log("sysmte theme : ", systemTheme)
        store.dispatch(setSystemTheme(systemTheme))
        document.documentElement.classList.add(systemTheme);

    }
    setTheme();

}

export default detectSystemTheme