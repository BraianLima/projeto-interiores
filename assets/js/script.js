function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const textoWhatsapp =
        'Olá, me chamo ' + data.name + '.' +
        '\nGostaria de solicitar um orçamento, segue minhas informações e projeto.' +
        '\nTelefone: ' + data.phone +
        '\nE-mail: ' + data.email +
        '\nProjeto: *' + data.project + '*';

    let textoFinal = textoWhatsapp;
    if ((data.message ?? '').length > 0) {
        textoFinal += '\nNecessidades e ideias: ' + data.message;
    }

    const numeroDestino = '5541999333572'; // Substitua pelo número do WhatsApp desejado (com DDI + DDD)
    const urlWhatsapp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(textoFinal)}`;

    const link = document.createElement('a');
    link.href = urlWhatsapp;
    link.target = '_blank';
    link.click();
}
