const EMAILJS_SERVICE_ID = 'service_15qo6hl';
const EMAILJS_TEMPLATE_ID = 'template_4esdx1m';
const EMAILJS_PUBLIC_KEY = 'uiEqw1amFnik6DRhf';

emailjs.init(EMAILJS_PUBLIC_KEY);

document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");
    const cvContent = document.getElementById("cvContent");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            alert("¡Botón clickeado!"); // Prueba simple
            console.log("¡Botón clickeado!");
            const element = cvContent;
            const opt = {
                margin: 0.5,
                filename: "mi_cv.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
            };
            html2pdf().set(opt).from(element).save();
        });
    }
});


const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitBtn"); 
const formStatus = document.getElementById("formStatus"); 

if (contactForm && submitButton && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";
        formStatus.textContent = ""; 
        formStatus.className = 'form-status';

        const formData = {
            name: document.getElementById("nombre").value,
            email_id: document.getElementById("email").value,
            subject: document.getElementById("asunto").value,
            message: document.getElementById("mensaje").value
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
            .then(function (response) {
                console.log('ÉXITO!', response.status, response.text);
                formStatus.textContent = "¡Mensaje enviado correctamente!";
                formStatus.classList.add('success');
                contactForm.reset(); // Limpiar formulario
            }, function (error) {
                console.error('FALLO...', error);
                formStatus.textContent = "Error al enviar. Intenta de nuevo.";
                 formStatus.classList.add('error');
            })
            .finally(() => {
                 submitButton.disabled = false;
                 submitButton.textContent = "Enviar";
            });
    });
} else {
     if (!contactForm) console.error("Elemento con ID 'contactForm' no encontrado.");
     if (!submitButton) console.error("Elemento con ID 'submitBtn' no encontrado.");
     if (!formStatus) console.error("Elemento con ID 'formStatus' no encontrado.");
}
