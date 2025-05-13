
# 🌦️ Weather App

> A responsive weather application built using
> 🟧 **`HTML`**    🎨 **`CSS`**    💡 **`JavaScript`**

A simple and responsive web app that displays real-time weather information using the **OpenWeatherMap API**. Ideal for beginners learning how to work with REST APIs and JavaScript.

---

This approach:

* Uses **emojis** and backtick formatting to highlight the tech stack.
* Places it **immediately below the title** to grab attention.
* Keeps it **clean and compatible** with GitHub’s rendering.

If you want to get even fancier (like badges), here's an optional version using [Shields.io](https://shields.io/) badges:

```md
## 🚀 Built With

[HTML](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
[CSS](https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
[JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
```
---

## 📸 Demo Video

🔗 [Watch it on LinkedIn](https://www.linkedin.com/posts/sumansekhar-sahoo_overview-objective-key-activity-7300877432868286464--1Fq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFbWbFkBBD_ckmIB0-Z1ZAk25yadMwBisI0)

---

# 🌐 Live Demo

🚀 [View Live Weather App](https://sumansekhar-sahoo.github.io/weather-app/)

---

## 📌 Overview

This project allows users to:

* Search for current weather by **city name**
* See **temperature**, **humidity**, **wind speed**, and **weather conditions**
* Handle **errors** like invalid city names
* Works on both **desktop and mobile** browsers

---

## 🎯 Objective

To build a lightweight web app that uses a public API to demonstrate:

* API integration using `fetch()`
* DOM manipulation
* Responsive UI with CSS
* JavaScript event handling

---

## 🛠️ Tech Stack

* **HTML5** – Page structure
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Logic, API calls, event handling
* **OpenWeatherMap API** – Weather data

---

## 📁 Project Structure

```
weather-app/
├── index.html
├── style.css
├── script.js
├── screenshot.png
└── README.md
```

---

## ⚙️ How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/SumanSekhar-Sahoo/weather-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd weather-app
   ```

3. Open `index.html` in your browser.

---

## 🔑 API Key Setup

This project uses the OpenWeatherMap API.

In `script.js`, the API key is:

```javascript
const apiKey = "377b55fdce5f43";
```

### Example API Call:

```javascript
const apiURL =`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
```

---

## ✅ Features

* 🌡️ Real-time weather data
* 🌍 Search by city
* 📱 Responsive layout
* ❌ Error handling
* 🔁 Dynamic content loading

---

## 🚧 Future Improvements

* [ ] Add weather icons
* [ ] Add 5-day forecast
* [ ] Use geolocation for current location weather
* [ ] Dark mode toggle

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request. For major changes, open an issue first.

---

## 📄 License

Licensed under the **MIT License**.

---

