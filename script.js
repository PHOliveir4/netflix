let movieCard = document.getElementById('movieCard');
        let modalOverlay = document.getElementById('modalOverlay');
        let closeBtn = document.getElementById('closeBtn');

        // Abre o painel quando clica no card
        movieCard.addEventListener('click', function () {
            modalOverlay.classList.add('active');
        });

        // Fecha o painel ao clicar no botão de fechar
        closeBtn.addEventListener('click', function () {
            modalOverlay.classList.remove('active');
        });

        // Fecha ao clicar fora do painel
        modalOverlay.addEventListener('click', function (event) {
            if (event.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });