document.getElementById('analyzeBtn').addEventListener('click', () => {
  const symptoms = document.getElementById('symptoms').value.toLowerCase();
  const output = document.getElementById('output');
  output.style.display = 'block';
  // Add small delay to ensure display block is applied first
  requestAnimationFrame(() => {
    output.classList.add('visible');
  });

  let result = "";

  if (symptoms.includes('fever') || symptoms.includes('cold')) {
    result = "Possible Condition: Common Cold or Flu\nAdvice: Drink warm fluids and rest well.";
  }
  else if (symptoms.includes('headache') || symptoms.includes('dizzy')) {
    result = "Possible Condition: Migraine or Dehydration\nAdvice: Stay hydrated and avoid bright lights.";
  }
  else if (symptoms.includes('cough') || symptoms.includes('throat')) {
    result = "Possible Condition: Throat Infection\nAdvice: Gargle with warm salt water and avoid cold drinks.";
  }
  else {
    result = "AI Suggestion: Unable to identify exact condition. Please consult a doctor if symptoms persist.";
  }

  output.textContent = result;
});
