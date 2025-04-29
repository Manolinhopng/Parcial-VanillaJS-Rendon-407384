document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const element = document.body;

<<<<<<< HEAD
            html2canvas(element, {
                scale: 2,
                useCORS: true
            }).then(canvas => {
                const imgData = canvas.toDataURL('image/jpeg', 1.0);

                const {
                    jsPDF
                } = window.jspdf;
                const pdf = new jsPDF('p', 'pt', 'letter');

                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();

                const canvasRatio = canvas.width / canvas.height;
                const pdfRatio = pageWidth / pageHeight;

                let imgWidth, imgHeight;

                if (canvasRatio > pdfRatio) {
                    imgWidth = pageWidth;
                    imgHeight = pageWidth / canvasRatio;
                } else {
                    imgHeight = pageHeight;
                    imgWidth = pageHeight * canvasRatio;
                }

                const x = (pageWidth - imgWidth) / 2;
                const y = (pageHeight - imgHeight) / 2;

                pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
                pdf.save('pagina_completa.pdf');
            }).catch(error => {
                console.error('Error al capturar la imagen:', error);
            });
        });
    }
});
const contactForm = document.getElementById("contactForm");
if (contactForm) {
=======
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

>>>>>>> 3d3ea9fdd9a0226c9f198360df5431e2f54c7437
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
<<<<<<< HEAD
}
=======
});
>>>>>>> 3d3ea9fdd9a0226c9f198360df5431e2f54c7437
