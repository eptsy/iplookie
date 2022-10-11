let APIKEY = 'bb61c8d414f87109181535dcac81d8fa';
fetch(`http://api.ipstack.com/check?access_key=${APIKEY}`).then(
    res => res.json()
).then(data => {
    console.log(data);
    document.getElementById('ipadress').innerHTML = data['ip'];
    document.getElementById('location').innerHTML = '<b>Location: </b>'+ data['city'] +
        '-'+data['zip']+', '+ data['country_name'];
    document.getElementById('continent').innerHTML = '<b>Continent: </b>'+ data['continent_name'];
    document.getElementById('language').innerHTML = '<b>Language: </b>'
        + data['languages'].name+'('+ data['languages'].native+')';
    document.getElementById('lati').innerHTML = '<b>Latitude: </b>'+data['latitude'];
    document.getElementById('long').innerHTML = '<b>Longitude: </b>'+data['longitude'];
    document.getElementById('flag').src = data['country_flag'];

})