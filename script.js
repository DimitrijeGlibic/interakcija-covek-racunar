const checkDomainButton = document.querySelector('#domain-check-button');

checkDomainButton.addEventListener('click', () => {
    const allowedDomainIndexes = [0, 2, 3, 4];

    document.querySelectorAll('#domains-list .domain-card').forEach((domainCard, index) => {
        if (allowedDomainIndexes.includes(index)) {
            domainCard.classList.add('allowed-domain');
        }
        else {
            domainCard.classList.add('occupied-domain');
        }
    });
});