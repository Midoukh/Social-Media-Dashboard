const themeModeName = document.querySelector('.toggle-theme h2');
const toggleSwitch = document.getElementById('button-toggle');
const switchButton = document.querySelector('#switch');
const hOnes = document.querySelector('.head-1')
const hTwo = document.querySelector('.head-2')
const divs = document.querySelector('.facebook-fol');
const twitterFollower = document.querySelector('.twitter-fol')



toggleSwitch.addEventListener('click', () => {
    if (themeModeName.textContent = 'Dark Mode'){
        themeModeName.textContent = 'Light Mode';
        themeModeName.style.opacity = '1';
        themeModeName.style.color = 'black';
        switchButton.style.backgroundColor = 'white';
        switchButton.style.left = '20px';
        document.body.classList.toggle('light-mode');
        hOnes.classList.toggle('light-mode-heads')
        hTwo.classList.toggle('light-mode-heads')
        divs.classList.toggle('div-light-mode');
        twitterFollower.classList.toggle('.div-light-mode')
    }
   if (themeModeName.textContent = 'Light Mode'){
    toggleSwitch.addEventListener('click', () => {
        themeModeName.textContent = 'Dark Mode';
        themeModeName.style.opacity = '0.5';
        themeModeName.style.color = 'white';
        switchButton.style.backgroundColor = 'hsl(230, 17%, 14%)';
        switchButton.style.left = '-0.002vh'
        switchButton.style.marginLeft = '2.5px'
    })
        
    }
   

})

