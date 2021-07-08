document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(data => {
        createTable(data)
    });

    
    
})

function createTable(data){
    data.forEach(element => {
        let trTag = document.createElement('tr');
        let dogName = document.createElement('td');
        let dogBreed = document.createElement('td');
        let dogGender = document.createElement('td');
        let editButton = document.createElement('button');
        
        dogName.textContent = element.name;
        dogBreed.textContent = element.breed;
        dogGender.textContent = element.sex;
        dogName.id = 'nameTag';
        dogBreed.id = 'breedTag'
        dogGender.id = 'genderTag'
        trTag.id = element.name;

        let formData = {
            id: element.name,
            dogName: element.name,
            dogBreed: element.breed,
            dogGender: element.sex
        }

        editButton.textContent = "Edit"
        editButton.addEventListener('click', () => {
            fillFormBox(formData);
        })

        trTag.append(dogName, dogBreed, dogGender, editButton);
        document.querySelector('#table-body').append(trTag);
        
    })
}

function fillFormBox(data){
    let dogForm = document.querySelector("#dog-form");
    dogForm.name.value = data.dogName;
    dogForm.breed.value = data.dogBreed;
    dogForm.sex.value = data.dogGender;

    dogForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let currentRow = document.querySelector(`#${data.id}`)
        let currentName = currentRow.querySelector('#nameTag');
        let currentBreed = currentRow.querySelector('#breedTag');
        let currentGender = currentRow.querySelector('#genderTag');

        currentName.textContent = e.target.name.value;
        currentBreed.textContent = e.target.breed.value;
        currentGender.textContent = e.target.sex.value;

        console.log(document.querySelector(`#${data.id}`).querySelector('#nameTag'));
        console.log(document.querySelector(`#${data.id}`))
    })
}