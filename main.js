const button = document.querySelector('.fas')
const searchBox = document.querySelector('.search-box')
const icon2 = document.querySelector('.icon2')
const city = document.querySelector('.city')
const weatherDate = document.querySelector('.weatherDate')
const temp = document.querySelector('.temp')
const weather = document.querySelector('.weather')
const humidity = document.querySelector('.humidity')
const londonButton = document.querySelector('.london')
const amsterdamButton = document.querySelector('.amsterdam')
const parisButton = document.querySelector('.paris')
const berlinButton = document.querySelector('.berlin')
const madridButton = document.querySelector('.madrid')


button.addEventListener("click", fetchSearch)

async function fetchSearch (){
    const weatherResponse = await fetch ('https://api.openweathermap.org/data/2.5/weather?q='+searchBox.value+'&units=metric&appid=dbb45a93ce752788381a20675a5a9c02')
    const data = await weatherResponse.json()
    console.log(data)

    //get icon data from fetch
    let icon = data.weather[0].icon
    //use image tag to use the URL for the icon
    const iconURL = `<img src = "http://openweathermap.org/img/wn/${icon}@2x.png">`
    //just before you insert the img tag empty the one before
    icon2.innerHTML = ''
    //insert the image tag into the div you want on HTML page
    icon2.insertAdjacentHTML('beforeend', iconURL)
    city.innerText= data.name
    let date = new Date() 
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let todaysDate = day + '/' + month + '/' + year 
    weatherDate.innerText = todaysDate
    const round = `${Math.floor(data.main.temp)}°`
    temp.innerText = round
    weather.innerText = data.weather[0].main
    humidity.innerText = `${data.main.humidity}% humidty`
}



londonButton.addEventListener("click", getLondon)

async function getLondon(){
    const weatherResponse = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=dbb45a93ce752788381a20675a5a9c02')
    const data = await weatherResponse.json()
    
    //get icon data from fetch
    let icon = data.weather[0].icon
    //use image tag to use the URL for the icon
    const iconURL = `<img src = "http://openweathermap.org/img/wn/${icon}@2x.png">`
    //just before you insert the img tag empty the one before
    icon2.innerHTML = ''
    //insert the image tag into the div you want on HTML page
    icon2.insertAdjacentHTML('beforeend', iconURL)
    city.innerText= data.name
    let date = new Date() 
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let todaysDate = day + '/' + month + '/' + year 
    weatherDate.innerText = todaysDate
    const round = `${Math.floor(data.main.temp)}°`
    temp.innerText = round
    weather.innerText = data.weather[0].main
    humidity.innerHTML = `${data.main.humidity}% humidity`
    
}



amsterdamButton.addEventListener("click", getAmsterdam)

async function getAmsterdam(){
    const weatherResponse = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=dbb45a93ce752788381a20675a5a9c02')
    const data = await weatherResponse.json()

    //get icon data from fetch
    let icon = data.weather[0].icon
    //use image tag to use the URL for the icon
    const iconURL = `<img src = "http://openweathermap.org/img/wn/${icon}@2x.png">`
    //just before you insert the img tag empty the one before
    icon2.innerHTML = ''
    //insert the image tag into the div you want on HTML page
    icon2.insertAdjacentHTML('beforeend', iconURL)
    city.innerText= data.name
    let date = new Date() 
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let todaysDate = day + '/' + month + '/' + year 
    weatherDate.innerText = todaysDate
    const round = `${Math.floor(data.main.temp)}°`
    temp.innerText = round
    weather.innerText = data.weather[0].main
    humidity.innerHTML = `${data.main.humidity}% humidity`
}



parisButton.addEventListener("click", getParis)

async function getParis(){
    const weatherResponse = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=dbb45a93ce752788381a20675a5a9c02')
    const data = await weatherResponse.json()

    //get icon data from fetch
    let icon = data.weather[0].icon
    //use image tag to use the URL for the icon
    const iconURL = `<img src = "http://openweathermap.org/img/wn/${icon}@2x.png">`
    //just before you insert the img tag empty the one before
    icon2.innerHTML = ''
    //insert the image tag into the div you want on HTML page
    icon2.insertAdjacentHTML('beforeend', iconURL)
    city.innerText= data.name
    let date = new Date() 
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let todaysDate = day + '/' + month + '/' + year 
    weatherDate.innerText = todaysDate
    const round = `${Math.floor(data.main.temp)}°`
    temp.innerText = round
    weather.innerText = data.weather[0].main
    humidity.innerHTML = `${data.main.humidity}% humidity`
    
}


berlinButton.addEventListener("click", getBerlin)

async function getBerlin(){
    const weatherResponse = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid=dbb45a93ce752788381a20675a5a9c02')
    const data = await weatherResponse.json()

    //get icon data from fetch
    let icon = data.weather[0].icon
    //use image tag to use the URL for the icon
    const iconURL = `<img src = "http://openweathermap.org/img/wn/${icon}@2x.png">`
    //just before you insert the img tag empty the one before
    icon2.innerHTML = ''
    //insert the image tag into the div you want on HTML page
    icon2.insertAdjacentHTML('beforeend', iconURL)
    city.innerText= data.name
    let date = new Date() 
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let todaysDate = day + '/' + month + '/' + year 
    weatherDate.innerText = todaysDate
    const round = `${Math.floor(data.main.temp)}°`
    temp.innerText = round
    weather.innerText = data.weather[0].main
    humidity.innerHTML = `${data.main.humidity}% humidity`
    
}


madridButton.addEventListener("click", getMadrid)

async function getMadrid(){
    const weatherResponse = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=dbb45a93ce752788381a20675a5a9c02')
    const data = await weatherResponse.json()

    //get icon data from fetch
    let icon = data.weather[0].icon
    //use image tag to use the URL for the icon
    const iconURL = `<img src = "http://openweathermap.org/img/wn/${icon}@2x.png">`
    //just before you insert the img tag empty the one before
    icon2.innerHTML = ''
    //insert the image tag into the div you want on HTML page
    icon2.insertAdjacentHTML('beforeend', iconURL)
    city.innerText= data.name
    let date = new Date() 
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let todaysDate = day + '/' + month + '/' + year 
    weatherDate.innerText = todaysDate
    const round = `${Math.floor(data.main.temp)}°`
    temp.innerText = round
    weather.innerText = data.weather[0].main
    humidity.innerHTML = `${data.main.humidity}% humidity`
}


