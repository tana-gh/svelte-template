import App from './components/App.svelte'
import '../assets/scss/style.scss'

const elem = document.getElementById('app')

if (elem) new App({ target: elem })
