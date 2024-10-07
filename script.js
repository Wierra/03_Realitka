const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  }

//separátní proměnná
const city = apartment.city
const district = apartment.district 

document.body.innerHTML = "<p>Dispozice bytu je: " + apartment.disposition + "</p>"

document.body.innerHTML += "<p>Čistý nájem činí: " + apartment.price.rent + " Kč za měsíc. </p>"

document.body.innerHTML += "<p>Měsíční nájem vč. poplatků činí: " + Number(apartment.price.rent + apartment.price.fees.water + apartment.price.fees.energy + apartment.price.fees.services) + " Kč za měsíc. </p>"

document.body.innerHTML += "<p>Výměra bytu je: " + apartment.area.floorage + " " + String(apartment.area.units) + " vč. balkónu " + apartment.area.balcony + apartment.area.units + "</p>"

document.body.innerHTML += "<p>Byt se nachází ve městě " + city + ", " + district + "</p>"



document.body.innerHTML += "<p>Stav inzerátu: " + apartment.status + "</p>"

apartment.status = 'taken'

document.body.innerHTML += "<p>Stav inzerátu: " + apartment.status + "</p>"