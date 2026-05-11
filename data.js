function generateRandomJobs(count = 10) {
    const jobs = [];
    const minHour = 8;
    const maxHour = 18;

    for (let i = 1; i <= count; i++) {
        const startHour = Math.floor(Math.random() * (maxHour - minHour)) + minHour;
        const startMin = Math.random() > 0.5 ? 30 : 0;
        const start = startHour * 60 + startMin;

        const durationHours = Math.floor(Math.random() * 3) + 1;
        const durationMins = Math.random() > 0.5 ? 30 : 0;
        const duration = durationHours * 60 + durationMins;

        let end = start + duration;
        if (end > maxHour * 60) end = maxHour * 60;

        jobs.push(new Job(`Job-${i}`, start, end));
    }

    return jobs;
}
