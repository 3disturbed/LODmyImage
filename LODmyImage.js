export default class LODmyImage {
    constructor(config) {
        this.benchmarkFile = config.benchmarkFile; // URL of benchmarking file
        this.imageConfigs = config.imageConfigs; // Image LOD configuration
        this.thresholds = config.thresholds || { low: 5, medium: 20 }; // Mbps thresholds
        this.onComplete = config.onComplete || (() => {}); // Callback after benchmarking
    }

    async benchmarkConnection() {
        const startTime = performance.now();
        await fetch(this.benchmarkFile, { cache: "no-store" });
        const endTime = performance.now();

        const timeTaken = (endTime - startTime) / 1000; // seconds
        const fileSizeInBytes = 77824;
        const speedMbps = (fileSizeInBytes / (timeTaken * 125000)).toFixed(2);

        return parseFloat(speedMbps);
    }

    determineLOD(speedMbps) {
        if (speedMbps > this.thresholds.medium) return "high";
        if (speedMbps > this.thresholds.low) return "medium";
        return "low";
    }

    loadImages(lod) {
    const images = document.querySelectorAll("[data-low], [data-medium], [data-high]");

        images.forEach((img) => {
            const src = img.dataset[lod];
            if (src) img.src = src;
        });
    }

    async init() {
        const speed = await this.benchmarkConnection();
        const lod = this.determineLOD(speed);

        console.log(`Connection Speed: ${speed} Mbps, LOD: ${lod}`);
        this.loadImages(lod);

        if (typeof this.onComplete === "function") {
            this.onComplete(speed, lod);
        }
    }
}
