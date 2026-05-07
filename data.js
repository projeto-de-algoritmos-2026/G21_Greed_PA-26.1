// data.js

/**
 * Gera um conjunto de jobs aleatórios para testar o algoritmo.
 * @param {number} count - Número de jobs a gerar.
 * @returns {Job[]} - Array de instâncias da classe Job.
 */
function generateRandomJobs(count = 10) {
    const jobs = [];
    
    // O horário simulado é entre as 08:00 (480 minutos) e 18:00 (1080 minutos)
    const minTime = 480; 
    const maxTime = 1080;

    for (let i = 1; i <= count; i++) {
        // Gera um tempo de início aleatório entre 08:00 e 16:00
        const start = Math.floor(Math.random() * (960 - minTime + 1)) + minTime;
        
        // Duração aleatória entre 30 a 180 minutos
        const duration = Math.floor(Math.random() * (180 - 30 + 1)) + 30;
        
        let end = start + duration;
        if (end > maxTime) end = maxTime;

        jobs.push(new Job(`Job-${i}`, start, end));
    }

    return jobs;
}
