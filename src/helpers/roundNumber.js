export default function roundNumber(population) {
    let roundedPopulation = population.replaceAll(",", '')
    roundedPopulation = parseInt(population, 10);
    Math.round(roundedPopulation);
    return roundedPopulation / 1000;
}