document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('multiStepForm');
    const steps = document.querySelectorAll('.step');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const submitBtn = document.querySelector('.submit-btn');
    const reviewData = document.getElementById('reviewData');
    const confirmationMessage = document.getElementById('confirmationMessage');
    let currentStep = 0;
  
    const validateStep = () => {
      const currentStepFields = steps[currentStep].querySelectorAll('input, select');
      let isValid = true;
      currentStepFields.forEach(field => {
        if (!field.checkValidity()) {
          isValid = false;
        }
      });
      return isValid;
    };
  
    const showStep = (stepIndex) => {
      steps.forEach((step, index) => {
        step.classList.toggle('active', index === stepIndex);
      });
      updateProgressBar(stepIndex);
    };
  
    const updateProgressBar = (stepIndex) => {
      const progress = document.querySelector('.progress-bar');
      progress.style.width = ((stepIndex + 1) / steps.length) * 100 + '%';
    };
  
    const collectFormData = () => {
      const formData = new FormData(form);
      return Object.fromEntries(formData.entries());
    };
  
    nextBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        if (validateStep()) {
          currentStep++;
          showStep(currentStep);
          if (currentStep === steps.length - 1) {
            const data = collectFormData();
            reviewData.innerHTML = `
              <pre>${JSON.stringify(data, null, 2)}</pre>
            `;
          }
        } else {
          alert('Please fill out all required fields correctly.');
        }
      });
    });
  
    prevBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        currentStep--;
        showStep(currentStep);
      });
    });
  
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = collectFormData();
      confirmationMessage.innerHTML = `<h3>Thank you! Your form has been submitted successfully.</h3>`;
      console.log('Form Data:', data);
      form.reset();
      currentStep = 0;
      showStep(currentStep);
    });
  
    showStep(currentStep);
  });
  