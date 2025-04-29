document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const element = document.body;

            const opt = {
                margin: 0.5,
                filename: "mi_cv.pdf",
                image: {
                    type: "jpeg",
                    quality: 0.98
                },
                html2canvas: {
                    scale: 2
                },
                jsPDF: {
                    unit: "in",
                    format: "letter",
                    orientation: "portrait"
                },
            };

            html2pdf().set(opt).from(element).save();
        });
    }

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const asunto = document.getElementById("asunto").value;
        const mensaje = document.getElementById("mensaje").value;

        emailjs.send('service_15qo6hl', 'template_4esdx1m', {
            name: nombre,
            email_id: email,
            subject: asunto,
            message: mensaje
        }).then(function (response) {
            alert("¡Mensaje enviado correctamente!");
            contactForm.reset();

            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = "Enviar";
            }, 10000);

        }, function (error) {
            alert("Error al enviar el mensaje. Intenta de nuevo.");
            console.error(error);

            submitButton.disabled = false;
            submitButton.textContent = "Enviar";
        });
    });
});