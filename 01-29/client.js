const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
fetch('localhost:3000/process', {
    credentials: 'same-origin',
    headers: {
      'CSRF-Token': 'token'
    },
    method: 'POST',
    body: {
      food: 'pizza'
    }
  })
  .then(response => {
        console.log(response)
    })

