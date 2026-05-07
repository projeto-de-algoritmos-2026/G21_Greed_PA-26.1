// engine.js

/**
 * Representa um Batch Job.
 */
class Job {
    constructor(id, startTime, endTime) {
        this.id = id;
        this.startTime = startTime; // tempo em minutos
        this.endTime = endTime;
        this.resourceId = null; // ID do servidor alocado
    }
}

/**
 * Ordena os jobs pelo seu tempo de início crescente.
 * @param {Job[]} jobs - Array de jobs a ordenar.
 * @returns {Job[]} - Array ordenado.
 */
function sortJobsByStartTime(jobs) {
    return jobs.sort((a, b) => a.startTime - b.startTime);
}

/**
 * Implementa o algoritmo de Interval Partitioning.
 * @param {Job[]} jobs - Array de jobs não processados.
 * @returns {Job[]} - Array de jobs com resourceId atualizado.
 */
function intervalPartitioning(jobs) {
    if (!jobs || jobs.length === 0) return [];

    const sortedJobs = sortJobsByStartTime([...jobs]);
    
    // Array para monitorizar os endTimes das salas/servidores
    const serversEndTimes = [];

    sortedJobs.forEach(job => {
        let assigned = false;

        for (let i = 0; i < serversEndTimes.length; i++) {
            if (serversEndTimes[i] <= job.startTime) {
                job.resourceId = i;
                serversEndTimes[i] = job.endTime;
                assigned = true;
                break;
            }
        }

        if (!assigned) {
            job.resourceId = serversEndTimes.length;
            serversEndTimes.push(job.endTime);
        }
    });

    return sortedJobs;
}
