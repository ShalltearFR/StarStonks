// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Maintenance des trips
require("./db/delete.olderTrip");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials")

hbs.registerHelper('eq', (a, b) => a == b)

hbs.registerHelper('toShortDate', (date) => {
    const longDate = new Date(date)
    const year = longDate.getFullYear()

    let day = `${longDate.getDate() + 1}`
    if (day.length === 1){day = `0${day}`}

    let month = `${longDate.getMonth() + 1}`
    if (month.length === 1){month = `0${month}`}

    return `${day}/${month}/${year}`
})

hbs.registerHelper('toLongDate', (date) => {
    const longDate = new Date(date)
    const year = longDate.getFullYear()
    const month = (function(){
        if (longDate.getMonth() === 0 ){ return "Janvier"}
        if (longDate.getMonth() === 1 ){ return "Fevrier"}
        if (longDate.getMonth() === 2 ){ return "Mars"}
        if (longDate.getMonth() === 3 ){ return "Avril"}
        if (longDate.getMonth() === 4 ){ return "Mai"}
        if (longDate.getMonth() === 5 ){ return "Juin"}
        if (longDate.getMonth() === 6 ){ return "Juillet"}
        if (longDate.getMonth() === 7 ){ return "Aout"}
        if (longDate.getMonth() === 8 ){ return "Septembre"}
        if (longDate.getMonth() === 9 ){ return "Octobre"}
        if (longDate.getMonth() === 10){ return "Novembre"}
        if (longDate.getMonth() === 11){ return "Decembre"}
    })()

    const fullDay = (function () {
        if (longDate.getDay() === 0){ return "Dimanche"}
        if (longDate.getDay() === 1){ return "Lundi"}
        if (longDate.getDay() === 2){ return "Mardi"}
        if (longDate.getDay() === 3){ return "Mercredi"}
        if (longDate.getDay() === 4){ return "Jeudi"}
        if (longDate.getDay() === 5){ return "Vendredi"}
        if (longDate.getDay() === 6){ return "Samedi"}
    })()
    let day = `${longDate.getDate() + 1}`
    if (day.length === 1){day = `0${day}`}

    return `${fullDay} ${day} ${month} ${year}`
})

hbs.registerHelper('calculDuration', (date, arrived) => {
    const diffMs = arrived.getTime() - date.getTime() // milliseconds between now & Christmas
    const diffDays = Math.floor(diffMs / 86400000); // days
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    if (diffMins === 0){ diffMins = "00"}
    if (diffDays === 0){ return `${diffHrs}h${diffMins}` }
    if (diffDays === 1){ return `${diffDays}jour et ${diffHrs}h${diffMins}`}
    if (diffDays  >  1){ return `${diffDays}jours et ${diffHrs}h${diffMins}`}
   
})

hbs.registerHelper('toArrived', (arrived) => {
    const hours = arrived.getHours()
    let minutes = `${arrived.getMinutes()}`

    if (minutes.length < 2){
        minutes = `0${minutes}`
    }
    return `${hours}h${minutes} `
})

hbs.registerHelper('numberToMoney', (price) => {
    return price.toLocaleString()
})

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
