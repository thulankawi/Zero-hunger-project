document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const progressValue = document.getElementById('progress-value');
    const summaryDiv = document.getElementById('summary');
    let currentStep = 0;

    const updateProgress = () => {
        progressValue.textContent = `${((currentStep + 1) / steps.length) * 100}%`;
    };

    const showStep = (index) => {
        steps.forEach((step, idx) => step.classList.toggle('active', idx === index));
        updateProgress();
    };

    const generateSummary = () => {
        const formData = new FormData(document.getElementById('profile-form'));
        summaryDiv.innerHTML = ''; // Clear previous summary
        formData.forEach((value, key) => {
            const p = document.createElement('p');
            p.textContent = `${key}: ${value}`;
            summaryDiv.appendChild(p);
        });
    };

    const handleStepChange = (direction) => {
        currentStep = Math.max(0, Math.min(steps.length - 1, currentStep + direction));
        if (currentStep === steps.length - 1) generateSummary();
        showStep(currentStep);
    };

    document.querySelectorAll('.next-btn').forEach(btn => btn.addEventListener('click', () => handleStepChange(1)));
    document.querySelectorAll('.prev-btn').forEach(btn => btn.addEventListener('click', () => handleStepChange(-1)));
    document.querySelectorAll('.skip-btn').forEach(btn => btn.addEventListener('click', () => handleStepChange(1)));

    document.getElementById('profile-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Profile submitted successfully!');
        // Add logic to handle form submission
    });

    showStep(currentStep);
});
