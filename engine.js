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
