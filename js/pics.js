

const pic = [

    {
        type: 'First Bike',
        photo: '../images/Suzuki GSX-R 75019886.jpg'
       

    },
    {
        type: 'Pre-Race ',
        photo: '../images/RaceBike1.jpg'

    },
    {
        type: 'Racing Event',
        photo: '../images/Roadracing.jpg'

    },
    {

    type: 'Racing Event',
    photo: '../images/hondagw.jpg'

    }




]

const main = document.querySelector('main')
html = '';

for (let i = 0; i < pic.length; i++) {
    let bike = pic[i];
    html += `

    <div class="col" id="gallery">
    <h4>${bike.type}<h4>
    <img src="img/${bike.photo}" alt="{bike.type}" width="150px">
    
    </div>
     
`;

}


main.insertAdjacentHTML('beforeend', html);