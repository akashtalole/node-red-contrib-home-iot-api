/*jshint -W069 */
/**
 * The API for the EatBacon IOT project
 * @class HomeIotApi
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var HomeIotApi = (function(){
    'use strict';

    var request = require('request');
    var Q = require('q');
    var fileType = require('file-type');

    function HomeIotApi(options){
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'https://virtserver.swaggerhub.com/iot369/iot/1.0.0';
        if(this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                  .forEach(function(parameterName) {
                      var parameter = parameters.$queryParameters[parameterName];
                      queryParameters[parameterName] = parameter;
            });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name HomeIotApi#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    HomeIotApi.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred){
        var req = {
            method: method,
            uri: url,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if(Object.keys(form).length > 0) {
            if (req.headers['Content-Type'] && req.headers['Content-Type'][0] === 'multipart/form-data') {
                delete req.body;
                var keyName = Object.keys(form)[0]
                req.formData = {
                    [keyName]: {
                        value: form[keyName],
                        options: {
                            filename: (fileType(form[keyName]) != null ? `file.${ fileType(form[keyName]).ext }` : `file` )
                        }
                    }
                };
            } else {
                req.form = form;
            }
        }
        if(typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body){
            if(error) {
                deferred.reject(error);
            } else {
                if(/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch(e) {}
                }
                if(response.statusCode === 204) {
                    deferred.resolve({ response: response });
                } else if(response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });
    };


/**
 * returns all registered devices
 * @method
 * @name HomeIotApi#getDevices
 * @param {object} parameters - method options and parameters
     * @param {integer} parameters.skip - number of records to skip
     * @param {integer} parameters.limit - max number of records to return
 */
 HomeIotApi.prototype.getDevices = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/devices';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['skip'] !== undefined){
                    queryParameters['skip'] = parameters['skip'];
                }
        
        
        


 

                if(parameters['limit'] !== undefined){
                    queryParameters['limit'] = parameters['limit'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * 
 * @method
 * @name HomeIotApi#register
 * @param {object} parameters - method options and parameters
     * @param {} parameters.device - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.register = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/devices';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
        
            if(parameters['device'] !== undefined){
                body = parameters['device'];
            }


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * 
 * @method
 * @name HomeIotApi#setDimmer
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.deviceId - The API for the EatBacon IOT project
     * @param {integer} parameters.value - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.setDimmer = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/lighting/dimmers/{deviceId}/{value}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{deviceId}', parameters['deviceId']);
        
        


        if(parameters['deviceId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: deviceId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{value}', parameters['value']);
        
        


        if(parameters['value'] === undefined){
            deferred.reject(new Error('Missing required  parameter: value'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * sets a dimmer to a specific value on a timer
 * @method
 * @name HomeIotApi#setDimmerTimer
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.deviceId - The API for the EatBacon IOT project
     * @param {integer} parameters.value - The API for the EatBacon IOT project
     * @param {integer} parameters.timeunit - The API for the EatBacon IOT project
     * @param {string} parameters.units - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.setDimmerTimer = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/lighting/dimmers/{deviceId}/{value}/timer/{timeunit}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{deviceId}', parameters['deviceId']);
        
        


        if(parameters['deviceId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: deviceId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{value}', parameters['value']);
        
        


        if(parameters['value'] === undefined){
            deferred.reject(new Error('Missing required  parameter: value'));
            return deferred.promise;
        }
 
        
            path = path.replace('{timeunit}', parameters['timeunit']);
        
        


        if(parameters['timeunit'] === undefined){
            deferred.reject(new Error('Missing required  parameter: timeunit'));
            return deferred.promise;
        }
 

                if(parameters['units'] !== undefined){
                    queryParameters['units'] = parameters['units'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * 
 * @method
 * @name HomeIotApi#getSwitchState
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.deviceId - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.getSwitchState = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/lighting/switches/{deviceId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{deviceId}', parameters['deviceId']);
        
        


        if(parameters['deviceId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: deviceId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * 
 * @method
 * @name HomeIotApi#setSwitch
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.deviceId - The API for the EatBacon IOT project
     * @param {string} parameters.value - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.setSwitch = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/lighting/switches/{deviceId}/{value}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{deviceId}', parameters['deviceId']);
        
        


        if(parameters['deviceId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: deviceId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{value}', parameters['value']);
        
        


        if(parameters['value'] === undefined){
            deferred.reject(new Error('Missing required  parameter: value'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * sets a switch to a specific value on a timer
 * @method
 * @name HomeIotApi#setSwitchTimer
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.deviceId - The API for the EatBacon IOT project
     * @param {string} parameters.value - The API for the EatBacon IOT project
     * @param {integer} parameters.minutes - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.setSwitchTimer = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/lighting/switches/{deviceId}/{value}/timer/{minutes}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{deviceId}', parameters['deviceId']);
        
        


        if(parameters['deviceId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: deviceId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{value}', parameters['value']);
        
        


        if(parameters['value'] === undefined){
            deferred.reject(new Error('Missing required  parameter: value'));
            return deferred.promise;
        }
 
        
            path = path.replace('{minutes}', parameters['minutes']);
        
        


        if(parameters['minutes'] === undefined){
            deferred.reject(new Error('Missing required  parameter: minutes'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * 
 * @method
 * @name HomeIotApi#getLightingSummary
 * @param {object} parameters - method options and parameters
 */
 HomeIotApi.prototype.getLightingSummary = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/lightingSummary';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * 
 * @method
 * @name HomeIotApi#temperatureSummary
 * @param {object} parameters - method options and parameters
 */
 HomeIotApi.prototype.temperatureSummary = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/temperature';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * 
 * @method
 * @name HomeIotApi#getForecast
 * @param {object} parameters - method options and parameters
     * @param {integer} parameters.days - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.getForecast = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/temperature/forecast/{days}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{days}', parameters['days']);
        
        


        if(parameters['days'] === undefined){
            deferred.reject(new Error('Missing required  parameter: days'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * 
 * @method
 * @name HomeIotApi#getZoneTemperature
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.zoneId - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.getZoneTemperature = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/temperature/{zoneId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{zoneId}', parameters['zoneId']);
        
        


        if(parameters['zoneId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: zoneId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * gets the state of the heater
 * @method
 * @name HomeIotApi#getHeaterState
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.zoneId - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.getHeaterState = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/temperature/{zoneId}/heater';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{zoneId}', parameters['zoneId']);
        
        


        if(parameters['zoneId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: zoneId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * turns the heater on or off
 * @method
 * @name HomeIotApi#setHeaterState
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.zoneId - The API for the EatBacon IOT project
     * @param {string} parameters.state - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.setHeaterState = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/temperature/{zoneId}/heater/{state}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{zoneId}', parameters['zoneId']);
        
        


        if(parameters['zoneId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: zoneId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{state}', parameters['state']);
        
        


        if(parameters['state'] === undefined){
            deferred.reject(new Error('Missing required  parameter: state'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * 
 * @method
 * @name HomeIotApi#getZones
 * @param {object} parameters - method options and parameters
 */
 HomeIotApi.prototype.getZones = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/zones';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * 
 * @method
 * @name HomeIotApi#quietZone
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.zoneId - The API for the EatBacon IOT project
 */
 HomeIotApi.prototype.quietZone = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/zones/{zoneId}/quiet';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{zoneId}', parameters['zoneId']);
        
        


        if(parameters['zoneId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: zoneId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };

    return HomeIotApi;
})();

exports.HomeIotApi = HomeIotApi;
