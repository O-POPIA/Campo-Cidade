document.addEventListener('DOMContentLoaded', function() {
	const menuLinks = document.querySelectorAll('.menu a');
  
	menuLinks.forEach(link => {
	  link.addEventListener('click', function(event) {
		// Remove a classe 'active' de todos os links
		menuLinks.forEach(otherLink => {
		  otherLink.classList.remove('active');
		});
		// Adiciona a classe 'active' ao link clicado
		this.classList.add('active');
	  });
	});
  
	// Opcional: Adicionar a classe 'active' ao primeiro link por padrão no carregamento da página
	window.onload = function() {
	  if (menuLinks.length > 0 && window.location.hash) {
		menuLinks.forEach(link => {
		  if (link.getAttribute('href') === window.location.hash) {
			link.classList.add('active');
		  }
		});
	  } else if (menuLinks.length > 0) {
		menuLinks[0].classList.add('active');
	  }
	};
  });
document.addEventListener('DOMContentLoaded', function() {
    const galleryLinks = document.querySelectorAll('.galeria-grid a');
    const lightboxOverlay = document.querySelector('.lightbox-overlay'); // Seleciona o overlay existente
    const lightboxImage = document.querySelector('.lightbox-image');     // Seleciona a imagem existente
    const lightboxCloseButton = document.querySelector('.lightbox-close'); // Seleciona o botão de fechar
    const lightboxPrevButton = document.querySelector('.lightbox-prev');   // Seleciona o botão anterior
    const lightboxNextButton = document.querySelector('.lightbox-next');   // Seleciona o botão próximo

    let currentImageIndex;

    function showLightbox(index) {
        if (index >= 0 && index < galleryLinks.length) {
            currentImageIndex = index;
            lightboxImage.src = galleryLinks[index].href;
            lightboxOverlay.style.display = 'flex';
        }
    }

    function closeLightbox() {
        lightboxOverlay.style.display = 'none';
    }

    galleryLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            showLightbox(index);
        });
    });

    lightboxCloseButton.addEventListener('click', function(event) {
        event.preventDefault();
        closeLightbox();
    });

    lightboxPrevButton.addEventListener('click', function(event) {
        event.preventDefault(); // Adicionado para evitar comportamento padrão do link
        showLightbox(currentImageIndex - 1);
    });

    lightboxNextButton.addEventListener('click', function(event) {
        event.preventDefault(); // Adicionado para evitar comportamento padrão do link
        showLightbox(currentImageIndex + 1);
    });

    // Fechar ao clicar fora da imagem
    lightboxOverlay.addEventListener('click', function(event) {
        if (event.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    // Navegação por teclado (opcional)
    document.addEventListener('keydown', function(event) {
        if (lightboxOverlay.style.display === 'flex') {
            if (event.key === 'Escape') {
                closeLightbox();
            } else if (event.key === 'ArrowLeft') {
                showLightbox(currentImageIndex - 1);
            } else if (event.key === 'ArrowRight') {
                showLightbox(currentImageIndex + 1);
            }
        }
    });

document.addEventListener('DOMContentLoaded', function() {
    const somDoClique = document.getElementById('somDoClique');

    document.body.addEventListener('click', function() {
        try {
            somDoClique.currentTime = 0;
            somDoClique.play();
        } catch (error) {
            console.error("Erro ao reproduzir o som de clique:", error);
        }
    });
});

    // Inicialização: Criação dos elementos do lightbox SE eles não existirem
    if (!lightboxOverlay) {
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.classList.add('lightbox-overlay');
        const lightboxContainer = document.createElement('div');
        lightboxContainer.classList.add('lightbox-container');
        const lightboxImage = document.createElement('img');
        lightboxImage.classList.add('lightbox-image');
        const lightboxCloseButton = document.createElement('a');
        lightboxCloseButton.classList.add('lightbox-close');
        lightboxCloseButton.href = '#';
        lightboxCloseButton.textContent = '×';
        const lightboxPrevButton = document.createElement('a');
        lightboxPrevButton.classList.add('lightbox-prev');
        lightboxPrevButton.href = '#';
        lightboxPrevButton.textContent = '‹';
        const lightboxNextButton = document.createElement('a');
        lightboxNextButton.classList.add('lightbox-next');
        lightboxNextButton.href = '#';
        lightboxNextButton.textContent = '›';

        lightboxContainer.appendChild(lightboxImage);
        lightboxContainer.appendChild(lightboxCloseButton);
        lightboxOverlay.appendChild(lightboxContainer);
        lightboxOverlay.appendChild(lightboxPrevButton);
        lightboxOverlay.appendChild(lightboxNextButton);
        document.body.appendChild(lightboxOverlay);
    }
});