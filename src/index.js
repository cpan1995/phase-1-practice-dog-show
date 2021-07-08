let formTracker;

document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(data => {
        createTable(data);
    });
    document.querySelector('#dog-form').addEventListener('submit', (e)=> {
        e.preventDefault();
        currentRow = updateForm();
        let currentName = currentRow.querySelector('#nameTag');
        let currentBreed = currentRow.querySelector('#breedTag');
        let currentGender = currentRow.querySelector('#genderTag');
        currentName.textContent = e.target.name.value;
        currentBreed.textContent = e.target.breed.value;
        currentGender.textContent = e.target.sex.value;
        console.log(e.target.name.value)
    
    })
})
function createTable(data){
    data.forEach((element,index) => {
        
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
        editButton.textContent = "Edit"
        let formData = {
            dogName: element.name,
            dogBreed: element.breed,
            dogGender: element.sex
        }
        editButton.addEventListener('click', () => {
            fillFormBox(formData);
            formTracker = index;
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
    
}
function updateForm(){
    let currentRow;
    document.querySelector('#table-body').childNodes.forEach((element, index) => {
        if (index == formTracker + 1){
            currentRow = element;
        }
    })
    return currentRow
}