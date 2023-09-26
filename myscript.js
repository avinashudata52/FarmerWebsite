document.addEventListener("DOMContentLoaded", function () {
    const weatherSelect = document.getElementById("weather-select");
    const cropSelect = document.getElementById("crop-select");
    const fertilizerSelect = document.getElementById("fertilizer-select");
    const contentSelect = document.getElementById("content-select");

    const selectedWeather = document.getElementById("selected-weather");
    const selectedCrop = document.getElementById("selected-crop");
    const selectedFertilizer = document.getElementById("selected-fertilizer");
    const selectedContent = document.getElementById("selected-content");

    // Define data for weather, crops, fertilizers, and contents
    const data = {
        rainfall: {
            crops: ["Rice", "Maize", "Wheat", "Cotton", "Barley", "Soybean", "Jute", "Tea", "Coffee", "Sugarcane"],
            fertilizers: ["Urea", "Phosphate", "Nitrogen", "Potassium", "Organic"],
            contents: ["Potassium", "Phosphorus", "Nitrogen"],
        },
        temperature: {
            crops: ["Tomatoes", "Chilies", "Eggplants", "Cucumber", "Cabbage", "Spinach", "Carrots", "Lettuce", "Bell Peppers", "Radishes"],
            fertilizers: ["NPK", "Potash", "Ammonium Sulfate", "Lime", "Calcium Nitrate"],
            contents: ["Calcium", "Magnesium", "Sulfur", "Iron", "Boron"],
        },
        humidity: {
            crops: ["Bananas", "Pineapples", "Mangoes", "Papayas", "Guavas", "Oranges", "Lemons", "Limes", "Lychees", "Dragon Fruits"],
            fertilizers: ["Organic", "Fish Emulsion", "Seaweed Extract", "Compost", "Vermicompost"],
            contents: ["Humic Acid", "Fulvic Acid", "Kelp Extract", "Microorganisms", "Nutrient-Rich Organic Matter"],
        },
        frost: {
            crops: ["Apples", "Pears", "Grapes", "Cherries", "Plums", "Apricots", "Peaches", "Nectarines", "Almonds", "Walnuts"],
            fertilizers: ["Phosphate", "Potassium Sulfate", "Ammonium Nitrate", "Limestone", "Dolomite"],
            contents: ["Calcium", "Boron", "Zinc", "Magnesium", "Manganese"],
        },
        drought: {
            crops: ["Cacti", "Agave", "Aloe Vera", "Yucca", "Sedum", "Lavender", "Echeveria", "Sempervivum", "Kalanchoe", "Portulaca"],
            fertilizers: ["Low-Nitrogen", "High-Potassium", "Slow-Release", "Water-Soluble", "Drought-Tolerant"],
            contents: ["Silica", "Calcium", "Iron", "Manganese", "Copper"],
        },
        flood: {
            crops: ["Rice", "Cranberries", "Taro", "Aquatic Plants", "Swamp Cabbage", "Water Spinach", "Reeds", "Water Chestnuts", "Watercress", "Arrowhead"],
            fertilizers: ["Organic", "NPK", "Phosphate", "Nitrogen", "Potassium"],
            contents: ["Sulfur", "Magnesium", "Manganese", "Copper", "Iron"],
        },
        windy: {
            crops: ["Wheat", "Barley", "Oats", "Rye", "Flax", "Amaranth", "Safflower", "Buckwheat", "Lentils", "Chickpeas"],
            fertilizers: ["NPK", "Ammonium Nitrate", "Potash", "Urea", "Sulfur"],
            contents: ["Phosphorus", "Sulfur", "Zinc", "Molybdenum", "Boron"],
        },
        thunderstorm: {
            crops: ["Corn", "Sorghum", "Sunflowers", "Soybeans", "Peanuts", "Cotton", "Canola", "Tobacco", "Rice", "Sesame"],
            fertilizers: ["Nitrogen", "Phosphate", "Potassium", "Sulfur", "Micronutrients"],
            contents: ["Nitrogen", "Phosphorus", "Potassium", "Sulfur", "Copper"],
        },
        hailstorm: {
            crops: ["Grapes", "Apples", "Pears", "Stone Fruits", "Blueberries", "Blackberries", "Raspberries", "Strawberries", "Cucumbers", "Tomatoes"],
            fertilizers: ["Potash", "Calcium Nitrate", "Boron", "Magnesium Sulfate", "Manganese Sulfate"],
            contents: ["Calcium", "Magnesium", "Boron", "Manganese", "Zinc"],
        },
        monsoon: {
            crops: ["Rice", "Jute", "Tea", "Coffee", "Bananas", "Rubber", "Sugarcane", "Black Pepper", "Turmeric", "Ginger"],
            fertilizers: ["Urea", "Phosphate", "Potassium", "Sulfur", "Organic"],
            contents: ["Potassium", "Phosphorus", "Nitrogen", "Sulfur", "Magnesium"],
        },
        // Add more weather conditions and corresponding data as needed
    };

    // ... rest of the JavaScript code
});