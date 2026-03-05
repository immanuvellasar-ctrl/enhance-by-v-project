/* ============================================
   ENHANCE_BY_V — Booking Form JS
   File: js/booking.js
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('bookingForm');
  if (!form) return;

  /* Set min date on date picker to today */
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  /* ── VALIDATION HELPERS ── */
  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) { el.textContent = msg; el.classList.add('visible'); }
  }
  function clearError(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('visible');
  }
  function markError(inputId) {
    const el = document.getElementById(inputId);
    if (el) el.classList.add('error');
  }
  function clearInputError(inputId) {
    const el = document.getElementById(inputId);
    if (el) el.classList.remove('error');
  }

  /* Clear errors on input */
  ['name', 'phone', 'email', 'service', 'date'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        clearError(id + 'Err');
        clearInputError(id);
      });
    }
  });

  /* ── FORM SUBMIT VALIDATION ── */
  form.addEventListener('submit', function (e) {
    let valid = true;

    // Name
    const name = document.getElementById('name');
    if (!name || name.value.trim().length < 2) {
      showError('nameErr', 'Please enter your full name.');
      markError('name'); valid = false;
    } else clearError('nameErr');

    // Phone
    const phone = document.getElementById('phone');
    const phoneVal = phone ? phone.value.replace(/\s/g, '') : '';
    if (!phoneVal || phoneVal.length < 8) {
      showError('phoneErr', 'Please enter a valid phone number.');
      markError('phone'); valid = false;
    } else clearError('phoneErr');

    // Email
    const email = document.getElementById('email');
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRx.test(email.value)) {
      showError('emailErr', 'Please enter a valid email address.');
      markError('email'); valid = false;
    } else clearError('emailErr');

    // Service
    const service = document.getElementById('service');
    if (!service || !service.value) {
      showError('serviceErr', 'Please select a service.');
      markError('service'); valid = false;
    } else clearError('serviceErr');

    // Date
    const date = document.getElementById('date');
    if (!date || !date.value) {
      showError('dateErr', 'Please select your preferred date.');
      markError('date'); valid = false;
    } else clearError('dateErr');

    if (!valid) {
      e.preventDefault();
      // Scroll to first error
      const firstErr = form.querySelector('.error');
      if (firstErr) {
        const navHeight = 76;
        const top = firstErr.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      return;
    }

    /* 
      If you're NOT using Formspree and want to handle it with JS fetch:
      
      e.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      const data = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(res => {
        if (res.ok) {
          document.getElementById('formSuccess').style.display = 'block';
          form.reset();
        } else {
          alert('Something went wrong. Please try again or call us directly.');
        }
      })
      .catch(() => alert('Network error. Please call us directly.'))
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Booking Request ✦';
      });
    */

    // Default: let Formspree handle the POST naturally
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }
  });

});
