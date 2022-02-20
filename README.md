node-red-contrib-home-iot-api
================

Node-RED node for home-iot-api

The API for the EatBacon IOT project

## Install

To install the stable version use the `Menu - Manage palette - Install` 
option and search for node-red-contrib-home-iot-api, or run the following 
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-home-iot-api

## Usage

### Methods

#### GET /devices

returns all registered devices

    skip : integer
    limit : integer
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /devices



    device : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /lighting/dimmers/{deviceId}/{value}



    deviceId : string
    value : integer
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /lighting/dimmers/{deviceId}/{value}/timer/{timeunit}

sets a dimmer to a specific value on a timer

    deviceId : string
    value : integer
    timeunit : integer
    units : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /lighting/switches/{deviceId}



    deviceId : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /lighting/switches/{deviceId}/{value}



    deviceId : string
    value : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /lighting/switches/{deviceId}/{value}/timer/{minutes}

sets a switch to a specific value on a timer

    deviceId : string
    value : string
    minutes : integer
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /lightingSummary



     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /temperature



     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /temperature/forecast/{days}



    days : integer
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /temperature/{zoneId}



    zoneId : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /temperature/{zoneId}/heater

gets the state of the heater

    zoneId : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /temperature/{zoneId}/heater/{state}

turns the heater on or off

    zoneId : string
    state : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /zones



     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /zones/{zoneId}/quiet



    zoneId : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'


## License

#### Apache-2.0

