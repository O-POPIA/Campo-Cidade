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