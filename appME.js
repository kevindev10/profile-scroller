
const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileScroller(data) 

changeProfile()

function profileScroller(profiles){

    let nextindex = 0;
    //console.log(data)
    return{
      next: function (){

               
          return nextindex  < profiles.length ?
          {values: profiles[nextindex++], done:false} :
          {done:true}
        
     
      }
    }

}

document.querySelector('#next').addEventListener('click', changeProfile)

function changeProfile(){
  let currentProfile = profiles.next().values;

  if(currentProfile !== undefined){
      const imageDisplay = document.querySelector('#imageDisplay');

      const profileDisplay = document.querySelector('#profileDisplay');
    
      imageDisplay.innerHTML = `<img src="${currentProfile.image}">`;
    
      profileDisplay.innerHTML =`
                                  <ul>
                                    <li>Age: ${currentProfile.age}</li>
                                    <li>Gender: ${currentProfile.gender}</li>
                                    <li>Location: ${currentProfile.location}</li>
                                    <li>Looking for: ${currentProfile.lookingfor}</li>
                                    <li>name: ${currentProfile.name}</li>
                                    
                                  </ul>
                                `
    }else{
      window.location.reload();
    }



}

// console.log(profiles.next().values);

// console.log(profiles.next().values);

// console.log(profiles.next().values);

// console.log(profiles.next().values);