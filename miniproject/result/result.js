// Sample data - replace with your actual data
/*const plantData = {
    droughtResistance: 7,         // 1-10
    rootDepth: 45,                // cm
    leafAreaIndex: 2.8,           // dimensionless
    photosyntheticRate: 12.5,      // μmol CO₂/m²/s
    waterUseEfficiency: 3.2,      // dimensionless
    chlorophyllContent: 42,       // SPAD units or similar
    yieldPotential: 125           // g/plant
};

// Maximum values for each metric (for progress bars)
const maxValues = {
    droughtResistance: 10,
    rootDepth: 100,               // cm
    leafAreaIndex: 5,             // typical max for crops
    photosyntheticRate: 25,       // μmol CO₂/m²/s
    waterUseEfficiency: 5,        // dimensionless
    chlorophyllContent: 50,      // SPAD units
    yieldPotential: 200           // g/plant
};*/

// Update the UI with the data
document.addEventListener('DOMContentLoaded', function() {
    // Set the values
    document.getElementById('drought-resistance').textContent = plantData.droughtResistance;
    document.getElementById('root-depth').textContent = plantData.rootDepth + ' cm';
    document.getElementById('leaf-area').textContent = plantData.leafAreaIndex;
    document.getElementById('photo-rate').textContent = plantData.photosyntheticRate + ' μmol CO₂/m²/s';
    document.getElementById('water-efficiency').textContent = plantData.waterUseEfficiency;
    document.getElementById('chlorophyll').textContent = plantData.chlorophyllContent;
    document.getElementById('yield-potential').textContent = plantData.yieldPotential + ' g/plant';
    document.getElementById('overall-score').textContent = plantData.droughtResistance + '/10';

    // Set the progress bars


    // Update summary based on drought resistance score
    updateSummary(plantData.droughtResistance);
});



function updateSummary(score) {
    const summaryElement = document.getElementById('summary-text');
    let summaryText = '';
    
    if (score <= 3) {
        summaryText = `The plant shows low drought resistance. It may require frequent watering and protection from dry conditions. Consider selecting varieties with deeper root systems or smaller leaf area to improve drought tolerance.`;
    } else if (score <= 6) {
        summaryText = `The plant shows moderate drought resistance. It can tolerate some dry periods but may need supplemental watering during extended droughts. The root system is moderately developed, and the leaf area is reasonably adapted to reduce water loss.`;
    } else if (score <= 8) {
        summaryText = `The plant shows good drought resistance. It can withstand significant dry periods with minimal water requirements. The root system is well-developed, and the plant has effective mechanisms to conserve water while maintaining productivity.`;
    } else {
        summaryText = `The plant shows excellent drought resistance. It is highly adapted to arid conditions with deep roots, efficient water use, and mechanisms to maintain productivity even under severe water stress. This plant is ideal for dry environments.`;
    }
    
    summaryElement.textContent = summaryText;
}