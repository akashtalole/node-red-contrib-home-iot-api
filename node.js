'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function HomeIotApiNode(config) {
        RED.nodes.createNode(this, config);
        this.method = config.method;
        this.getDevices_skip = config.getDevices_skip;
        this.getDevices_skipType = config.getDevices_skipType || 'str';
        this.getDevices_limit = config.getDevices_limit;
        this.getDevices_limitType = config.getDevices_limitType || 'str';
        this.register_device = config.register_device;
        this.register_deviceType = config.register_deviceType || 'str';
        this.setDimmer_deviceId = config.setDimmer_deviceId;
        this.setDimmer_deviceIdType = config.setDimmer_deviceIdType || 'str';
        this.setDimmer_value = config.setDimmer_value;
        this.setDimmer_valueType = config.setDimmer_valueType || 'str';
        this.setDimmerTimer_deviceId = config.setDimmerTimer_deviceId;
        this.setDimmerTimer_deviceIdType = config.setDimmerTimer_deviceIdType || 'str';
        this.setDimmerTimer_value = config.setDimmerTimer_value;
        this.setDimmerTimer_valueType = config.setDimmerTimer_valueType || 'str';
        this.setDimmerTimer_timeunit = config.setDimmerTimer_timeunit;
        this.setDimmerTimer_timeunitType = config.setDimmerTimer_timeunitType || 'str';
        this.setDimmerTimer_units = config.setDimmerTimer_units;
        this.setDimmerTimer_unitsType = config.setDimmerTimer_unitsType || 'str';
        this.getSwitchState_deviceId = config.getSwitchState_deviceId;
        this.getSwitchState_deviceIdType = config.getSwitchState_deviceIdType || 'str';
        this.setSwitch_deviceId = config.setSwitch_deviceId;
        this.setSwitch_deviceIdType = config.setSwitch_deviceIdType || 'str';
        this.setSwitch_value = config.setSwitch_value;
        this.setSwitch_valueType = config.setSwitch_valueType || 'str';
        this.setSwitchTimer_deviceId = config.setSwitchTimer_deviceId;
        this.setSwitchTimer_deviceIdType = config.setSwitchTimer_deviceIdType || 'str';
        this.setSwitchTimer_value = config.setSwitchTimer_value;
        this.setSwitchTimer_valueType = config.setSwitchTimer_valueType || 'str';
        this.setSwitchTimer_minutes = config.setSwitchTimer_minutes;
        this.setSwitchTimer_minutesType = config.setSwitchTimer_minutesType || 'str';
        this.getForecast_days = config.getForecast_days;
        this.getForecast_daysType = config.getForecast_daysType || 'str';
        this.getZoneTemperature_zoneId = config.getZoneTemperature_zoneId;
        this.getZoneTemperature_zoneIdType = config.getZoneTemperature_zoneIdType || 'str';
        this.getHeaterState_zoneId = config.getHeaterState_zoneId;
        this.getHeaterState_zoneIdType = config.getHeaterState_zoneIdType || 'str';
        this.setHeaterState_zoneId = config.setHeaterState_zoneId;
        this.setHeaterState_zoneIdType = config.setHeaterState_zoneIdType || 'str';
        this.setHeaterState_state = config.setHeaterState_state;
        this.setHeaterState_stateType = config.setHeaterState_stateType || 'str';
        this.quietZone_zoneId = config.quietZone_zoneId;
        this.quietZone_zoneIdType = config.quietZone_zoneIdType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.HomeIotApi();
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'getDevices') {
                var getDevices_parameters = [];
                var getDevices_nodeParam;
                var getDevices_nodeParamType;

                getDevices_nodeParam = node.getDevices_skip;
                getDevices_nodeParamType = node.getDevices_skipType;
                if (getDevices_nodeParamType === 'str') {
                    getDevices_parameters.skip = getDevices_nodeParam || '';
                } else {
                    getDevices_parameters.skip = RED.util.getMessageProperty(msg, getDevices_nodeParam);
                }
                getDevices_parameters.skip = !!getDevices_parameters.skip ? getDevices_parameters.skip : msg.payload;
                
                getDevices_nodeParam = node.getDevices_limit;
                getDevices_nodeParamType = node.getDevices_limitType;
                if (getDevices_nodeParamType === 'str') {
                    getDevices_parameters.limit = getDevices_nodeParam || '';
                } else {
                    getDevices_parameters.limit = RED.util.getMessageProperty(msg, getDevices_nodeParam);
                }
                getDevices_parameters.limit = !!getDevices_parameters.limit ? getDevices_parameters.limit : msg.payload;
                                result = client.getDevices(getDevices_parameters);
            }
            if (!errorFlag && node.method === 'register') {
                var register_parameters = [];
                var register_nodeParam;
                var register_nodeParamType;

                register_nodeParam = node.register_device;
                register_nodeParamType = node.register_deviceType;
                if (register_nodeParamType === 'str') {
                    register_parameters.device = register_nodeParam || '';
                } else {
                    register_parameters.device = RED.util.getMessageProperty(msg, register_nodeParam);
                }
                register_parameters.device = !!register_parameters.device ? register_parameters.device : msg.payload;
                                result = client.register(register_parameters);
            }
            if (!errorFlag && node.method === 'setDimmer') {
                var setDimmer_parameters = [];
                var setDimmer_nodeParam;
                var setDimmer_nodeParamType;

                setDimmer_nodeParam = node.setDimmer_deviceId;
                setDimmer_nodeParamType = node.setDimmer_deviceIdType;
                if (setDimmer_nodeParamType === 'str') {
                    setDimmer_parameters.deviceId = setDimmer_nodeParam || '';
                } else {
                    setDimmer_parameters.deviceId = RED.util.getMessageProperty(msg, setDimmer_nodeParam);
                }
                setDimmer_parameters.deviceId = !!setDimmer_parameters.deviceId ? setDimmer_parameters.deviceId : msg.payload;
                
                setDimmer_nodeParam = node.setDimmer_value;
                setDimmer_nodeParamType = node.setDimmer_valueType;
                if (setDimmer_nodeParamType === 'str') {
                    setDimmer_parameters.value = setDimmer_nodeParam || '';
                } else {
                    setDimmer_parameters.value = RED.util.getMessageProperty(msg, setDimmer_nodeParam);
                }
                setDimmer_parameters.value = !!setDimmer_parameters.value ? setDimmer_parameters.value : msg.payload;
                                result = client.setDimmer(setDimmer_parameters);
            }
            if (!errorFlag && node.method === 'setDimmerTimer') {
                var setDimmerTimer_parameters = [];
                var setDimmerTimer_nodeParam;
                var setDimmerTimer_nodeParamType;

                setDimmerTimer_nodeParam = node.setDimmerTimer_deviceId;
                setDimmerTimer_nodeParamType = node.setDimmerTimer_deviceIdType;
                if (setDimmerTimer_nodeParamType === 'str') {
                    setDimmerTimer_parameters.deviceId = setDimmerTimer_nodeParam || '';
                } else {
                    setDimmerTimer_parameters.deviceId = RED.util.getMessageProperty(msg, setDimmerTimer_nodeParam);
                }
                setDimmerTimer_parameters.deviceId = !!setDimmerTimer_parameters.deviceId ? setDimmerTimer_parameters.deviceId : msg.payload;
                
                setDimmerTimer_nodeParam = node.setDimmerTimer_value;
                setDimmerTimer_nodeParamType = node.setDimmerTimer_valueType;
                if (setDimmerTimer_nodeParamType === 'str') {
                    setDimmerTimer_parameters.value = setDimmerTimer_nodeParam || '';
                } else {
                    setDimmerTimer_parameters.value = RED.util.getMessageProperty(msg, setDimmerTimer_nodeParam);
                }
                setDimmerTimer_parameters.value = !!setDimmerTimer_parameters.value ? setDimmerTimer_parameters.value : msg.payload;
                
                setDimmerTimer_nodeParam = node.setDimmerTimer_timeunit;
                setDimmerTimer_nodeParamType = node.setDimmerTimer_timeunitType;
                if (setDimmerTimer_nodeParamType === 'str') {
                    setDimmerTimer_parameters.timeunit = setDimmerTimer_nodeParam || '';
                } else {
                    setDimmerTimer_parameters.timeunit = RED.util.getMessageProperty(msg, setDimmerTimer_nodeParam);
                }
                setDimmerTimer_parameters.timeunit = !!setDimmerTimer_parameters.timeunit ? setDimmerTimer_parameters.timeunit : msg.payload;
                
                setDimmerTimer_nodeParam = node.setDimmerTimer_units;
                setDimmerTimer_nodeParamType = node.setDimmerTimer_unitsType;
                if (setDimmerTimer_nodeParamType === 'str') {
                    setDimmerTimer_parameters.units = setDimmerTimer_nodeParam || '';
                } else {
                    setDimmerTimer_parameters.units = RED.util.getMessageProperty(msg, setDimmerTimer_nodeParam);
                }
                setDimmerTimer_parameters.units = !!setDimmerTimer_parameters.units ? setDimmerTimer_parameters.units : msg.payload;
                                result = client.setDimmerTimer(setDimmerTimer_parameters);
            }
            if (!errorFlag && node.method === 'getSwitchState') {
                var getSwitchState_parameters = [];
                var getSwitchState_nodeParam;
                var getSwitchState_nodeParamType;

                getSwitchState_nodeParam = node.getSwitchState_deviceId;
                getSwitchState_nodeParamType = node.getSwitchState_deviceIdType;
                if (getSwitchState_nodeParamType === 'str') {
                    getSwitchState_parameters.deviceId = getSwitchState_nodeParam || '';
                } else {
                    getSwitchState_parameters.deviceId = RED.util.getMessageProperty(msg, getSwitchState_nodeParam);
                }
                getSwitchState_parameters.deviceId = !!getSwitchState_parameters.deviceId ? getSwitchState_parameters.deviceId : msg.payload;
                                result = client.getSwitchState(getSwitchState_parameters);
            }
            if (!errorFlag && node.method === 'setSwitch') {
                var setSwitch_parameters = [];
                var setSwitch_nodeParam;
                var setSwitch_nodeParamType;

                setSwitch_nodeParam = node.setSwitch_deviceId;
                setSwitch_nodeParamType = node.setSwitch_deviceIdType;
                if (setSwitch_nodeParamType === 'str') {
                    setSwitch_parameters.deviceId = setSwitch_nodeParam || '';
                } else {
                    setSwitch_parameters.deviceId = RED.util.getMessageProperty(msg, setSwitch_nodeParam);
                }
                setSwitch_parameters.deviceId = !!setSwitch_parameters.deviceId ? setSwitch_parameters.deviceId : msg.payload;
                
                setSwitch_nodeParam = node.setSwitch_value;
                setSwitch_nodeParamType = node.setSwitch_valueType;
                if (setSwitch_nodeParamType === 'str') {
                    setSwitch_parameters.value = setSwitch_nodeParam || '';
                } else {
                    setSwitch_parameters.value = RED.util.getMessageProperty(msg, setSwitch_nodeParam);
                }
                setSwitch_parameters.value = !!setSwitch_parameters.value ? setSwitch_parameters.value : msg.payload;
                                result = client.setSwitch(setSwitch_parameters);
            }
            if (!errorFlag && node.method === 'setSwitchTimer') {
                var setSwitchTimer_parameters = [];
                var setSwitchTimer_nodeParam;
                var setSwitchTimer_nodeParamType;

                setSwitchTimer_nodeParam = node.setSwitchTimer_deviceId;
                setSwitchTimer_nodeParamType = node.setSwitchTimer_deviceIdType;
                if (setSwitchTimer_nodeParamType === 'str') {
                    setSwitchTimer_parameters.deviceId = setSwitchTimer_nodeParam || '';
                } else {
                    setSwitchTimer_parameters.deviceId = RED.util.getMessageProperty(msg, setSwitchTimer_nodeParam);
                }
                setSwitchTimer_parameters.deviceId = !!setSwitchTimer_parameters.deviceId ? setSwitchTimer_parameters.deviceId : msg.payload;
                
                setSwitchTimer_nodeParam = node.setSwitchTimer_value;
                setSwitchTimer_nodeParamType = node.setSwitchTimer_valueType;
                if (setSwitchTimer_nodeParamType === 'str') {
                    setSwitchTimer_parameters.value = setSwitchTimer_nodeParam || '';
                } else {
                    setSwitchTimer_parameters.value = RED.util.getMessageProperty(msg, setSwitchTimer_nodeParam);
                }
                setSwitchTimer_parameters.value = !!setSwitchTimer_parameters.value ? setSwitchTimer_parameters.value : msg.payload;
                
                setSwitchTimer_nodeParam = node.setSwitchTimer_minutes;
                setSwitchTimer_nodeParamType = node.setSwitchTimer_minutesType;
                if (setSwitchTimer_nodeParamType === 'str') {
                    setSwitchTimer_parameters.minutes = setSwitchTimer_nodeParam || '';
                } else {
                    setSwitchTimer_parameters.minutes = RED.util.getMessageProperty(msg, setSwitchTimer_nodeParam);
                }
                setSwitchTimer_parameters.minutes = !!setSwitchTimer_parameters.minutes ? setSwitchTimer_parameters.minutes : msg.payload;
                                result = client.setSwitchTimer(setSwitchTimer_parameters);
            }
            if (!errorFlag && node.method === 'getLightingSummary') {
                var getLightingSummary_parameters = [];
                var getLightingSummary_nodeParam;
                var getLightingSummary_nodeParamType;
                result = client.getLightingSummary(getLightingSummary_parameters);
            }
            if (!errorFlag && node.method === 'temperatureSummary') {
                var temperatureSummary_parameters = [];
                var temperatureSummary_nodeParam;
                var temperatureSummary_nodeParamType;
                result = client.temperatureSummary(temperatureSummary_parameters);
            }
            if (!errorFlag && node.method === 'getForecast') {
                var getForecast_parameters = [];
                var getForecast_nodeParam;
                var getForecast_nodeParamType;

                getForecast_nodeParam = node.getForecast_days;
                getForecast_nodeParamType = node.getForecast_daysType;
                if (getForecast_nodeParamType === 'str') {
                    getForecast_parameters.days = getForecast_nodeParam || '';
                } else {
                    getForecast_parameters.days = RED.util.getMessageProperty(msg, getForecast_nodeParam);
                }
                getForecast_parameters.days = !!getForecast_parameters.days ? getForecast_parameters.days : msg.payload;
                                result = client.getForecast(getForecast_parameters);
            }
            if (!errorFlag && node.method === 'getZoneTemperature') {
                var getZoneTemperature_parameters = [];
                var getZoneTemperature_nodeParam;
                var getZoneTemperature_nodeParamType;

                getZoneTemperature_nodeParam = node.getZoneTemperature_zoneId;
                getZoneTemperature_nodeParamType = node.getZoneTemperature_zoneIdType;
                if (getZoneTemperature_nodeParamType === 'str') {
                    getZoneTemperature_parameters.zoneId = getZoneTemperature_nodeParam || '';
                } else {
                    getZoneTemperature_parameters.zoneId = RED.util.getMessageProperty(msg, getZoneTemperature_nodeParam);
                }
                getZoneTemperature_parameters.zoneId = !!getZoneTemperature_parameters.zoneId ? getZoneTemperature_parameters.zoneId : msg.payload;
                                result = client.getZoneTemperature(getZoneTemperature_parameters);
            }
            if (!errorFlag && node.method === 'getHeaterState') {
                var getHeaterState_parameters = [];
                var getHeaterState_nodeParam;
                var getHeaterState_nodeParamType;

                getHeaterState_nodeParam = node.getHeaterState_zoneId;
                getHeaterState_nodeParamType = node.getHeaterState_zoneIdType;
                if (getHeaterState_nodeParamType === 'str') {
                    getHeaterState_parameters.zoneId = getHeaterState_nodeParam || '';
                } else {
                    getHeaterState_parameters.zoneId = RED.util.getMessageProperty(msg, getHeaterState_nodeParam);
                }
                getHeaterState_parameters.zoneId = !!getHeaterState_parameters.zoneId ? getHeaterState_parameters.zoneId : msg.payload;
                                result = client.getHeaterState(getHeaterState_parameters);
            }
            if (!errorFlag && node.method === 'setHeaterState') {
                var setHeaterState_parameters = [];
                var setHeaterState_nodeParam;
                var setHeaterState_nodeParamType;

                setHeaterState_nodeParam = node.setHeaterState_zoneId;
                setHeaterState_nodeParamType = node.setHeaterState_zoneIdType;
                if (setHeaterState_nodeParamType === 'str') {
                    setHeaterState_parameters.zoneId = setHeaterState_nodeParam || '';
                } else {
                    setHeaterState_parameters.zoneId = RED.util.getMessageProperty(msg, setHeaterState_nodeParam);
                }
                setHeaterState_parameters.zoneId = !!setHeaterState_parameters.zoneId ? setHeaterState_parameters.zoneId : msg.payload;
                
                setHeaterState_nodeParam = node.setHeaterState_state;
                setHeaterState_nodeParamType = node.setHeaterState_stateType;
                if (setHeaterState_nodeParamType === 'str') {
                    setHeaterState_parameters.state = setHeaterState_nodeParam || '';
                } else {
                    setHeaterState_parameters.state = RED.util.getMessageProperty(msg, setHeaterState_nodeParam);
                }
                setHeaterState_parameters.state = !!setHeaterState_parameters.state ? setHeaterState_parameters.state : msg.payload;
                                result = client.setHeaterState(setHeaterState_parameters);
            }
            if (!errorFlag && node.method === 'getZones') {
                var getZones_parameters = [];
                var getZones_nodeParam;
                var getZones_nodeParamType;
                result = client.getZones(getZones_parameters);
            }
            if (!errorFlag && node.method === 'quietZone') {
                var quietZone_parameters = [];
                var quietZone_nodeParam;
                var quietZone_nodeParamType;

                quietZone_nodeParam = node.quietZone_zoneId;
                quietZone_nodeParamType = node.quietZone_zoneIdType;
                if (quietZone_nodeParamType === 'str') {
                    quietZone_parameters.zoneId = quietZone_nodeParam || '';
                } else {
                    quietZone_parameters.zoneId = RED.util.getMessageProperty(msg, quietZone_nodeParam);
                }
                quietZone_parameters.zoneId = !!quietZone_parameters.zoneId ? quietZone_parameters.zoneId : msg.payload;
                                result = client.quietZone(quietZone_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'HomeIotApi.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('home-iot-api', HomeIotApiNode);
};
