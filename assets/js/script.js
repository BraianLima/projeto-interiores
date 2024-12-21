function handleSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  
  // Aqui você pode adicionar a lógica para enviar os dados do formulário
  console.log('Dados do formulário:', data);
  
  // Exemplo de feedback para o usuário
  alert('Obrigado! Entraremos em contato em breve.');
  event.target.reset();
}